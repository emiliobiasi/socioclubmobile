import React from "react";
import { Text, StyleSheet } from "react-native";

const H2Title = ({ text }) => {
  return <Text style={styles.h2}>{text}</Text>;
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 30, // Tamanho do texto para título grande
    fontWeight: "bold", // Negrito para destaque
    color: "#ffffff", // Cor branca do texto
    textAlign: "center", // Centraliza horizontalmente
    marginVertical: 20, // Espaçamento vertical para separar do conteúdo
  },
});

export default H2Title;
