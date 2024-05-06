import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../../../components/SearchBar";

const tickets = [
  {
    id: "1",
    news_id: "",
    title: "Notícia do Vasco",
    image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    author: "Thiago Lima",
    date: "04/05/24",
    text: "Conteúdo da Notícia do vasco da gama flinstons... Loren I",
  },
  {
    id: "2",
    news_id: "",
    title: "Notícia do São Paulo",
    image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    author: "Emílio Biasi",
    date: "04/05/24",
    text: "Conteúdo da Notícia do vasco da gama flinstons... Loren I",
  },
  {
    id: "3",
    news_id: "",
    title: "Notícia do Vasco",
    image: "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    author: "Thiago Lima",
    date: "04/05/24",
    text: "Conteúdo da Notícia do vasco da gama flinstons... Loren I",
  },
];

const Tickets = ({ colorScheme, navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: colorScheme.palette_1,
    },
    scrollView: {
      width: "100%",
    },
    titleView: {
      padding: "4%",
      backgroundColor: colorScheme.palette_2,
    },
    title: {
      fontSize: 36,
      fontWeight: "bold",
      color: colorScheme.titles_color,
    },
    searchBarView: {
      margin: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Ingressos</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchBarView}>
          <SearchBar placeholder="Busca de ingressos..." />
        </View>
        {tickets.map((item) => (
          <Text>tickets {item.id}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Tickets;
