import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import H1Title from "../../components/Texts/H1Title";
import Subtitle from "../../components/Texts/Subtitle";
import SearchBar from "../../components/SearchBar";
import H2Title from "../../components/Texts/H2Title";
import ClubCategory from "../../components/ClubCategory";
import ClubSelectCard from "../../components/ClubSelectCard";
import ClubService from "../../services/ClubService";
import { ActivityIndicator } from "react-native-paper";
import FollowService from "../../services/FollowService";
import { useUser } from "../../context/UserContext";
import { useFollowing } from "../../context/FollowingContext";
import ClubCategoryService from "../../services/ClubCategoryService";

const ClubSearch = ({ navigation }) => {
  const [clubes, setClubes] = useState([]);
  // const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, updateUserInfo } = useUser();
  const { followingInfo, updateFollowingInfo } = useFollowing();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ClubService.listarClubs();
        const res = await ClubCategoryService.listarClubsCategories();
        setClubes(response.data.clubs);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar clubes:", error);
      }
    }

    async function getFollows() {
      try {
        const response = await FollowService.listarFollowsByClientId(
          userInfo.id
        );
        updateFollowingInfo(response.data.clubs);
      } catch (error) {
        console.error("Erro ao buscar follows:", error);
      }
    }

    fetchData();
    getFollows();
  }, []);

  const categories = [
    {
      id: "1",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Futebol",
    },
    {
      id: "2",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Livros",
    },
    {
      id: "3",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Academia",
    },
    {
      id: "4",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Educação",
    },
    {
      id: "5",
      imageSource: require("../../../assets/images/socioclublogodark.png"),
      title: "Música",
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
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ClubCategory title={item.title} />}
            contentContainerStyle={styles.categoryContent} // Para ajustar espaço interno
          />
          <View style={styles.sideSpace}>
            <H2Title text="Clubes" marginVertical={10} />
            {loading ? (
              <ActivityIndicator
                animating={true}
                color="white"
                size="large"
                style={styles.loading}
              />
            ) : (
              <FlatList
                data={clubes}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ClubSelectCard club={item} navigation={navigation} />
                )}
                columnWrapperStyle={styles.clubRow} // Para adicionar espaço entre as colunas
              />
            )}
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
    paddingLeft: 10,
  },
  clubRow: {
    justifyContent: "space-between", // Espaçamento entre colunas
  },
  loading: {
    margin: 50,
  },
});

export default ClubSearch;
