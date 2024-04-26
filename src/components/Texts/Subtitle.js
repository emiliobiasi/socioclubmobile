import React from "react";
import { Text, StyleSheet } from "react-native";

const Subtitle = ({ text }) => {
  return <Text style={styles.subtitle}>{text}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18, // Tamanho do texto para um subtítulo
    color: "#AAB8C2", // Cor cinza clara para o texto
    textAlign: "center", // Centraliza horizontalmente
    marginVertical: 20, // Espaçamento vertical para separação
    paddingHorizontal: 15, // Espaçamento horizontal para não encostar nas bordas
  },
});

export default Subtitle;
