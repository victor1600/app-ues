import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "./app/screens/LoginScreen";
import theme from "./app/config/ThemeObject";
import { ThemeProvider } from "react-native-elements";
import SubjectMenu from "./app/screens/SubjectMenu";
import AppCardTemplate from "./app/components/AppCardTemplate";
import Question from "./app/screens/Question";
import AppMainMenuElement from "./app/components/AppMainMenuElement";
import MainMenu from "./app/screens/MainMenu";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SubjectMenu />
    </ThemeProvider>
  );
}
