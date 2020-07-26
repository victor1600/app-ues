import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";
import AppCircleIcon from "../components/AppCircleIcon";

const subjects = [
  {
    id: "0",
    name: "Matemáticas",
    imageIcon: require("../assets/calculator.png"),
  },
  { id: "1", name: "Sociales", imageIcon: require("../assets/world.png") },
  { id: "2", name: "Lenguaje", imageIcon: require("../assets/lenguaje.png") },
  { id: "3", name: "Qumica", imageIcon: require("../assets/chemistry.png") },
  { id: "4", name: "Biologia", imageIcon: require("../assets/physics.png") },
  { id: "5", name: "Biologia", imageIcon: require("../assets/biologia.png") },
];

const SubjectMenu = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.subjectRow}>
        <AppCircleIcon name="Matemáticas" imageIcon={subjects[0].imageIcon} />
        <AppCircleIcon name="Sociales" imageIcon={subjects[1].imageIcon} />
      </View>
      <View style={styles.subjectRow}>
        <AppCircleIcon name="Lenguaje" imageIcon={subjects[2].imageIcon} />
        <AppCircleIcon name="Qumica" imageIcon={subjects[3].imageIcon} />
      </View>
      <View style={styles.subjectRow}>
        <AppCircleIcon name="Fisica" imageIcon={subjects[4].imageIcon} />
        <AppCircleIcon name="Biologia" imageIcon={subjects[5].imageIcon} />
      </View>
    </Screen>
  );
};

export default SubjectMenu;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  subjectRow: {
    flexDirection: "row",
    marginTop: 40,
  },
});
