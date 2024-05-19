import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import ProductCard from "./ProductCard";
import ShoppingCartCard from "./ShoppingCartCard";

const ShoppingCart = ({ route }) => {
  const { shoppingCartInfo, updateShoppingCartInfo } = useShoppingCart();
  const navigation = useNavigation();
  const { colorScheme } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      backgroundColor: colorScheme.palette_1,
    },
    topBar: {
      paddingHorizontal: "3%",
      paddingBottom: "4%",
      paddingTop: "15%",
      backgroundColor: colorScheme.palette_1,
      flexDirection: "row",
      justifyContent: "space-between", // Distribui o espaço entre os itens
      alignItems: "center",
    },
    pageName: {
      fontWeight: "bold",
      fontSize: 34,
      color: colorScheme.titles_color,
    },
    addToCartButton: {
      backgroundColor: colorScheme.buttons_color,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 40,
      marginHorizontal: 20,
    },
    addToCartButtonText: {
      color: colorScheme.titles_color,
      fontSize: 18,
      fontWeight: "bold",
    },
    emptyCartTextContainer: {
      fontSize: 34,
      color: colorScheme.titles_color,
      alignSelf: "center",
      alignItems: "center",
      marginTop: "70%",
    },
    emptyCartText: {
      fontSize: 34,
      color: colorScheme.titles_color,
      textAlign: "center",
      fontWeight: "bold",
      paddingBottom: 5,
    },
  });
  let uniqueKey = 0;
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={36}
            color={colorScheme.titles_color}
          />
        </TouchableOpacity>
        <Text style={styles.pageName}>Carrinho</Text>
        <FontAwesome5
          name="shopping-cart"
          size={24}
          color={colorScheme.titles_color}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {shoppingCartInfo.length == 0 ? (
          <View style={styles.emptyCartTextContainer}>
            <Text style={styles.emptyCartText}>Carrinho</Text>
            <Text style={styles.emptyCartText}>vazio...</Text>
            <Ionicons
              name="cart-outline"
              size={48}
              color={colorScheme.titles_color}
            />
          </View>
        ) : (
          shoppingCartInfo.map((item) => (
            <ShoppingCartCard
              key={uniqueKey++}
              product={item}
              colorScheme={colorScheme}
              navigation={navigation}
            />
          ))
        )}
      </ScrollView>
      {shoppingCartInfo.length == 0 ? (
        ""
      ) : (
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Finalizar Compra</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ShoppingCart;
