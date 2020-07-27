import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

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
