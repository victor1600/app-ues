import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import theme from "./app/config/ThemeObject";
import { ThemeProvider } from "react-native-elements";
import navigationTheme from "./app/navigation/navigationTheme";

import MainNavigator from "./app/navigation/MainNavigator";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={navigationTheme}>
        <MainNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
