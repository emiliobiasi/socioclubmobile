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

const SignUp = ({ navigation }) => {
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
        <Text style={styles.header}>Perfil</Text>
      </View>

      <Text style={styles.label}>Adicione uma Imagem</Text>
      <Image
        source={require("../../assets/images/socioclublogo.png")}
        style={styles.profileImage}
      />
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Profile</Text>
      </TouchableOpacity>

      {/* Campos de entrada de texto */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#AAB8C2"
          style={styles.input}
          // Adicione mais props para lidar com a entrada de texto
        />
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
        <TextInput
          placeholder="Confirmar senha"
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
  profileImage: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  uploadButton: {
    alignSelf: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingVertical: 12,
    marginLeft: 10, // Distância entre os botões
    borderRadius: 10,
    height: 60,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
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

export default SignUp;
