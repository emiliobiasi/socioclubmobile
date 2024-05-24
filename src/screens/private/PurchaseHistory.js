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
import BuyService from "../../services/BuyService";
import ProductBoughtCard from "../../components/ProductBoughtCard";

// {
//     "category_id": 1,
//     "club_id": 1,
//     "description": "Camisa Oficial de jogo do São Paulo",
//     "id": 1,
//     "image": "https://storage.googleapis.com/socioclub/product/sao-paulo/camisa-2024.jpeg",
//     "name": "Camisa Oficial - Jogo",
//     "price": 300
// }

const PurchaseHistory = ({ navigation }) => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userInfo } = useUser();
  const [selected, setSelected] = useState("product");

  useEffect(() => {
    getHistory("product");
  }, []);

  const getHistory = async (type) => {
    setLoading(true);
    try {
      let response;
      switch (type) {
        case "product":
          response = await BuyService.listarBuyByClientId(userInfo.id);
          setPurchaseHistory(response.data.products);
          break;
        case "ticket":
          response = await BuyService.listarTicketsByClientId(userInfo.id);
          setPurchaseHistory(response.data.tickets);
          break;
        case "plan":
          response = await BuyService.listarPlansByClientId(userInfo.id);
          setPurchaseHistory(response.data.plans);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Erro ao buscar Histórico de ${type}:`, error);
    } finally {
      setLoading(false);
    }
  };

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
            <Text style={styles.headerText}>Suas Compras</Text>
            <MaterialIcons name="account-circle" size={30} color="white" />
          </View>
          <View style={styles.sideSpace}>
            <Subtitle
              text="Aqui está o seu histórico de compras na SocioClub"
              marginVertical={20}
            />
            <View style={styles.selectorView}>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() => {
                  setSelected("product");
                  getHistory("product");
                }}
              >
                <Text style={styles.selectButtonText}>Produtos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() => {
                  setSelected("ticket");
                  getHistory("ticket");
                }}
              >
                <Text style={styles.selectButtonText}>Ingressos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() => {
                  setSelected("plan");
                  getHistory("plan");
                }}
              >
                <Text style={styles.selectButtonText}>Planos</Text>
              </TouchableOpacity>
            </View>
            {loading ? (
              <ActivityIndicator
                animating={true}
                color="white"
                size="large"
                style={styles.loading}
              />
            ) : (
              purchaseHistory.map((item, index) => (
                <ProductBoughtCard
                  key={`${item.id}-${index}`}
                  product={item}
                  navigation={navigation}
                />
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
    marginHorizontal: 20,
    paddingTop: 10,
  },
  selectorView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "3%",
    paddingBottom: 30,
  },
  selectButton: {
    backgroundColor: "#253341",
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  selectButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  mainFlatList: {
    flex: 1,
    backgroundColor: "#15202B",
  },
  categoryContent: {
    paddingHorizontal: 0,
  },
  clubRow: {
    justifyContent: "space-between",
  },
  loading: {
    margin: 50,
  },
});

export default PurchaseHistory;
