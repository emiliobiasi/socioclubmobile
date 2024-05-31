import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ClubCategory = ({ imageSource, title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 3, // Largura do card
    height: 40, // Altura do card
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
    fontWeight: "bold", // Negrito para ênfase
  },
});

export default ClubCategory;
