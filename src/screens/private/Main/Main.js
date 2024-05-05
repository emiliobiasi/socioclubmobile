import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6, Entypo, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import News from "./News";
import Products from "./Products";
import Plans from "./Plans";
import Tickets from "./Tickets";
import { useClub } from "../../../context/ClubContext";

const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();
export default function Main({ navigation }) {
  const { clubInfo } = useClub(); // Primeiro, obtenha clubInfo
  const { name, colorScheme } = clubInfo; // Depois desestruture name e colorScheme de clubInfo
  // colorScheme: {
  //   titles_color: "#FFFFFF",
  //   subtitles_color: "#AAB8C2",
  //   buttons_color: "#1D9BF0",
  //   palette_1: "#15202B",
  //   palette_2: "#253341",
  //   palette_3: "#0C111B",
  // },
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: name, // Use o nome do clube aqui
        headerTitleStyle: styles(colorScheme).headerTitle,
        headerStyle: styles(colorScheme).header,
        tabBarStyle: styles(colorScheme).tabBar,
        tabBarActiveTintColor: colorScheme.titles_color,
        tabBarInactiveTintColor: colorScheme.subtitles_color,
        headerLeft: () => (
          <View style={styles(colorScheme).iconImageView}>
            <Image
              source={clubInfo.icon}
              style={styles(colorScheme).iconImage}
            />
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={styles(colorScheme).profileIcon}
            onPress={() => navigation.navigate("Profile")}
          >
            <MaterialIcons
              name="account-circle"
              size={44}
              color={colorScheme.titles_color}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Tab.Screen
        name="Notícias"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={34} color={colorScheme.titles_color} />
          ),
        }}
      >
        {() => <News colorScheme={colorScheme} navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Produtos"
        component={Products}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6
              name="bag-shopping"
              size={34}
              color={colorScheme.titles_color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ingressos"
        component={Tickets}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="ticket" size={34} color={colorScheme.titles_color} />
          ),
        }}
      />
      <Tab.Screen
        name="Planos"
        component={Plans}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="diamond"
              size={34}
              color={colorScheme.titles_color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = (colorScheme) =>
  StyleSheet.create({
    headerTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: colorScheme.titles_color,
    },
    header: {
      height: height / 7,
      backgroundColor: colorScheme.palette_1,
    },
    tabBar: {
      backgroundColor: colorScheme.palette_2,
    },
    iconImage: {
      width: "100%",
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
