import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../../../../context/UserContext";
import StripeService from "../../../../services/StripeService";
import { Linking } from "react-native";
import { useClub } from "../../../../context/ClubContext";

const PlanContent = ({ route }) => {
  const navigation = useNavigation();
  const { plan, colorScheme } = route.params;
  const { userInfo } = useUser();
  const { clubInfo, updateClubInfo } = useClub();

  const handleBuyPlanButton = () => {
    // lógica para comprar plano / vincular sócio
    async function initiateCheckout() {
      try {
        const items = [
          {
            price_id: plan.price_id, // Assegure-se de que 'plan' possui 'price_id'
            quantity: 1,
          },
        ];

        const response = await StripeService.createCheckoutLink(
          items,
          userInfo.id,
          clubInfo.stripe_id,
          "subscription"
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

    initiateCheckout();
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
      position: "absolute",
      bottom: 0,
      right: 40,
      padding: 10,
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
      textAlign: "justify",
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
        <Image source={{ uri: plan.image }} style={styles.image} />
        <View style={styles.nameView}>
          <Text style={styles.name}>{plan.name}</Text>
          <View style={styles.priceView}>
            <Text style={styles.rs}>R$</Text>
            <Text style={styles.price}>{plan.price}</Text>
          </View>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.description}>{plan.description}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleBuyPlanButton}
      >
        <Text style={styles.addToCartButtonText}>Comprar Plano</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlanContent;
