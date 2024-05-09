import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6, Entypo, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import News from "./News/News";
import Products from "./Products/Products";
import Plans from "./Plans/Plans";
import Tickets from "./Tickets/Tickets";
import { useClub } from "../../../context/ClubContext";

const { width, height } = Dimensions.get("window");

const Tab = createBottomTabNavigator();
export default function Main({ navigation }) {
  const { clubInfo } = useClub();
  const { name, colorScheme } = clubInfo;
  //console.log("clubInfo na MAIN: ", clubInfo);
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: name, // Use o nome do clube aqui
        headerTitleStyle: styles(colorScheme).headerTitle,
        headerStyle: styles(colorScheme).header,
        tabBarStyle: styles(colorScheme).tabBar,
        headerShadowVisible: false,
        tabBarActiveTintColor: colorScheme.titles_color,
        tabBarInactiveTintColor: colorScheme.subtitles_color,
        tabBarLabel: () => null,
        headerLeft: () => (
          <View style={styles(colorScheme).iconImageView}>
            <Image
              source={{ uri: clubInfo.logo }}
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
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="home"
              size={34}
              color={
                focused ? colorScheme.buttons_color : colorScheme.titles_color
              }
            />
          ),
        }}
      >
        {() => (
          <News
            clubInfo={clubInfo}
            colorScheme={colorScheme}
            navigation={navigation}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Produtos"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="shop"
              size={34}
              color={
                focused ? colorScheme.buttons_color : colorScheme.titles_color
              }
            />
          ),
        }}
      >
        {() => <Products colorScheme={colorScheme} navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Ingressos"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="ticket"
              size={34}
              color={
                focused ? colorScheme.buttons_color : colorScheme.titles_color
              }
            />
          ),
        }}
      >
        {() => <Tickets colorScheme={colorScheme} navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen
        name="Planos"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="diamond"
              size={34}
              color={
                focused ? colorScheme.buttons_color : colorScheme.titles_color
              }
            />
          ),
        }}
      >
        {() => <Plans colorScheme={colorScheme} navigation={navigation} />}
      </Tab.Screen>
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
      backgroundColor: colorScheme.palette_2,
      borderBottomWidth: 0,
    },
    tabBar: {
      backgroundColor: colorScheme.palette_2,
      height: "10%", // Ajuste a altura da tabBar conforme desejado
      borderTopWidth: 0,
    },
    iconImage: {
      width: "100%",
      height: "100%",
    },
    iconImageView: {
      width: 60,
      height: 60,
      marginLeft: "15%",
    },
    profileIcon: {
      paddingRight: "15%",
    },
  });
