import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "./app/screens/LoginScreen";
import theme from "./app/config/ThemeObject";
import { ThemeProvider } from "react-native-elements";
import AppCircleIcon from "./app/components/AppCircleIcon";
import SubjectMenu from "./app/screens/SubjectMenu";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <LoginScreen /> */}
      <SubjectMenu />
    </ThemeProvider>
  );
}
