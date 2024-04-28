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

const Stack = createStackNavigator();

const PublicNavigator = () => (
  <Stack.Navigator initialRouteName="MapScreen">
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
    <Stack.Screen
      name="Main"
      component={Main}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ClubSearch"
      component={ClubSearch}
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
  </Stack.Navigator>
);

const PrivateNavigator = () => (
  <Stack.Navigator initialRouteName="Loading">
    <Stack.Screen
      name="Loading"
      component={LoadingScreen}
      options={{ headerShown: false }}
    />
    {/* Adicionar aqui mais telas privadas conforme necessário */}
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
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}
