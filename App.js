import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/routes"; // Atualize o caminho conforme necessário
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
