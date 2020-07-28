import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "../screens/MainMenu";
import SubjectMenu from "../screens/SubjectMenu";
import colors from "../config/colors";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Login", headerShown: false }}
    />
    <Stack.Screen
      name="MainMenu"
      component={MainMenu}
      options={{ title: "Menu principal", headerLeft: null }}
    />
    <Stack.Screen
      name="SubjectMenu"
      component={SubjectMenu}
      options={{ title: "Materias" }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
