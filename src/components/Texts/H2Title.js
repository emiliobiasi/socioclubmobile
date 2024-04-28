import React from "react";
import { Text, StyleSheet } from "react-native";

const H2Title = ({ text, marginVertical = 0 }) => {
  return <Text style={[styles.h2, { marginVertical }]}>{text}</Text>; // Título com estilo h2 e margem vertical opcional
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 26, // Tamanho do texto para o título médio
    fontWeight: "bold", // Negrito para ênfase
    color: "#ffffff", // Cor do texto
    textAlign: "left", // Alinhamento à esquerda
    marginLeft: 20, // Espaço para distanciar da borda esquerda
  },
});

export default H2Title;
