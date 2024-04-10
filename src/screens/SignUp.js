import React, { useState } from "react";
import { API_URL, useAuth } from "../context/AuthContext";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ClientsService from "../services/ClientsService";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister } = useAuth();

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

  // Automatically call the login after a successful registration
  const register = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      //const result = await onRegister(name, email, password);
      
      const result = await ClientsService.registrarClient(name, password, email);

      if (result && result.error) {
        // Se a API retornar uma mensagem de erro específica, ela será exibida aqui.
        
        console.log(result)
        console.log(result.error)

        alert(result.msg);
      } else {
        // Se o registro for bem-sucedido, você pode direcionar o usuário para a tela de login ou qualquer outra tela.
        alert("Registro concluído com sucesso! Por favor, faça o login.");
        navigation.navigate("SignIn"); // Ajuste para a sua tela de login ou tela inicial pós-registro
      }
    } catch (e) {
      
      console.log("erro: ", e)

      alert("Ocorreu um erro durante o registro. Tente novamente.");
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
          placeholder="Nome"
          placeholderTextColor="#AAB8C2"
          style={styles.input}
          value={name}
          onChangeText={setUsername} // Atualiza o estado username com o texto inserido
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#AAB8C2"
          style={styles.input}
          value={email}
          onChangeText={setEmail} // Atualiza o estado email com o texto inserido
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#AAB8C2"
          style={styles.input}
          value={password}
          onChangeText={setPassword} // Atualiza o estado password com o texto inserido
          secureTextEntry // Esconde o texto da senha
        />
        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor="#AAB8C2"
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword} // Atualiza o estado confirmPassword com o texto inserido
          secureTextEntry // Esconde o texto da senha
        />
      </View>

      <TouchableOpacity style={styles.concluirButton} onPress={register}>
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
