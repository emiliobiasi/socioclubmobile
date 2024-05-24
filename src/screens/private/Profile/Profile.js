import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../../../context/UserContext";
import { useClub } from "../../../context/ClubContext";
import { useAuth } from "../../../context/AuthContext";
import * as SecureStore from "expo-secure-store";
import { ScrollView } from "react-native-gesture-handler";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import MembershipCard from "../../../components/membershipCard";

export default function Profile() {
  const { onLogout } = useAuth();
  const navigation = useNavigation();
  const { userInfo, updateUserInfo } = useUser();
  const { clubInfo } = useClub();
  const {
    shoppingCartInfo,
    updateShoppingCartInfo,
    replaceProduct,
    removeProduct,
    removeAllProducts,
  } = useShoppingCart();
  // console.log("userInfo no PROFILE: ", userInfo);
  // console.log("clubInfo no PROFILE: ", clubInfo);

  const handleClubSearchButton = () => {
    if (shoppingCartInfo.length !== 0) {
      // Se o carrinho não estiver vazio, exiba um alerta
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
              // Navegue para a tela de busca do clube
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
        <Text style={styles.email}>{userInfo.email}</Text>
        <Text style={styles.hidden}>Senha: ******</Text>
        <Text style={styles.hidden}>CPF: {userInfo.cpf}</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("ProfileEdit")}
        >
          <Text style={styles.editText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <MembershipCard />

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
            <Text style={styles.optionText}>Alterar Clube</Text>
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
  },
  name: {
    fontWeight: "bold",
    fontSize: 28,
    color: "white",
  },
  email: {
    color: "#AAB8C2",
    fontSize: 16,
  },
  hidden: {
    color: "#AAB8C2",
    fontSize: 16,
  },
  editButton: {
    backgroundColor: "#253341",
    padding: 10,
    borderRadius: 8,
    marginTop: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  editText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
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
});
