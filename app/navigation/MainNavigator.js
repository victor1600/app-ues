import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "../screens/MainMenu";
import SubjectMenu from "../screens/SubjectMenu";
import colors from "../config/colors";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="MainMenu"
      component={MainMenu}
      options={{ title: "Menu principal" }}
    />
    <Stack.Screen
      name="SubjectMenu"
      component={SubjectMenu}
      options={{ title: "Materias" }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
