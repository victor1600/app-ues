import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Screen from "./Screen";
import AppMainMenuElement from "../components/AppMainMenuElement";
import routes from "../navigation/routes";

function MainMenu({ navigation }) {
  const categories = [
    {
      id: 1,
      title: "Materias",
      subTitle: "Este es el modulo de materias.",
      image: require("../assets/school.png"),
      targetScreen: routes.SUBJECT_MENU,
    },
    {
      id: 2,
      title: "Examenes",
      subTitle: "Este es el modulo de examenes.",
      image: require("../assets/exam.png"),
      targetScreen: routes.SUBJECT_MENU,
    },
    {
      id: 3,
      title: "Estadisticas",
      subTitle: "Este es el modulo de estadisticas.",
      image: require("../assets/chart.png"),
      targetScreen: routes.SUBJECT_MENU,
    },
  ];

  return (
    <Screen style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category.id.toString()}
        renderItem={({ item }) => (
          <AppMainMenuElement
            title={item.title}
            subTitle={item.subTitle}
            imageIcon={item.image}
            onPress={() => navigation.navigate(item.targetScreen)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 3,
  },
});

export default MainMenu;
