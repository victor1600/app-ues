import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from "react-native-elements";

const AppCircleIcon = ({ name = "Matemática", imageIcon }) => {
  const onPress = () => {
    console.log("pressed");
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Image style={styles.image} source={imageIcon} />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppCircleIcon;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#B9B2B1",
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginHorizontal: 40,
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 18,
  },
});
