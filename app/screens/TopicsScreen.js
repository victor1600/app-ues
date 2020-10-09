import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import useApi from "../hooks/useApi";
import { FlatList } from "react-native";
import urls from "../config/BaseURL";
import topicsApi from "../api/topics";
import AppRowElement from "../components/AppRowElement";
function TopicsScreen({ route, navigation }) {
  const subjectId = route.params;
  const getTopicsApi = useApi(topicsApi.setEndpoint(subjectId.toString()));
  useEffect(() => {
    getTopicsApi.request();
  }, []);

  // JUST FOR TESTING
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
    // navigation.navigate("TopicsScreen", { DATA: DATA });
  };
  return (
    <View>
      <FlatList
        data={getTopicsApi.data}
        keyExtractor={(topic) => topic.id.toString()}
        renderItem={({ item }) => (
          <AppRowElement
            title={item.topic_title}
            pdfUrl={urls.baseUrl + "/files/" + item.document}
            onPress={onPress}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default TopicsScreen;
