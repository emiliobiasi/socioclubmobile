import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import News from "./News";
import Products from "./Products";
import Plans from "./Plans";
import Tickets from "./Tickets";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notícias"
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={Products}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="bag-shopping" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Ingressos"
        component={Tickets}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="ticket" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Planos"
        component={Plans}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="diamond" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
