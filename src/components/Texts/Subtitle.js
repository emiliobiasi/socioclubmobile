import React from "react";
import { Text, StyleSheet } from "react-native";

const Subtitle = ({ text, marginVertical = 0 }) => {
  return <Text style={[styles.subtitle, { marginVertical }]}>{text}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18, // Tamanho do texto para um subtítulo
    color: "#AAB8C2", // Cor cinza clara para o texto
    textAlign: "center", // Centraliza horizontalmente
    paddingHorizontal: 15, // Espaçamento horizontal para não encostar nas bordas
  },
});

export default Subtitle;
