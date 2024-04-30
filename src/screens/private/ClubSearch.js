import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import H1Title from "../../components/Texts/H1Title";
import Subtitle from "../../components/Texts/Subtitle";
import SearchBar from "../../components/SearchBar";
import H2Title from "../../components/Texts/H2Title";
import ClubCategory from "../../components/ClubCategory";
import ClubSelectCard from "../../components/ClubSelectCard";

const ClubSearch = ({ navigation }) => {
  const clubes = [
    {
      id: "",
      club_id: "",
      name: "Vasco",
      icon: require("../../../assets/images/vascoicon.png"),
      background: require("../../../assets/images/vascobandeira.png"),
      description: "Descrição do Clube do Vasco",
      categoy: "",
      colorScheme: {
        title: "#fff",
        background: "#15202B",
        primary: "#253341",
        icons: "#fff",
        div: "",
        text: "#AAB8C2",
        secondaryText: "",
        button: "#1D9BF0",
      },
    },
    {
      id: "2",
      club_id: "",
      name: "São Paulo",
      icon: require("../../../assets/images/saopauloicon.png"),
      background: require("../../../assets/images/saopaulobandeira.jpeg"),
      description: "Descrição do Clube São Paulo",
      categoy: "",
      colorScheme: {
        title: "#FFFFFF", // White for titles to stand out against darker backgrounds
        background: "#FF0000", // Red as the primary background color
        primary: "#000000", // Black as a secondary or primary color
        icons: "#FFFFFF", // White for icons to ensure visibility on darker backgrounds
        div: "#FFFFFF", // White dividers can be used for separating sections or elements
        text: "#FFFFFF", // White text to provide contrast against the red and black backgrounds
        secondaryText: "#BBBBBB", // Light grey for less prominent text that still needs to stand out
        button: "#000000", // Black buttons with white text
      },
    },
    {
      id: "3",
      club_id: "",
      name: "Clube da Luta",
      icon: require("../../../assets/images/vascoicon.png"),
      background: require("../../../assets/images/vascobandeira.png"),
      description: "Descrição do Clube da Luta",
      categoy: "",
      colorScheme: {
        title: "#fff",
        background: "#15202B",
        primary: "#253341",
        icons: "#fff",
        div: "",
        text: "#AAB8C2",
        secondaryText: "",
        button: "#1D9BF0",
      },
    },
  ];

  const categorias = [
    {
      id: "1",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Art",
    },
    {
      id: "2",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Collectibles",
    },
    {
      id: "3",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Domains",
    },
    {
      id: "4",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Domains",
    },
    {
      id: "5",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Domains",
    },
  ];

  return (
    <FlatList
      data={[{}]} // Elemento único para renderizar a estrutura da tela
      keyExtractor={() => "main-content"}
      contentContainerStyle={styles.contentContainer} // Mantém o estilo do contêiner
      style={styles.mainFlatList} // Define o estilo para ocupar toda a tela
      renderItem={() => (
        <>
          <View style={styles.sideSpace}>
            <H1Title text="Escolha seu Clube" marginVertical={10} />
            <Subtitle
              text="Busque seus clubes, conheça novos grupos e acesse a área de sócio"
              marginVertical={20}
            />
            <View style={styles.searchBar}>
              <SearchBar placeholder="Busca de clubes..." />
            </View>
            <H2Title text="Categorias" marginVertical={10} />
          </View>
          <FlatList
            data={categorias}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ClubCategory imageSource={item.imageSource} title={item.title} />
            )}
            contentContainerStyle={styles.categoryContent} // Para ajustar espaço interno
          />
          <View style={styles.sideSpace}>
            <H2Title text="Clubes" marginVertical={10} />
            <FlatList
              data={clubes}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ClubSelectCard club={item} navigation={navigation} />
              )}
              columnWrapperStyle={styles.clubRow} // Para adicionar espaço entre as colunas
            />
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 0, // Mantém o espaçamento interno
    paddingTop: "15%",
  },
  sideSpace: {
    marginHorizontal: 20,
  },
  searchBar: {
    marginBottom: 10,
  },
  mainFlatList: {
    flex: 1, // O contêiner principal deve ocupar todo o espaço
    backgroundColor: "#15202B", // Cor de fundo
  },
  categoryContent: {
    paddingHorizontal: 0, // Espaço interno para a área de scroll horizontal
  },
  clubRow: {
    justifyContent: "space-between", // Espaçamento entre colunas
  },
});

export default ClubSearch;
