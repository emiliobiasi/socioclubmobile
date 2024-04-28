import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Ícone da lupa

const SearchBar = ({ placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="#AAB8C2" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#AAB8C2" // Cor do placeholder
        value={value} // Valor do campo
        onChangeText={onChangeText} // Função para mudança de texto
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Alinha o ícone e o campo de texto
    alignItems: "center", // Centraliza verticalmente
    backgroundColor: "#253341", // Cor de fundo
    paddingVertical: 20, // Espaçamento vertical mais amplo para um visual "gordinho"
    paddingHorizontal: 15, // Espaçamento horizontal extra para uma barra mais larga
    borderRadius: 15, // Borda arredondada
  },
  input: {
    flex: 1, // Para ocupar o espaço restante
    marginLeft: 15, // Espaçamento entre o ícone e o campo de texto
    color: "#fff", // Cor do texto
  },
});

export default SearchBar;
