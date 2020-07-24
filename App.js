import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "./app/screens/LoginScreen";
import theme from "./app/config/ThemeObject";
import { ThemeProvider } from "react-native-elements";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
}
