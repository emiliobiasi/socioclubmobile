import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import ChooseSign from "../screens/ChooseSign";
import SignUp from "../screens/SignUp";
import LoadingScreen from "../screens/private/LoadingScreen";
import SignIn from "../screens/SignIn";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "../screens/MapScreen";
import Main from "../screens/private/Main/Main";
import ClubSearch from "../screens/private/ClubSearch";
import Profile from "../screens/private/Profile/Profile";
import ProfileEdit from "../screens/private/Profile/ProfileEdit";
import { ClubProvider } from "../context/ClubContext"; // Certifique-se que o caminho está correto
import { UserProvider } from "../context/UserContext";
import NewsContent from "../screens/private/Main/News/NewsContent";
import News from "../screens/private/Main/News/News";
import Plans from "../screens/private/Main/Plans/Plans";
import Products from "../screens/private/Main/Products/Products";
import Tickets from "../screens/private/Main/Tickets/Tickets";
import NewsCard from "../screens/private/Main/News/NewsCard";
import ProductCard from "../screens/private/Main/Products/ProductCard";
import ProductContent from "../screens/private/Main/Products/ProductContent";
import ShoppingCart from "../screens/private/Main/Products/ShoppingCart";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import PlanContent from "../screens/private/Main/Plans/PlanContent";

const Stack = createStackNavigator();

const PublicNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ChooseSign"
      component={ChooseSign}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const PrivateNavigator = () => (
  <Stack.Navigator initialRouteName="ClubSearch">
    <Stack.Screen
      name="Loading"
      component={LoadingScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ClubSearch"
      component={ClubSearch}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Main"
      component={Main}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProfileEdit"
      component={ProfileEdit}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="News"
      component={News}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NewsCard"
      component={NewsCard}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NewsContent"
      component={NewsContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Plans"
      component={Plans}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PlanContent"
      component={PlanContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Products"
      component={Products}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductsCard"
      component={ProductCard}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductContent"
      component={ProductContent}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ShoppingCart"
      component={ShoppingCart}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Tickets"
      component={Tickets}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export const Layout = () => {
  const { authState } = useAuth();

  return (
    <NavigationContainer>
      {authState?.authenticated ? <PrivateNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
};

export default function Routes() {
  return (
    <UserProvider>
      <ClubProvider>
        <AuthProvider>
          <ShoppingCartProvider>
            <Layout />
          </ShoppingCartProvider>
        </AuthProvider>
      </ClubProvider>
    </UserProvider>
  );
}
