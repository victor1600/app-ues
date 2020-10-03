import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Screen from "./Screen";
import AppCircleIcon from "../components/AppCircleIcon";
import AppOtherMenuElement from "../components/AppOtherMenuElement";
import useApi from "../hooks/useApi";
import subjectsApi from "../api/subjects";
import { FlatList } from "react-native";
import urls from "../config/BaseURL";
// import config from "../utility/cache";
// const subjects = [
//   {
//     id: "0",
//     name: "Matemáticas",
//     imageIcon: require("../assets/calculator.png"),
//   },
//   { id: "1", name: "Sociales", imageIcon: require("../assets/world.png") },
//   { id: "2", name: "Lenguaje", imageIcon: require("../assets/lenguaje.png") },
//   { id: "3", name: "Qumica", imageIcon: require("../assets/chemistry.png") },
//   { id: "4", name: "Biologia", imageIcon: require("../assets/physics.png") },
//   { id: "5", name: "Biologia", imageIcon: require("../assets/biologia.png") },
// ];

const SubjectMenu = ({ navigation }) => {
  const getSubjectsApi = useApi(subjectsApi.getSubjects);
  useEffect(() => {
    getSubjectsApi.request();
  }, []);

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
      <FlatList
        data={getSubjectsApi.data}
        keyExtractor={(category) => category.id.toString()}
        renderItem={({ item }) => (
          <AppOtherMenuElement
            title={item.name}
            imageIcon={urls.baseUrl + "/files/" + item.logo}
            // onPress={() => navigation.navigate(item.targetScreen)}
          />
        )}
      />
    </Screen>
  );
};

export default SubjectMenu;

const styles = StyleSheet.create({
  container: {
    // padding: 3,
  },
});
