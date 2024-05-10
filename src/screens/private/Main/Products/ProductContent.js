import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const ProductContent = ({ route, formattedDate }) => {
  const navigation = useNavigation();
  const { product, colorScheme } = route.params;
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
      height: 200,
      resizeMode: "cover",
    },
    contentView: {
      padding: 20,
      backgroundColor: colorScheme.palette_2,
    },
    title: {
      fontWeight: "bold",
      fontSize: 24,
      marginBottom: "3%",
      color: colorScheme.titles_color,
      textAlign: "justify",
    },
    authorDateContainer: {
      flexDirection: "row",
      marginBottom: "3%",
    },
    author: {
      fontSize: 16,
      color: colorScheme.subtitles_color,
    },
    separator: {
      fontSize: 14,
      color: colorScheme.subtitles_color,
      paddingHorizontal: "3%",
    },
    date: {
      fontSize: 14,
      color: colorScheme.subtitles_color,
    },
    text: {
      fontSize: 18,
      lineHeight: 24,
      color: colorScheme.titles_color,
      textAlign: "justify",
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
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.contentView}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.authorDateContainer}>
          <Text style={styles.author}>{product.author}</Text>
          <Text style={styles.separator}>·</Text>
        </View>
        <Text style={styles.text}>{product.text}</Text>
      </View>
    </View>
  );
};

export default ProductContent;
