import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../../../../components/SearchBar";
import ProductsService from "../../../../services/ProductsService";
import { ActivityIndicator } from "react-native-paper";
import ProductCard from "./ProductCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useClub } from "../../../../context/ClubContext";
import { FontAwesome5 } from "@expo/vector-icons";
import FollowButton from "../../../../components/FollowButton";
import { Entypo } from "@expo/vector-icons";

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
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchData();
  }, [clubInfo]);

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
      flexDirection: "row",
      backgroundColor: colorScheme.palette_2,
      justifyContent: "space-between",
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
      justifyContent: "space-between",
    },
    categoryText: {
      fontWeight: "bold",
      color: colorScheme.titles_color,
    },
    addToCartButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: colorScheme.palette_2,
      marginTop: 0,
      margin: 10,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    addToCartButtonText: {
      marginRight: 5,
      fontSize: 16,
      fontWeight: "bold",
      color: colorScheme.titles_color,
    },
    categoriesButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: colorScheme.palette_2,
      marginTop: 0,
      margin: 10,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    loading: {
      margin: 100,
    },
    emptyMessage: {
      color: colorScheme.titles_color,
      fontSize: 18,
      textAlign: "center",
      marginTop: 200,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Produtos</Text>
        <FollowButton initialState={false} colorScheme={colorScheme} />
      </View>
      <View style={styles.searchBarView}>
        <SearchBar
          placeholder="Busca de produtos..."
          colorScheme={colorScheme}
        />
      </View>
      <View style={styles.selectorSection}>
        <View style={styles.categoriesButton}>
          <Text style={styles.categoryText}>Categories</Text>
          <Entypo
            name="chevron-down"
            size={24}
            color={colorScheme.titles_color}
          />
        </View>
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
      </View>
      <ScrollView style={styles.scrollView}>
        {loading ? (
          <ActivityIndicator
            animating={true}
            color={colorScheme.titles_color}
            size="large"
            style={styles.loading}
          />
        ) : products.length === 0 ? (
          <Text style={styles.emptyMessage}>
            O clube não possui produtos até o momento.
          </Text>
        ) : (
          products.map((item) => (
            <ProductCard
              key={item.id}
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
