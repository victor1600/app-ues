import React, { useState } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import Screen from "./Screen";
import AppCardTemplate from "../components/AppCardTemplate";
import { CheckBox } from "react-native-elements";
import AppButton from "../components/AppButton";

function Question({ route }) {
  const DATA = route.params.DATA;
  const text =
    "Nunc nec purus ac sapien posuere imperdiet. Proin sapien nisi, tristique sed lectus sed, dapibus auctor nulla. Vestibulum maximus tincidunt blandit. Pellentesque condimentum venenatis fringilla. Integer suscipit libero sem. Maecenas sed venenatis felis. Donec accumsan purus vitae magna mollis, nec eleifend purus pharetra.";

  const [checked, setChecked] = useState("");

  const handlePress = (event) => {
    console.log(event.target);
  };

  return (
    <Screen style={styles.container}>
      <AppCardTemplate text={text} />
      <View style={styles.answersContainer}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CheckBox
              title={item.title}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="tomato"
              checked={checked === item.id ? true : false}
              onPress={() => setChecked(item.id)}
            />
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Anterior" />
        <AppButton title="Siguiente" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  answersContainer: {
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    padding: 7,
  },
});

export default Question;
