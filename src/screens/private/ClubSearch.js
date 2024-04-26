import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import H1Title from "../../components/Texts/H1Title";
import Subtitle from "../../components/Texts/Subtitle";
import SearchBar from "../../components/SearchBar";
import H2Title from "../../components/Texts/H2Title";
import ClubCategory from "../../components/ClubCategory";
import ClubSelectCard from "../../components/ClubSelectCard";

const ClubSearch = () => {
  return (
    <ScrollView style={styles.container}>
      <H1Title text="Escolha seu Clube" />
      <Subtitle text="Busque seus clubes, conheça novos grupos e acesse a área de sócio" />
      <SearchBar placeholder="Busca de clubes..." />
      <H2Title text="Categorias" />

      {/* Scroll horizontal para a seção de categorias */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Opcional para esconder o indicador de scroll
        style={styles.categoryScroll}
      >
        <ClubCategory imageSource="" title="Art" />
        <ClubCategory imageSource="" title="Collectibles" />
        <ClubCategory imageSource="" title="Domains" />
      </ScrollView>

      <H2Title text="Clubes" />
      <View style={styles.clubSection}>
        <ClubSelectCard
          backgroundImageSource=""
          iconImageSource=""
          title="DourDarcels"
        />
        <ClubSelectCard
          backgroundImageSource=""
          iconImageSource=""
          title="CyberBrokers"
        />
        <ClubSelectCard
          backgroundImageSource=""
          iconImageSource=""
          title="BoredApeYachtClub"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15202B",
    padding: 20,
  },
  categoryScroll: {
    marginVertical: 10, // Espaço entre seções
  },
  clubSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});

export default ClubSearch;
