import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import H1Title from "../../components/Texts/H1Title";
import Subtitle from "../../components/Texts/Subtitle";
import SearchBar from "../../components/SearchBar";
import H2Title from "../../components/Texts/H2Title";
import ClubCategory from "../../components/ClubCategory";
import ClubSelectCard from "../../components/ClubSelectCard";
import ClubService from "../../services/ClubService"; // Ajuste o caminho conforme necessário

const ClubSearch = ({ navigation }) => {
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Chamando listarClubs");
        const response = await ClubService.listarClubs();
        console.log("Clubes recebidos:", response.data.clubs);
        setClubes(response.data.clubs);
      } catch (error) {
        console.error("Erro ao buscar clubes:", error);
      }
    }

    fetchData();
  }, []);
  // const clubes1 = [
  //   {
  //     id: "",
  //     club_id: "",
  //     name: "Vasco",
  //     icon: require("../../../assets/images/vascoicon.png"),
  //     background: require("../../../assets/images/vascobandeira.png"),
  //     description: "Descrição do Clube do Vasco",
  //     category: "",
  //     colorScheme: {
  //       titles_color: "#FFFFFF",
  //       subtitles_color: "#FFFFFF",
  //       buttons_color: "#000000",
  //       palette_1: "#FF0000",
  //       palette_2: "#FF0000",
  //       palette_3: "#FF0000",
  //     },
  //   },
  //   {
  //     id: "2",
  //     club_id: "",
  //     name: "São Paulo",
  //     icon: require("../../../assets/images/saopauloicon.png"),
  //     background: require("../../../assets/images/saopaulobandeira.jpeg"),
  //     description: "Descrição do Clube São Paulo",
  //     category: "",
  //     colorScheme: {
  //       titles_color: "#000000",
  //       subtitles_color: "#000000",
  //       buttons_color: "#FFFFFF",
  //       palette_1: "#ee4242",
  //       palette_2: "#fd7b7b",
  //       palette_3: "#ee0e0e",
  //     },
  //   },
  //   {
  //     id: "3",
  //     club_id: "",
  //     name: "Clube da Luta",
  //     icon: require("../../../assets/images/vascoicon.png"),
  //     background: require("../../../assets/images/vascobandeira.png"),
  //     description: "Descrição do Clube da Luta",
  //     category: "",
  //     colorScheme: {
  //       titles_color: "#FFFFFF",
  //       subtitles_color: "#AAB8C2",
  //       buttons_color: "#1D9BF0",
  //       palette_1: "#15202B",
  //       palette_2: "#253341",
  //       palette_3: "#0C111B",
  //     },
  //   },
  // ];

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
