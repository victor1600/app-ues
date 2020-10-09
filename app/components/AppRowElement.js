import React from "react";
import { View, StyleSheet, Text, Button, Linking } from "react-native";
import AppCardTemplate from "./AppCardTemplate";
import colors from "../config/colors";

function AppRowElement({ title, pdfUrl, onPress }) {
  return (
    <View style={styles.container}>
      <AppCardTemplate title={title}>
        {/* <Text style={styles.title}>{title}</Text> */}
        <View style={styles.buttonContainer}>
          <Button
            title="abrir pdf"
            color={colors.primary}
            onPress={() => Linking.openURL(pdfUrl)}
          />
          <Button title="Preguntas" color={colors.primary} onPress={onPress} />
        </View>
      </AppCardTemplate>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // paddingBottom: 13,
  },
  container: {
    // justifyContent: "center",
    // alignItems:'c'
  },
  title: {
    fontSize: 17,
    // paddingLeft: 110,
    alignItems: "center",
    // alignContent: "center",
    // justifyContent: "center",
    // marginLeft: 100,
    padding: 10,
  },
});

export default AppRowElement;
