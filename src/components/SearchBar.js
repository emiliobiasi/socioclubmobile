import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Para adicionar o ícone da lupa

const SearchBar = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="#AAB8C2" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#AAB8C2" // Cor do texto do placeholder
        value={value} // Valor do campo de busca
        onChangeText={onChangeText} // Função para mudança de texto
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Para alinhar o ícone e o campo de texto
    alignItems: "center", // Centraliza verticalmente
    backgroundColor: "#253341", // Cor de fundo
    padding: 10, // Espaçamento interno
    borderRadius: 10, // Borda arredondada
  },
  input: {
    flex: 1, // Para preencher o espaço restante
    marginLeft: 10, // Espaçamento entre o ícone e o campo de texto
    color: "#fff", // Cor do texto
  },
});

export default SearchBar;
