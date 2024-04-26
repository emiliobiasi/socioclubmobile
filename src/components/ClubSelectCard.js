import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const ClubSelectCard = ({ backgroundImageSource, iconImageSource, title }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={backgroundImageSource} // Imagem de fundo do card
        style={styles.imageBackground} // Estilo da imagem de fundo
        imageStyle={styles.imageStyle} // Estilo para manter a borda do card
      >
        <Image
          source={iconImageSource} // Ícone do clube (circular)
          style={styles.iconImage} // Estilo para a imagem do ícone
        />
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200, // Largura do card
    height: 150, // Altura do card
    borderRadius: 15, // Borda arredondada para o card
    overflow: "hidden", // Garante que a imagem de fundo não saia do card
    backgroundColor: "#253341", // Cor de fundo do card
    margin: 10, // Espaçamento entre cards
  },
  imageBackground: {
    flex: 1, // Preenche todo o card
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
  },
  imageStyle: {
    borderRadius: 15, // Mantém a borda arredondada para a imagem de fundo
  },
  iconImage: {
    width: 80, // Tamanho da imagem do ícone
    height: 80, // Tamanho da imagem do ícone
    borderRadius: 40, // Tornar a imagem redonda
    borderWidth: 2, // Borda ao redor do ícone
    borderColor: "#fff", // Cor da borda
  },
  title: {
    color: "#fff", // Cor do texto
    fontSize: 18, // Tamanho do texto para destaque
    fontWeight: "bold", // Negrito para ênfase
    position: "absolute", // Mantém o texto na parte inferior
    bottom: 10, // Espaçamento a partir da parte inferior do card
  },
});

export default ClubSelectCard;
