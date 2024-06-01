import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import ClientsService from "../services/ClientsService";
import { AntDesign } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister, onLogin } = useAuth();

  const login = async () => {
    try {
      const result = await onLogin(email, password);
      if (result && !result.error) {
        navigation.navigate("ClubSearch");
      } else {
        alert(result.msg);
      }
    } catch (e) {
      alert("Falha ao realizar login. Por favor, tente novamente.");
    }
  };

  const register = async () => {
    if (!cpf || !name || !email || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }
    try {
      const result = await onRegister(cpf, name, email, password);
      if (result && result.error) {
        console.log("result: ", result);
        alert(result.msg);
      } else {
        console.log("result deu BOM: ", result);
        alert("Registro concluído com sucesso! Por favor, faça o login.");
        login();
      }
    } catch (e) {
      console.log("erro: ", e);
      alert("Ocorreu um erro durante o registro. Tente novamente.");
    }
  };

  const handleBackButtonPress = () => {
    navigation.navigate("ChooseSign");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#15202B" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.topBar}>
          <AntDesign
            name="left"
            size={36}
            color="white"
            onPress={handleBackButtonPress}
          />
          <Text style={styles.header}>Perfil</Text>
        </View>
        <Image
          source={require("../../assets/images/socioclublogo.png")}
          style={styles.profileImage}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="CPF"
            placeholderTextColor="#AAB8C2"
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
          />
          <TextInput
            placeholder="Nome"
            placeholderTextColor="#AAB8C2"
            style={styles.input}
            value={name}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#AAB8C2"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#AAB8C2"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirmar senha"
            placeholderTextColor="#AAB8C2"
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.concluirButton} onPress={register}>
          <Text style={styles.concluirButtonText}>Concluir</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#15202B",
    padding: 20,
    justifyContent: "center",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    height: "25%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    marginVertical: 20,
    marginRight: "40%",
  },
  profileImage: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  inputContainer: {
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#253341",
    borderRadius: 10,
    color: "#fff",
    fontSize: 16,
    padding: 15,
    marginBottom: 30,
    height: 60,
  },
  concluirButton: {
    backgroundColor: "#1D9BF0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    height: 60,
  },
  concluirButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUp;
