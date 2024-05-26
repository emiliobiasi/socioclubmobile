import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useClub } from "../context/ClubContext";

const MembershipCard = ({ plan }) => {
  const { clubInfo } = useClub();
  const styles = StyleSheet.create({
    membershipCard: {
      flexDirection: "row", // Para alinhar os itens horizontalmente
      justifyContent: "space-between", // Para distribuir espaço entre os elementos
      alignItems: "center", // Para centralizar verticalmente
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 10,
      backgroundColor: "#253341",
      width: 340,
      overflow: "hidden",
    },
    leftView: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      width: "40%", // Define a largura total
    },
    iconImageView: {
      width: 80,
      height: 80,
      overflow: "hidden",
      borderRadius: 40, // Deixa a imagem circular, se desejado
    },
    iconImage: {
      width: "100%",
      height: "100%",
    },
    priceView: {
      alignItems: "center",
      marginTop: 10, // Espaço entre a imagem e o preço
    },
    price: {
      color: "white",
      fontWeight: "bold",
    },
    rightView: {
      justifyContent: "space-between",
      width: "55%", // Define a largura total
    },
    membershipTitleView: {
      marginBottom: 10, // Espaço entre o título e o nome do plano
    },
    membershipTitle: {
      fontSize: 16,
      marginBottom: 4,
      color: "#AAB8C2",
      flexShrink: 1, // Permite que o texto encolha para caber no contêiner
    },
    membershipName: {
      fontWeight: "bold",
      fontSize: 18,
      color: "white",
      flexShrink: 1, // Permite que o texto encolha para caber no contêiner
    },
    dateRange: {
      color: "#AAB8C2",
      marginTop: 10, // Espaço entre o nome do plano e a data
    },
  });

  return (
    <View style={styles.membershipCard}>
      <View style={styles.leftView}>
        <View style={styles.iconImageView}>
          <Image style={styles.iconImage} source={{ uri: plan.image }} />
        </View>
        <View style={styles.priceView}>
          <Text style={styles.price}>Preço</Text>
          <Text style={styles.price}>R${plan.price}</Text>
        </View>
      </View>

      <View style={styles.rightView}>
        <View style={styles.membershipTitleView}>
          <Text style={styles.membershipTitle}>Seu plano</Text>
          <Text
            style={styles.membershipName}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {plan.name}
          </Text>
        </View>

        <Text style={styles.dateRange}>Até dia: {plan.end_date}</Text>
      </View>
    </View>
  );
};

export default MembershipCard;
