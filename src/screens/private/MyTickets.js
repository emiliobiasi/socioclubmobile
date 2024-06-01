import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import FollowService from "../../services/FollowService";
import { useUser } from "../../context/UserContext";
import { useFollowing } from "../../context/FollowingContext";
import TicketsService from "../../services/TicketsService";
import MyTicketCard from "../../components/MyTicketCard";

const MyTickets = ({ navigation }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo } = useUser();
  const { updateFollowingInfo } = useFollowing();

  useEffect(() => {
    async function getMyTickets() {
      try {
        const response = await TicketsService.listarValidTicketsByClientId(
          userInfo.id
        );
        console.log("valid tickets: ", response.data.message);
        setTickets(response.data.message);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar ticekts:", error);
        setLoading(false);
      }
    }

    getMyTickets();
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
            <Text style={styles.headerText}>Meus Ingressos</Text>
            <MaterialIcons name="account-circle" size={30} color="white" />
          </View>
          <View style={styles.sideSpace}>
            {loading ? (
              <ActivityIndicator
                animating={true}
                color="white"
                size="large"
                style={styles.loading}
              />
            ) : tickets.length === 0 ? (
              <Text style={styles.noTicketsText}>
                Você ainda não comprou nenhum ingresso. Realize a compra na
                seção "Ingressos" do menu e visualize-os aqui!
              </Text>
            ) : (
              tickets.map((item, index) => (
                <MyTicketCard key={index} ticket={item} />
              ))
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
    // marginHorizontal: 20,
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
  noTicketsText: {
    color: "white",
    textAlign: "center",
    marginTop: 200,
    fontSize: 18,
    paddingHorizontal: 20, // Adicionado para melhor apresentação do texto
  },
});

export default MyTickets;
