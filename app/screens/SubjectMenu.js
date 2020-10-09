import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Screen from "./Screen";
import AppCircleIcon from "../components/AppCircleIcon";
import AppOtherMenuElement from "../components/AppOtherMenuElement";
import useApi from "../hooks/useApi";
import subjectsApi from "../api/subjects";
import { FlatList } from "react-native";
import urls from "../config/BaseURL";

const SubjectMenu = ({ navigation }) => {
  const getSubjectsApi = useApi(subjectsApi.getSubjects);
  useEffect(() => {
    getSubjectsApi.request();
  }, []);

  return (
    <Screen style={styles.container}>
      <FlatList
        data={getSubjectsApi.data}
        keyExtractor={(category) => category.id.toString()}
        renderItem={({ item }) => (
          <AppOtherMenuElement
            title={item.name}
            imageIcon={urls.baseUrl + "/files/" + item.logo}
            onPress={() => navigation.navigate("TopicsScreen", item.id)}
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
