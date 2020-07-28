import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Screen from "./Screen";
import AppCircleIcon from "../components/AppCircleIcon";
import { Header } from "react-native-elements";
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
      <ScrollView>
        <View style={styles.subjectRow}>
          <AppCircleIcon name="Matemáticas" imageIcon={subjects[0].imageIcon} />
          <AppCircleIcon name="Sociales" imageIcon={subjects[1].imageIcon} />
        </View>
        <View style={styles.subjectRow}>
          <AppCircleIcon name="Lenguaje" imageIcon={subjects[2].imageIcon} />
          <AppCircleIcon name="Química" imageIcon={subjects[3].imageIcon} />
        </View>
        <View style={styles.subjectRow}>
          <AppCircleIcon name="Física" imageIcon={subjects[4].imageIcon} />
          <AppCircleIcon name="Biología" imageIcon={subjects[5].imageIcon} />
        </View>
      </ScrollView>
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
    marginTop: 20,
  },
});
