import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

function AppCardTemplate({ title = "Pregunta Ejemplo", text = "dassdadasas" }) {
  return (
    <Card title={title} containerStyle={styles.container}>
      <Text>{text}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: "#ffff",
  },
});

export default AppCardTemplate;
