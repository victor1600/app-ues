import React, { useState } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import Screen from "./Screen";
import AppCardTemplate from "../components/AppCardTemplate";
import { CheckBox } from "react-native-elements";

function Question(props) {
  const text =
    "Nunc nec purus ac sapien posuere imperdiet. Proin sapien nisi, tristique sed lectus sed, dapibus auctor nulla. Vestibulum maximus tincidunt blandit. Pellentesque condimentum venenatis fringilla. Integer suscipit libero sem. Maecenas sed venenatis felis. Donec accumsan purus vitae magna mollis, nec eleifend purus pharetra.";

  const [checked, setChecked] = useState("");

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
  const handlePress = (event) => {
    console.log(event.target);
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  answersContainer: {
    marginVertical: 20,
  },
  container: {
    padding: 7,
  },
});

export default Question;
