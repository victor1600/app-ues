import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "../screens/MainMenu";
import SubjectMenu from "../screens/SubjectMenu";
import colors from "../config/colors";
import Question from "../screens/Question";
import Exam from "../screens/Exam";
import TopicsScreen from "../screens/TopicsScreen";
const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: "white",
    }}
  >
    {/* <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ title: "Login", headerShown: false }}
    /> */}
    <Stack.Screen
      name="MainMenu"
      component={MainMenu}
      options={{ title: "Menu principal", headerLeft: null }}
    />
    <Stack.Screen
      name="Examen"
      component={Exam}
      options={{ title: "Exámen" }}
    />
    <Stack.Screen
      name="SubjectMenu"
      component={SubjectMenu}
      options={{ title: "Materias" }}
    />
    <Stack.Screen
      name="TopicsScreen"
      component={TopicsScreen}
      options={{ title: "Temas" }}
    />
    <Stack.Screen
      name="Question"
      component={Question}
      options={{ title: "Prueba" }}
    />
  </Stack.Navigator>
);

export default MainNavigator;
