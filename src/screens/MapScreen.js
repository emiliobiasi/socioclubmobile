import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tela Mapa</Text>

      {/* Uma lista de opções de navegação */}
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text style={styles.option}>Welcome Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate("ChooseSign")}
      >
        <Text style={styles.option}>Choose Sign</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.option}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.option}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => navigation.navigate("Loading")}
      >
        <Text style={styles.option}>Loading</Text>
      </TouchableOpacity>
      {/* Adicione mais opções conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15202B",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30, // Um pouco mais de espaçamento abaixo do cabeçalho
  },
  optionContainer: {
    marginVertical: 10, // Espaçamento entre as opções
    padding: 10, // Para uma área de clique maior
    borderRadius: 10, // Para suavizar as bordas
    borderColor: "#1D9BF0", // Cor da borda para destaque visual
    borderWidth: 1, // Borda fina para indicar interatividade
  },
  option: {
    fontSize: 18,
    color: "#1D9BF0",
  },
});

export default MapScreen;
