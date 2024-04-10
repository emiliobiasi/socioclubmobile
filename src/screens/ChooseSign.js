import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import CientsService from "../services/ClientsService";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ChooseSign = ({ navigation }) => {
  // useEffect(() => {
  //   CientsService.listarClients().then(
  //     (response) => {
  //       alert(response.data);
  //       console.log(response.data);
  //     },
  //     (error) => {
  //       console.log("erro: ", error);
  //     }
  //   );
  // }, []);

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };
  const handleNextButtonPress = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/socioclublogocircles.png")}
        style={styles.logo}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Entre no Jogo,</Text>
        <Text style={styles.title}>
          Faça Parte do
          {"             "}Seu Clube
        </Text>
        <Text style={styles.subtitle}>
          A porta de entrada para uma {"     "} experiência de sócio completa
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={handleSignUpPress}
        >
          <Text style={styles.signupButtonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextButtonPress}
        >
          <AntDesign
            name="right"
            size={24}
            color="white"
            onPress={handleNextButtonPress}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B", // Cor do fundo conforme a imagem
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between", // Isto empurrará seu buttonsContainer para baixo
    paddingBottom: 80, // Espaço extra para garantir que o textContainer não sobreponha o buttonsContainer
    padding: 20,
  },
  logo: {
    width: width, // 80% da largura da tela
    height: height * 0.5, // 30% da altura da tela
    resizeMode: "contain",
    alignSelf: "flex-start", // Alinha a logo à esquerda
    marginTop: 20, // Espaço no topo
    marginBottom: 20, // Espaço entre a logo e o textContainer
    marginLeft: width - width / 0.8,
    marginTop: width - width / 0.8,
  },
  textContainer: {
    alignItems: "left",
    marginBottom: 40, // Espaçamento até o botão de cadastro
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
  },
  subtitle: {
    color: "#AAB8C2",
    fontSize: 20,
    textAlign: "left",
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center", // Centraliza os botões horizontalmente
    alignItems: "center",
    width: "100%",
  },
  signupButton: {
    backgroundColor: "#1D9BF0",
    justifyContent: "center",
    borderRadius: 12,
    marginRight: 10, // Distância entre os botões
    width: "65%",
    height: 60,
    alignItems: "center",
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  nextButton: {
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingVertical: 12,
    marginLeft: 10, // Distância entre os botões
    width: "25%",
    borderRadius: 10,
    height: 60,
    alignItems: "center",
  },
});

export default ChooseSign;
