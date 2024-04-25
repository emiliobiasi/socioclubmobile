// Loading.js
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const LoadingScreen = ({ navigation }) => {
  const { onLogout } = useAuth();

  useEffect(() => {
    const testCall = async () => {
      const result = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/clients`
      );
      console.log(
        "🚀 ~ file: LoadingScreen.tsx:21 ~ testCall ~ result:",
        result
      );
    };
    testCall();
  }, []);

  const logout = async () => {
    try {
      const result = await onLogout();
      if (result && !result.error) {
        navigation.navigate("Loading");
      } else {
        alert(result.msg);
      }
    } catch (e) {
      alert("Falha ao realizar login. Por favor, tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/socioclublogodark.png")} // Substitua pelo caminho correto para sua imagem do logo
        style={styles.logo}
      />
      <Text style={styles.header}>Olá!</Text>
      <Text style={styles.header}> Bem-Vindo</Text>
      <Text style={styles.subtext}>
        Escolha seu time do coração e viva toda a experiência SocioClub!
      </Text>
      <TouchableOpacity style={styles.signOutButton} onPress={onLogout}>
        <Text style={styles.signOutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: width * 0.6, // Ajuste a largura conforme necessário
    height: height * 0.3, // Ajuste a altura conforme necessário
    resizeMode: "contain",
  },
  header: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20, // Ajuste o espaçamento conforme necessário
  },
  subtext: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10, // Ajuste o espaçamento conforme necessário
    textAlign: "center",
    paddingHorizontal: 30, // Ajuste o espaçamento horizontal conforme necessário
  },
  signOutButton: {
    backgroundColor: "#1D9BF0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  signOutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoadingScreen;
