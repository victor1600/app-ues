import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { ThemeContext } from "react-native-elements";

const AppCircleIcon = ({ name = "Matemática", imageIcon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.test}>
        <View style={styles.container}>
          <View style={styles.circle}>
            <Image
              style={styles.image}
              tint="light"
              //preview={{ uri: thumbnailUrl }}
              uri={imageIcon}
            />
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
    backgroundColor: "#F1EFED",
    width: 100,
    height: 100,
    borderRadius: 50,
    // borderColor: "#DAD8D6",
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
  },
  container: {
    marginRight: "10%",
    marginLeft: "8%",
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
