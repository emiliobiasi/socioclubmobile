import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6, Entypo, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import News from "./News";
import Products from "./Products";
import Plans from "./Plans";
import Tickets from "./Tickets";

const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
  const colorScheme = {
    title: "",
    background: "",
    primary: "",
    icons: "",
    div: "",
    text: "",
    secondaryText: "",
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "Vasco",
        headerTitleStyle: styles.headerTitle,
        headerStyle: styles.header, // Ajusta a altura do cabeçalho e padding
        headerLeft: () => (
          <Image
            source={require("../../../../assets/images/vascoicon.png")}
            style={styles.iconImage} // Estilo para a imagem do ícone
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={styles.profileIcon}
            onPress={() => navigation.navigate("Profile")}
          >
            <FontAwesome6 name="user" size={24} color={styles.iconColor} />
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="Notícias"
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color={styles.iconColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={Products}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6
              name="bag-shopping"
              size={24}
              color={styles.iconColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ingressos"
        component={Tickets}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="ticket" size={24} color={styles.iconColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Planos"
        component={Plans}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="diamond" size={24} color={styles.iconColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    height: 110,
    backgroundColor: "white",
    borderBottomWidth: 1, // Borda inferior do cabeçalho
    borderBottomColor: "gray", // Cor da borda inferior
  },
  iconImage: {
    width: 60, // Tamanho da imagem do ícone
    height: 60, // Tamanho da imagem do ícone
    borderRadius: 40, // Tornar a imagem redonda
    borderWidth: 2, // Borda ao redor do ícone
    borderColor: "#fff", // Cor da borda
    marginLeft: "15%",
  },
  profileIcon: {
    paddingRight: "15%",
  },
  iconColor: {
    color: "black",
  },
});
