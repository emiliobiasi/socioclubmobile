import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useShoppingCart } from "../../../../context/ShoppingCartContext";

const ProductContent = ({ route }) => {
  const navigation = useNavigation();
  const { product, colorScheme } = route.params;
  const { shoppingCartInfo, updateShoppingCartInfo } = useShoppingCart();

  const handleShoppingCartButtonPress = () => {
    updateShoppingCartInfo(product);
    navigation.navigate("ShoppingCart", {
      product,
      colorScheme,
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      backgroundColor: colorScheme.palette_1,
    },
    topBar: {
      justifyContent: "center",
      paddingLeft: "3%",
      padding: 16,
      paddingTop: "15%",
      backgroundColor: colorScheme.palette_1,
    },
    image: {
      width: "100%",
      height: 400,
      resizeMode: "cover",
    },
    nameView: {
      paddingHorizontal: 30,
      paddingTop: 50,
      paddingBottom: 70,
      backgroundColor: colorScheme.palette_2,
      position: "relative",
    },
    name: {
      fontWeight: "bold",
      fontSize: 34,
      color: colorScheme.titles_color,
      textAlign: "left",
    },
    priceView: {
      flexDirection: "row",
      position: "absolute", // Posicionamento absoluto
      bottom: 0, // Colocado na parte inferior
      right: 40, // Colocado à direita
      padding: 10, // Adiciona algum espaçamento
      backgroundColor: colorScheme.palette_1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    rs: {
      fontSize: 30,
      color: colorScheme.titles_color,
      paddingRight: 5,
    },
    price: {
      fontSize: 30,
      color: colorScheme.titles_color,
      fontWeight: "bold",
    },
    descriptionView: {
      paddingHorizontal: 30,
      paddingVertical: 20,
    },
    description: {
      fontSize: 18,
      lineHeight: 24,
      color: colorScheme.titles_color,
      textAlign: "left",
      fontWeight: "bold",
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
  });
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
      </View>
      <ScrollView style={styles.scrollView}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.nameView}>
          <Text style={styles.name}>{product.name}</Text>
          <View style={styles.priceView}>
            <Text style={styles.rs}>R$</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleShoppingCartButtonPress}
      >
        <Text style={styles.addToCartButtonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductContent;
