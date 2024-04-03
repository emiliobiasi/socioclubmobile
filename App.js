import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/routes"; // Atualize o caminho conforme necessário

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Routes />
    </NavigationContainer>
  );
}
