import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ThemeContext } from "react-native-elements";

const AppCircleIcon = ({ name = "Matemática", imageIcon }) => {
  const onPress = () => {
    console.log("pressed");
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.test}>
        <View style={styles.container}>
          <View style={styles.circle}>
            <Image style={styles.image} source={imageIcon} />
          </View>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppCircleIcon;

const styles = StyleSheet.create({
  circle: {
    // backgroundColor: "#DAD8D6",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#DAD8D6",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  container: {
    marginRight: "5%",
    marginLeft: "15%",
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
  },
  test: {
    // justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});
