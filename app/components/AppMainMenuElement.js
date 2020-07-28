import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import AppCardTemplate from "./AppCardTemplate";

function AppMainMenuElement({ imageIcon, subTitle, title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppCardTemplate>
          <View style={styles.rowContainer}>
            <Image style={styles.image} source={imageIcon} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{subTitle}</Text>
            </View>
          </View>
        </AppCardTemplate>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  rowContainer: {
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
  },
  subtitle: {},
  textContainer: {
    marginLeft: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AppMainMenuElement;
