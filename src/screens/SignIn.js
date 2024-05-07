import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuth();

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

  const handleBackButtonPress = () => {
    navigation.navigate("ChooseSign");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBar}>
        <AntDesign
          name="left"
          size={36}
          color="white"
          onPress={handleBackButtonPress}
        />
        <Text style={styles.header}>Login</Text>
      </View>

      <Image
        source={require("../../assets/images/socioclublogoandtext1.png")}
        style={styles.logo}
      />

      {/* Campos de entrada de texto */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#AAB8C2"
          style={styles.input}
          value={email}
          onChangeText={setEmail} // Atualiza o estado email com o texto inserido
          keyboardType="email-address" // Define o teclado para entrada de e-mail
          autoCapitalize="none" // Desativa a capitalização automática
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#AAB8C2"
          style={styles.input}
          value={password}
          onChangeText={setPassword} // Atualiza o estado password com o texto inserido
          secureTextEntry // Esconde o texto da senha
          autoCapitalize="none" // Desativa a capitalização automática
        />
      </View>

      <TouchableOpacity style={styles.entrarButton} onPress={login}>
        <Text style={styles.entrarButtonText}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B",
    padding: 20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between", // Isso empurrará o header para o meio e o botão para a esquerda
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10, // Adicione um pouco de padding horizontal para garantir que nada fique grudado nas bordas
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
  label: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
  },
  logo: {
    width: width * 0.8,
    height: height * 0.3,
    resizeMode: "contain", // Assegura que o logotipo não seja cortado
    alignSelf: "center",
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
  },
  entrarButton: {
    backgroundColor: "#1D9BF0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  entrarButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignIn;
