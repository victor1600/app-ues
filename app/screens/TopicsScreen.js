import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Screen from "./Screen";
import useApi from "../hooks/useApi";
import { FlatList, TouchableOpacity } from "react-native";
import urls from "../config/BaseURL";
import topicsApi from "../api/topics";
import AppRowElement from "../components/AppRowElement";
function TopicsScreen({ route }) {
  const subjectId = route.params;
  const getTopicsApi = useApi(topicsApi.setEndpoint(subjectId.toString()));
  useEffect(() => {
    getTopicsApi.request();
  }, []);
  //   console.log(getTopicsApi.data);
  const onPress = () => {
    navigation.navigate("TopicsScreen");
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
