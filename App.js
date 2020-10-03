import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import theme from "./app/config/ThemeObject";
import { ThemeProvider } from "react-native-elements";
import navigationTheme from "./app/navigation/navigationTheme";

import MainNavigator from "./app/navigation/MainNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { AppLoading } from "expo";
import LoginScreen from "./app/screens/LoginScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  const [token, setToken] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (token) setToken(token);
  };
  if (!isReady)
    return (
      <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navigationTheme}>
          {token ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
