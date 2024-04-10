import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { API_URL, useAuth } from "../context/AuthContext";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuth();

  useEffect(() => {
    const testCall = async () => {
      const result = await axios.get(`${API_URL}/clients`);
      console.log("🚀 ~ file: Login.tsx:16 ~ testCall ~ result:", result);
    };
    testCall();
  }, []);

  const login = async () => {
    try {
      const result = await onLogin(email, password);
      if (result && !result.error) {
        navigation.navigate("Loading");
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
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackButtonPress}
        >
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
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
    //justifyContent: "center", // Centraliza os botões horizontalmente
    alignItems: "center",
    width: "100%",
  },
  backButton: {
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingVertical: 12,
    marginLeft: 10, // Distância entre os botões
    width: "25%",
    borderRadius: 10,
    height: 60,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    marginVertical: 20,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
  },
  logo: {
    width: 300, // Tamanho do logotipo
    height: 300, // Tamanho do logotipo
    resizeMode: "contain", // Assegura que o logotipo não seja cortado
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
    marginBottom: 10,
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
