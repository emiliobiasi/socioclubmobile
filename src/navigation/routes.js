import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import ChooseSign from "../screens/ChooseSign";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      {/* Adicione outras rotas aqui conforme necessário */}
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
}

export default Routes;
