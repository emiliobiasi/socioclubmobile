import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const ClubCategory = ({ imageSource, title }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={imageSource} // Caminho para a imagem de fundo
        style={styles.imageBackground} // Estilo para a imagem de fundo
        imageStyle={styles.imageStyle} // Estilo adicional para a imagem
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200, // Largura do card
    height: 120, // Altura do card
    borderRadius: 10, // Borda arredondada para suavizar as bordas
    overflow: "hidden", // Para que a imagem não saia do card
    backgroundColor: "#253341", // Cor de fundo caso a imagem falhe
    margin: 10, // Espaçamento entre cards
  },
  imageBackground: {
    flex: 1, // Para preencher todo o card
    justifyContent: "flex-end", // Coloca o texto na parte inferior
  },
  imageStyle: {
    borderRadius: 10, // Mantém a borda arredondada para a imagem
  },
  title: {
    color: "#fff", // Cor branca para o texto
    fontSize: 16, // Tamanho do texto para destaque
    textAlign: "center", // Centraliza horizontalmente
    padding: 10, // Espaçamento interno para o texto
  },
});

export default ClubCategory;
