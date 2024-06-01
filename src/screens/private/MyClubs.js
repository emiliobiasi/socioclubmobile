import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import H1Title from "../../components/Texts/H1Title";
import Subtitle from "../../components/Texts/Subtitle";
import SearchBar from "../../components/SearchBar";
import H2Title from "../../components/Texts/H2Title";
import ClubCategory from "../../components/ClubCategory";
import ClubSelectCard from "../../components/ClubSelectCard";
import ClubService from "../../services/ClubService";
import { ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FollowService from "../../services/FollowService";
import { useUser } from "../../context/UserContext";
import { useFollowing } from "../../context/FollowingContext";

const MyClubs = ({ navigation }) => {
  const [clubes, setClubes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo, updateUserInfo } = useUser();
  const { followingInfo, updateFollowingInfo } = useFollowing();

  useEffect(() => {
    async function getFollows() {
      try {
        const response = await FollowService.listarFollowsByClientId(
          userInfo.id
        );
        updateFollowingInfo(response.data.clubs);
        setClubes(response.data.clubs);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar follows:", error);
        setLoading(false);
      }
    }

    getFollows();
  }, []);

  return (
    <FlatList
      data={[{}]} // Elemento único para renderizar a estrutura da tela
      keyExtractor={() => "main-content"}
      contentContainerStyle={styles.contentContainer} // Mantém o estilo do contêiner
      style={styles.mainFlatList} // Define o estilo para ocupar toda a tela
      renderItem={() => (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back-circle-outline"
                size={30}
                color="white"
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Meus Clubes</Text>
            <MaterialIcons name="account-circle" size={30} color="white" />
          </View>
          <View style={styles.sideSpace}>
            <Subtitle
              text="Aqui estão os clubes que você está seguindo"
              marginVertical={20}
            />
            {loading ? (
              <ActivityIndicator
                animating={true}
                color="white"
                size="large"
                style={styles.loading}
              />
            ) : clubes.length === 0 ? (
              <Text style={styles.noClubsText}>
                Você ainda não segue nenhum clube
              </Text>
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#253341",
    paddingTop: "15%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 28,
    color: "white",
  },
  sideSpace: {
    marginHorizontal: 20,
    paddingTop: 10,
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
  loading: {
    margin: 50,
  },
  noClubsText: {
    color: "white",
    textAlign: "center",
    marginTop: 200,
    fontSize: 18,
  },
});

export default MyClubs;
