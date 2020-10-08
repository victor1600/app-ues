import React from "react";
import { View, StyleSheet, Text, Button, Linking } from "react-native";
import AppCardTemplate from "./AppCardTemplate";
import colors from "../config/colors";

function AppRowElement({ title, pdfUrl }) {
  return (
    <View style={styles.container}>
      <AppCardTemplate>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonContainer}>
          <Button title="ver pdf" onPress={Linking.openURL(pdfUrl)} />
          <Button title="Cuestionario" color={colors.primary} />
        </View>
        {/* <Divider style={{ backgroundColor: "gray" }} /> */}
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
    // marginVertical: 10,
  },
  title: {
    fontSize: 17,
    // alignContent: "center",
    // justifyContent: "center",
    // marginLeft: 100,
    padding: 10,
  },
});

export default AppRowElement;
