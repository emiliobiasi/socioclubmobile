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
import ClientsService from "../../../services/ClientsService";
import * as SecureStore from "expo-secure-store";

const USER = "my-user";

export default function ProfileEdit() {
  const navigation = useNavigation();
  const { userInfo, updateUserInfo} = useUser();
  const [username, setUsername] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  //const [cpf, setCpf] = useState(userInfo.cpf);

  const updateUser = async () => {
    const result = await ClientsService.updateClient(email, username, userInfo.cpf)
    console.log("result: ", result)

    const userUpdated = await ClientsService.listarClients(userInfo.cpf)
    console.log("userUpdated: ", userUpdated.data.client)
    await SecureStore.setItemAsync(
      USER,
      JSON.stringify(userUpdated.data.client)
    );

    console.log("userUpdated.data.client ANTES DE DAR UPDATE: ", userUpdated.data.client)
    updateUserInfo(userUpdated.data.client)
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

        <TouchableOpacity style={styles.saveButton} onPress={updateUser}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <H1Title text="Editar Perfil" marginVertical={10} />
      <Subtitle text="Edite os apenas os campos que achar necessário e clique em Salvar, para que seus dados sejam atualizados." />

      <View style={styles.content}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          placeholder="Username..."
          placeholderTextColor="#AAB8C2"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} onChangeText={setEmail} placeholder="Email..."
          placeholderTextColor="#AAB8C2"/>

        {/* <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} value={cpf} onChangeText={setCpf} /> */}
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
