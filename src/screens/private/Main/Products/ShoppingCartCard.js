import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import { AntDesign } from "@expo/vector-icons";

const ShoppingCartCard = ({ product, colorScheme, navigation }) => {
  const {
    shoppingCartInfo,
    updateShoppingCartInfo,
    replaceProduct,
    removeProduct,
  } = useShoppingCart();
  const [qtdNum, setQtdNum] = useState(product.quantity);
  const styles = StyleSheet.create({
    cardContainer: {
      position: "relative",
      marginTop: 10,
      marginHorizontal: 15,
      borderRadius: 10,
      flex: 1,
      marginBottom: 10,
      backgroundColor: colorScheme.palette_2,
      flexDirection: "row",
    },
    imageView: {
      width: "40%",
    },
    image: {
      width: "100%",
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      height: 200,
      resizeMode: "cover",
    },
    textContainer: {
      flex: 1,
      padding: 10,
      justifyContent: "space-between", // Alinha os elementos verticalmente
      alignItems: "center", // Alinha os elementos horizontalmente
    },
    removeButton: {
      position: "absolute",
      top: -6, // Distância do topo
      right: -6, // Distância da direita
    },
    name: {
      fontWeight: "bold",
      fontSize: 22,
      color: colorScheme.titles_color,
      paddingVertical: "2%",
      textAlign: "center",
    },
    priceContainer: {
      flexDirection: "row",
      marginBottom: "3%",
      // borderWidth: 1,
      // borderRadius: 30,
      paddingVertical: 3,
    },
    pricetag: {
      paddingTop: 25,
      position: "absolute",
    },
    rs: {
      fontSize: 20,
      color: colorScheme.titles_color,
    },
    price: {
      fontSize: 30,
      color: colorScheme.titles_color,
      fontWeight: "bold",
    },
    qtdCotainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    qtd: {
      fontSize: 16,
      color: colorScheme.titles_color,
      paddingRight: 10,
    },
    qtdNum: {
      fontSize: 20,
      color: colorScheme.titles_color,
      paddingHorizontal: 5,
    },
  });

  const handlePlusButton = () => {
    setQtdNum((prevQtdNum) => prevQtdNum + 1);
    // Cria um novo objeto product com a quantidade atualizada
    const updatedProduct = { ...product, quantity: qtdNum + 1 };
    // Chama a função replaceProduct para substituir o produto na lista
    replaceProduct(updatedProduct);
  };

  const handleMinusButton = () => {
    if (qtdNum > 1) {
      setQtdNum((prevQtdNum) => prevQtdNum - 1);
      // Cria um novo objeto product com a quantidade atualizada
      const updatedProduct = { ...product, quantity: qtdNum - 1 };
      // Chama a função replaceProduct para substituir o produto na lista
      replaceProduct(updatedProduct);
    }
  };

  const handleRemoveButton = () => {
    // Chama a função removeProduct para remover o produto
    removeProduct(product.id);
  };

  return (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.imageView}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <AntDesign
            name="closecircle"
            size={24}
            color={colorScheme.titles_color}
            style={styles.removeButton}
            onPress={handleRemoveButton}
          />
          <Text style={styles.name} numberOfLines={3}>
            {product.name}
          </Text>
          <View style={styles.priceContainer}>
            <Entypo
              name="price-tag"
              size={30}
              color={colorScheme.titles_color}
              style={styles.pricetag}
            />
            <Text style={styles.rs}>R$ </Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
          <View style={styles.qtdCotainer}>
            <Text style={styles.qtd}>Quantidade:</Text>
            <Entypo
              name="squared-minus"
              size={36}
              color={colorScheme.titles_color}
              onPress={handleMinusButton}
            />
            <Text style={styles.qtdNum}>{qtdNum}</Text>
            <Entypo
              name="squared-plus"
              size={36}
              color={colorScheme.titles_color}
              onPress={handlePlusButton}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingCartCard;
