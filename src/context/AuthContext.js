import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import ClientsService from "../services/ClientsService";
import { useUser } from "../context/UserContext";

const USER = "my-user";
const TOKEN_KEY = "my-jwt";
const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const { updateUserInfo } = useUser();
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      console.log("stored:", token);
      const user = JSON.parse(await SecureStore.getItemAsync(USER));
      console.log("user:", user);
      updateUserInfo(user);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setAuthState({
          token: token,
          authenticated: true,
        });
      }
    };

    loadToken();
  }, []);

  const register = async (cpf, name, email, password) => {
    try {
      return ClientsService.registrarClient(cpf, name, email, password);
    } catch (e) {
      return { error: true, msg: e.response.data.msg };
    }
  };

  const login = async (email, password) => {
    try {
      const result = await ClientsService.logarClient(email, password);

      console.log("🚀 ~ file: AuthContext.js: ~ login ~ result:", result.data);

      setAuthState({
        token: result.data.access_token,
        authenticated: true,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.access_token}`;
      await SecureStore.setItemAsync(TOKEN_KEY, result.data.access_token);

      await SecureStore.setItemAsync(
        USER,
        JSON.stringify({
          id: result.data.id,
          cpf: result.data.cpf,
          name: result.data.name,
          email: result.data.email,
        })
      );

      await updateUserInfo({
        id: result.data.id,
        cpf: result.data.cpf,
        name: result.data.name,
        email: result.data.email,
      });

      return result;
    } catch (e) {
      return { error: true, msg: e.response.data.msg };
    }
  };

  const logout = async () => {
    // Delete token from storage
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(USER);

    // Update HTTP Headers
    axios.defaults.headers.common["Authorization"] = "";

    // Reset auth state
    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
