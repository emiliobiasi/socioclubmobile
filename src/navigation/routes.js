import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import ChooseSign from "../screens/ChooseSign";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import Loading from "../screens/Loading";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export const Layout = () => {
  const { authState, onLogout } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        {/* Adicione outras rotas aqui conforme necessário */}
        <Stack.Screen
          name="ChooseSign"
          component={ChooseSign}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        {authState?.authenticated ? (
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Routes() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}
