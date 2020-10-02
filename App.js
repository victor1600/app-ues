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
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
