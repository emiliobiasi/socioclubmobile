import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
import { useUser } from "../../context/UserContext";
import BuyService from "../../services/BuyService";
import ProductBoughtCard from "../../components/ProductBoughtCard";
import PlanBoughtCard from "../../components/PlanBoughtCard";
import TicketBoughtCard from "../../components/TicketBoughtCard";
import Subtitle from "../../components/Texts/Subtitle";
import ClientsService from "../../services/ClientsService";

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
          response = await ClientsService.listarTodosPlanosAssociados(
            userInfo.id
          );
          setPurchaseHistory(response.data.message);
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
            <View style={styles.selectorView}>
              <TouchableOpacity
                style={[
                  styles.selectButton,
                  selected === "product" && styles.selectedButton,
                ]}
                onPress={() => {
                  setSelected("product");
                  getHistory("product");
                }}
              >
                <Text
                  style={[
                    styles.selectButtonText,
                    selected === "product" && styles.selectedButtonText,
                  ]}
                >
                  Produtos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selectButton,
                  selected === "ticket" && styles.selectedButton,
                ]}
                onPress={() => {
                  setSelected("ticket");
                  getHistory("ticket");
                }}
              >
                <Text
                  style={[
                    styles.selectButtonText,
                    selected === "ticket" && styles.selectedButtonText,
                  ]}
                >
                  Ingressos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selectButton,
                  selected === "plan" && styles.selectedButton,
                ]}
                onPress={() => {
                  setSelected("plan");
                  getHistory("plan");
                }}
              >
                <Text
                  style={[
                    styles.selectButtonText,
                    selected === "plan" && styles.selectedButtonText,
                  ]}
                >
                  Planos
                </Text>
              </TouchableOpacity>
            </View>
            <Subtitle
              text="Aqui está seu histórico de compras na SocioClub"
              marginVertical={20}
            />
            {loading ? (
              <ActivityIndicator
                animating={true}
                color="white"
                size="large"
                style={styles.loading}
              />
            ) : (
              purchaseHistory.map((item, index) => {
                if (selected === "product") {
                  return (
                    <ProductBoughtCard
                      key={`${item.id}-${index}`}
                      product={item}
                      navigation={navigation}
                    />
                  );
                } else if (selected === "ticket") {
                  return (
                    <TicketBoughtCard
                      key={`${item.id}-${index}`}
                      ticket={item}
                      navigation={navigation}
                    />
                  );
                } else if (selected === "plan") {
                  return (
                    <PlanBoughtCard
                      key={`${item.id}-${index}`}
                      plan={item}
                      navigation={navigation}
                    />
                  );
                }
              })
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
    // paddingTop: 10,
  },
  selectorView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectButton: {
    flex: 1,
    backgroundColor: "#253341",
    padding: 20,
    borderBottomWidth: 2,
    borderColor: "#AAB8C2",
  },
  selectButtonText: {
    color: "#AAB8C2",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  selectedButton: {
    borderColor: "#ffffff",
  },
  selectedButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  mainFlatList: {
    flex: 1,
    backgroundColor: "#15202B",
  },
  loading: {
    margin: 50,
  },
});

export default PurchaseHistory;
