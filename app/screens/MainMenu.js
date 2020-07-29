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
      subTitle: "Módulo de materias.",
      image: require("../assets/school.png"),
      targetScreen: routes.SUBJECT_MENU,
    },
    {
      id: 2,
      title: "Exámenes",
      subTitle: "Módulo de exámenes.",
      image: require("../assets/exam.png"),
      targetScreen: routes.SUBJECT_MENU,
    },
    {
      id: 3,
      title: "Estadísticas",
      subTitle: "Módulo de estadísticas.",
      image: require("../assets/chart.png"),
      targetScreen: routes.SUBJECT_MENU,
    },
    {
      id: 4,
      title: "Configuracion",
      subTitle: "Módulo de configuracion personal.",
      image: require("../assets/settings.png"),
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
