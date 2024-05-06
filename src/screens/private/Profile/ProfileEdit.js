import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import H1Title from "../../../components/Texts/H1Title";
import Subtitle from "../../../components/Texts/Subtitle";
import { useUser } from "../../../context/UserContext";

export default function ProfileEdit() {
  const navigation = useNavigation();
  const { userInfo } = useUser();
  const [username, setUsername] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [cpf, setCpf] = useState(userInfo.cpf);

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

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <H1Title text="Editar Perfil" marginVertical={10} />
      <Subtitle text="Edite os dados que achar necessário e clique em Salvar, para que seus dados sejam atualizados." />

      <View style={styles.content}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />

        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} value={cpf} onChangeText={setCpf} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#15202B",
    paddingTop: "15%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  saveButton: {
    backgroundColor: "#1D9BF0",
    color: "white",
    paddingHorizontal: "10%",
    paddingVertical: 12,
    borderRadius: 10,
    textAlign: "center",
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  content: {
    padding: 16,
  },
  label: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#253341",
    padding: 20,
    borderRadius: 8,
    marginVertical: 8,
    color: "white",
  },
});
