import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6, Entypo, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import News from "./News";
import Products from "./Products";
import Plans from "./Plans";
import Tickets from "./Tickets";

const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();
const colorScheme = {
  title: "#fff",
  background: "#15202B",
  primary: "#253341",
  icons: "#fff",
  div: "",
  text: "#AAB8C2",
  secondaryText: "",
  button: "#1D9BF0",
};
export default function Main({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "Vasco",
        headerTitleStyle: styles.headerTitle,
        headerStyle: styles.header,
        tabBarStyle: styles.tabBar, // Estilo para a barra de navegação
        tabBarActiveTintColor: colorScheme.button, // Cor para ícones ativos
        tabBarInactiveTintColor: colorScheme.text, // Cor para ícones inativos
        tabBarIcon: ({ color, size }) => ({ color: colorScheme.icons }), // Cor dos ícones
        headerLeft: () => (
          <View style={styles.iconImageView}>
            <Image
              source={require("../../../../assets/images/vascoicon.png")}
              style={styles.iconImage}
            />
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={styles.profileIcon}
            onPress={() => navigation.navigate("Profile")}
          >
            <MaterialIcons
              name="account-circle"
              size={36}
              color={colorScheme.icons}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="Notícias"
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={34} color={colorScheme.icons} />
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
              size={34}
              color={colorScheme.icons}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ingressos"
        component={Tickets}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="ticket" size={34} color={colorScheme.icons} />
          ),
        }}
      />
      <Tab.Screen
        name="Planos"
        component={Plans}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="diamond" size={34} color={colorScheme.icons} />
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
    color: colorScheme.title, // Cor do título
  },
  header: {
    height: height / 7,
    backgroundColor: colorScheme.background, // Cor de fundo
    borderBottomWidth: 1,
    borderBottomColor: colorScheme.div, // Cor da borda inferior
  },
  tabBar: {
    backgroundColor: colorScheme.background, // Cor de fundo da barra de navegação
  },
  iconImage: {
    width: "100%", // Tamanho do ícone
    height: "100%",
    borderRadius: 40,
    borderWidth: 2,
  },
  iconImageView: {
    width: 60,
    height: 60,
    marginLeft: "15%",
    marginTop: "5%",
  },
  profileIcon: {
    paddingRight: "15%",
  },
});
