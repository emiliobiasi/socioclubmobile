// SetupProfileScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const SignIn = ({ navigation }) => {
  // Adicione o estado e as funções necessárias para lidar com a entrada de dados e upload de imagem aqui
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
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#AAB8C2"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.concluirButton}>
        <Text style={styles.concluirButtonText}>Concluir</Text>
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
  concluirButton: {
    backgroundColor: "#1D9BF0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  concluirButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignIn;
