import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../../../../components/SearchBar";
import ProductsService from "../../../../services/ProductsService";
import { ActivityIndicator } from "react-native-paper";
import ProductCard from "./ProductCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useClub } from "../../../../context/ClubContext";
import { FontAwesome5 } from "@expo/vector-icons";

const products = [
  {
    id: "1",
    product_id: "33",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    name: "Caneca Personalizada do São Paulo",
    description: "Descrição do produto Caneca Personalizada do São Paulo...",
    price: "135.90",
    category: "Item",
  },
  {
    id: "2",
    product_id: "34",
    image: "https://storage.googleapis.com/socioclub/news/sao-paulo/1.jpg",
    name: "Caneca São Paulo",
    description:
      "https://storage.googleapis.com/socioclub/club/sao-paulo/logo.png",
    price: "35.90",
    category: "Item",
  },
  {
    id: "3",
    product_id: "35",
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
  const [products, setProducts] = useState([]);
  const { clubInfo } = useClub();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ProductsService.listarProductsByClubId(
          clubInfo.id
        );
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar clubes:", error);
      }
    }
    fetchData();
  }, []);

  const handleShoppingCartButtonPress = () => {
    navigation.navigate("ShoppingCart", { colorScheme });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: colorScheme.palette_1,
    },
    shoppingCartButton: {},
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
    selectorSection: {
      flexDirection: "row",
    },
    addToCartButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: colorScheme.palette_2,
      margin: 10,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    addToCartButtonText: {
      marginRight: 5,
      fontSize: 20,
      fontWeight: "bold",
      color: colorScheme.titles_color,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Produtos</Text>
      </View>
      <View style={styles.searchBarView}>
        <SearchBar
          placeholder="Busca de produtos..."
          colorScheme={colorScheme}
        />
      </View>
      <View style={styles.selectorSection}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleShoppingCartButtonPress}
        >
          <Text style={styles.addToCartButtonText}>Ver Carrinho</Text>
          <FontAwesome5
            name="shopping-cart"
            size={24}
            color={colorScheme.titles_color}
          />
        </TouchableOpacity>
        <View style={styles.categories}>
          <Text>Categories</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {loading ? (
          <ActivityIndicator
            animating={true}
            color={colorScheme.titles_color}
            size="large"
            style={styles.loading}
          />
        ) : (
          products.map((item) => (
            <ProductCard
              key={item.product_id}
              product={item}
              colorScheme={colorScheme}
              navigation={navigation}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Products;
