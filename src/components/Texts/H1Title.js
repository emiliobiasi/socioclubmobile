import React from "react";
import { Text, StyleSheet } from "react-native";

const H1Title = ({ text, marginVertical = 0 }) => {
  return <Text style={[styles.h2, { marginVertical }]}>{text}</Text>;
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 36, // Tamanho do texto para título grande
    fontWeight: "bold", // Negrito para destaque
    color: "#ffffff", // Cor branca do texto
    textAlign: "center", // Centraliza horizontalmente
  },
});

export default H1Title;
