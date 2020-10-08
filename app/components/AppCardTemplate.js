import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-elements";

function AppCardTemplate({ title, text, children }) {
  return (
    <Card title={title} containerStyle={styles.container}>
      {children}
      <Text>{text}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: "#ffff",
    padding: 5,
  },
});

export default AppCardTemplate;
