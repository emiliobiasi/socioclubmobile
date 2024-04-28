import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProfileEdit from "./ProfileEdit";

export default function Profile() {
  const navigation = useNavigation();

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
        <Text style={styles.name}>Kevin Silva Dev</Text>
        <Text style={styles.email}>kevin@hotmail.com</Text>
        <Text style={styles.hidden}>Senha: ******</Text>
        <Text style={styles.hidden}>CPF: ***.***.***-**</Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("ProfileEdit")}
        >
          <Text style={styles.editText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.membershipInfo}>
        <Text style={styles.membershipTitle}>Seu plano neste clube</Text>
        <Text style={styles.membershipName}>Diamante</Text>
        <Text style={styles.price}>R$153,16</Text>
        <Text style={styles.dateRange}>De 21/03/24 até 21/03/24</Text>
      </View>

      <View style={styles.tab}>
        <TouchableOpacity>
          <Text style={styles.tabTextActive}>Opções</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsSection}>
        <Text style={styles.optionsTitle}>Opções</Text>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Meus Ingressos</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Histórico de Compras</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Alterar Clube</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Histórico de Clubes</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#0C111B",
    paddingTop: "15%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  profileInfo: {
    paddingHorizontal: "10%",
    paddingVertical: "5%",
    backgroundColor: "#253341",
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
  },
  email: {
    color: "#AAB8C2",
  },
  hidden: {
    color: "#AAB8C2",
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
  membershipInfo: {
    padding: 16,
    borderRadius: 10,
    marginHorizontal: "5%",
    backgroundColor: "#253341",
    marginVertical: "3%",
  },
  membershipTitle: {
    color: "#AAB8C2",
  },
  membershipName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  price: {
    color: "white",
  },
  dateRange: {
    color: "#AAB8C2",
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: "#0C111B",
  },
  tabText: {
    color: "#AAB8C2",
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  optionsSection: {
    padding: 16,
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
    marginVertical: 8,
    marginHorizontal: "2%",
  },
  optionText: {
    color: "white",
    fontSize: 16,
  },
});
