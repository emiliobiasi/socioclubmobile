import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../../../context/UserContext";
import { useClub } from "../../../context/ClubContext";
import { useAuth } from "../../../context/AuthContext";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import MembershipCard from "../../../components/membershipCard";
import ClientsService from "../../../services/ClientsService";
import Subtitle from "../../../components/Texts/Subtitle";

export default function Profile() {
  const { onLogout } = useAuth();
  const navigation = useNavigation();
  const { userInfo } = useUser();
  const { clubInfo } = useClub();
  const { shoppingCartInfo, removeAllProducts } = useShoppingCart();
  const [associatedPlans, setAssociatedPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAssociatedPlans() {
      try {
        const response = await ClientsService.listarPlanosAssociadosAtualmente(
          userInfo.id
        );
        setAssociatedPlans(response.data.message);
      } catch (error) {
        console.error("Erro ao buscar planos associados:", error);
      } finally {
        setLoading(false); // Dados foram carregados
      }
    }

    getAssociatedPlans();
  }, []);

  // console.log("associatedPlans: ", associatedPlans);

  const handleClubSearchButton = () => {
    if (shoppingCartInfo.length !== 0) {
      Alert.alert(
        "Atenção",
        "Ao alterar o clube, seus itens no carrinho serão esvaziados. Tem certeza que deseja continuar?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Continuar",
            onPress: () => {
              removeAllProducts();
              navigation.navigate("ClubSearch");
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      navigation.navigate("ClubSearch");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Perfil</Text>
        <MaterialIcons name="account-circle" size={30} color="white" />
      </View>

      <View style={styles.profileInfo}>
        <Text style={styles.name}>{userInfo.name}</Text>
        <Text style={styles.email}>E-mail: {userInfo.email}</Text>
        <Text style={styles.hidden}>Senha: ******</Text>
        <Text style={styles.hidden}>CPF: {userInfo.cpf}</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("ProfileEdit")}
        >
          <Text style={styles.editText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
      {!loading && associatedPlans.length > 0 && (
        <Subtitle text={"Arraste para o lado para ver seus planos >>>"} />
      )}
      <ScrollView style={styles.scrollView}>
        <ScrollView
          style={styles.sideScrollView}
          contentContainerStyle={styles.contentContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {associatedPlans.map((item, index) => (
            <View key={index} style={styles.cardContainer}>
              <MembershipCard plan={item} />
            </View>
          ))}
        </ScrollView>

        <View style={styles.tab}>
          <TouchableOpacity>
            <Text style={styles.tabTextActive}>Opções</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionsSection}>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => navigation.navigate("MyTickets")}
          >
            <Text style={styles.optionText}>Meus Ingressos</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => navigation.navigate("PurchaseHistory")}
          >
            <Text style={styles.optionText}>Histórico de Compras</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={handleClubSearchButton}
          >
            <Text style={styles.optionText}>Buscar Clube</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => navigation.navigate("MyClubs")}
          >
            <Text style={styles.optionText}>Meus Clubes</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.logout} onPress={onLogout}>
            <Text style={styles.optionText}>Sair</Text>
            <MaterialIcons name="logout" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C111B",
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
  profileInfo: {
    paddingHorizontal: "10%",
    paddingVertical: "5%",
    backgroundColor: "#253341",
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 28,
    color: "white",
    marginBottom: 20,
  },
  email: {
    color: "#AAB8C2",
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  hidden: {
    color: "#AAB8C2",
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#253341",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  editText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  sideScrollView: {
    paddingVertical: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  scrollView: {
    width: "100%",
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#0C111B",
  },
  tabText: {
    color: "#AAB8C2",
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
  },
  optionsSection: {
    paddingVertical: 15,
  },
  optionsTitle: {
    fontWeight: "bold",
    color: "white",
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#253341",
    padding: 12,
    borderRadius: 8,
    marginBottom: 14,
    marginHorizontal: "5%",
    height: 60,
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
  logout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#83110c",
    padding: 12,
    borderRadius: 8,
    marginBottom: 14,
    marginHorizontal: "5%",
    height: 60,
  },
  cardContainer: {
    marginRight: 20, // Espaçamento entre os cards
  },
});
