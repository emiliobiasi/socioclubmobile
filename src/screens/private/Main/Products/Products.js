import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../../../../components/SearchBar";
import ProductsService from "../../../../services/ProductsService";
import { ActivityIndicator } from "react-native-paper";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    product_id: "33",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    name: "Caneca Personalizada do São Paulo",
    description: "Descrição do produto Caneca Personalizada do São Paulo...",
    price: "35.90",
    category: "Item",
  },
  {
    id: "2",
    product_id: "33",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    name: "Caneca São Paulo",
    description:
      "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    price: "35.90",
    category: "Item",
  },
  {
    id: "3",
    product_id: "33",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    name: "Caneca São Paulo",
    description:
      "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    price: "35.90",
    category: "Item",
  },
];

const Products = ({ colorScheme, navigation }) => {
  const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await ProductsService.listarProductsByClubId(
  //         clubInfo.id
  //       );
  //       setNews(response.data.products);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Erro ao buscar clubes:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

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
        <Text style={styles.title}>Produtos</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchBarView}>
          <SearchBar
            placeholder="Busca de produtos..."
            colorScheme={colorScheme}
          />
        </View>
        {/* {loading ? (
          <ActivityIndicator
            animating={true}
            color={colorScheme.titles_color}
            size="large"
            style={styles.loading}
          />
        ) : ( */}
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            colorScheme={colorScheme}
            navigation={navigation}
          />
        ))}
        {/* // )} */}
      </ScrollView>
    </View>
  );
};

export default Products;
