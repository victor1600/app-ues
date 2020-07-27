import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "./Screen";
import AppMainMenuElement from "../components/AppMainMenuElement";

function MainMenu(props) {
  const categories = [
    {
      id: 1,
      title: "Materias",
      subTitle: "Este es el modulo de materias.",
      image: require("../assets/school.png"),
    },
    {
      id: 2,
      title: "Examenes",
      subTitle: "Este es el modulo de examenes.",
      image: require("../assets/exam.png"),
    },
    {
      id: 3,
      title: "Estadisticas",
      subTitle: "Este es el modulo de estadisticas.",
      image: require("../assets/chart.png"),
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
