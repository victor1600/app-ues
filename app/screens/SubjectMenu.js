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

const SubjectMenu = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Respuesta A",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Respuesta B",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Respuesta C",
    },
  ];

  const onPress = () => {
    navigation.navigate("Question", { DATA: DATA });
  };
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.subjectRow}>
          <AppCircleIcon
            name="Matemáticas"
            imageIcon={subjects[0].imageIcon}
            onPress={onPress}
          />
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
