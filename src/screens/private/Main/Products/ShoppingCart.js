// src/components/ShoppingCart.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import ShoppingCartCard from "./ShoppingCartCard";
import { useUser } from "../../../../context/UserContext";
import { Linking } from "react-native";
import StripeService from "../../../../services/StripeService";
import { useClub } from "../../../../context/ClubContext";

const ShoppingCart = ({ route }) => {
  const { shoppingCartInfo, updateShoppingCartInfo } = useShoppingCart();
  const { userInfo } = useUser();
  const navigation = useNavigation();
  const { colorScheme } = route.params;
  const { clubInfo, updateClubInfo } = useClub();

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
      backgroundColor: colorScheme.palette_2,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    pageName: {
      fontWeight: "bold",
      fontSize: 34,
      color: colorScheme.titles_color,
    },
    buyButton: {
      backgroundColor: colorScheme.buttons_color,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 40,
      marginHorizontal: 20,
    },
    buyButtonText: {
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

  const handleBuyCartButton = () => {
    async function buyItems() {
      console.log("shoppingCartInfo: ", shoppingCartInfo);
      try {
        console.log("clubInfo.stripe_id: ", clubInfo.stripe_id);
        // Construir a lista de itens para o checkout
        const items = shoppingCartInfo.map((product) => ({
          price_id: product.price_id, // Assegure-se de que cada produto possui 'price_id'
          quantity: product.quantity || 1, // Assegure-se de que cada produto possui 'quantity'
        }));

        // Chamar o backend para criar a sessão de checkout
        const response = await StripeService.createCheckoutLink(
          items,
          userInfo.id,
          clubInfo.stripe_id
        );
        const checkoutUrl = response.data.checkout_url;

        if (checkoutUrl) {
          // Redirecionar o usuário para o Stripe Checkout
          Linking.openURL(checkoutUrl);
        } else {
          Alert.alert("Erro", "Não foi possível criar o link de checkout.");
        }
      } catch (error) {
        console.error("Erro ao criar o link de checkout:", error);
        Alert.alert("Erro", "Ocorreu um erro ao processar sua compra.");
      }
    }

    buyItems();
  };

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
          size={32}
          color={colorScheme.titles_color}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {shoppingCartInfo.length === 0 ? (
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
              key={item.id} // Use um identificador único do item
              product={item}
              colorScheme={colorScheme}
              navigation={navigation}
            />
          ))
        )}
      </ScrollView>
      {shoppingCartInfo.length === 0 ? null : (
        <TouchableOpacity
          style={styles.buyButton}
          onPress={handleBuyCartButton}
        >
          <Text style={styles.buyButtonText}>Finalizar Compra</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ShoppingCart;
