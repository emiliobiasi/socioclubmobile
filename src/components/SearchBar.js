import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Ícone da lupa

const SearchBar = ({ placeholder, onChangeText, value, colorScheme }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row", // Alinha o ícone e o campo de texto
      alignItems: "center", // Centraliza verticalmente
      backgroundColor: colorScheme ? colorScheme.palette_2 : "#253341", // Cor de fundo
      paddingVertical: 20, // Espaçamento vertical mais amplo para um visual "gordinho"
      paddingHorizontal: 15, // Espaçamento horizontal extra para uma barra mais larga
      borderRadius: 15, // Borda arredondada
    },
    input: {
      flex: 1, // Para ocupar o espaço restante
      marginLeft: 15, // Espaçamento entre o ícone e o campo de texto
      color: colorScheme ? colorScheme.titles_color : "#ffffff", // Cor do texto
    },
  });
  return (
    <View style={styles.container}>
      <AntDesign
        name="search1"
        size={24}
        color={colorScheme ? colorScheme.subtitles_color : "#AAB8C2"}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={
          colorScheme ? colorScheme.subtitles_color : "#AAB8C2"
        } // Cor do placeholder
        value={value} // Valor do campo
        onChangeText={onChangeText} // Função para mudança de texto
      />
    </View>
  );
};

export default SearchBar;
