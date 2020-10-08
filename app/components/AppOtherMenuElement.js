import React from "react";
import {
  View,
  StyleSheet,
  Text,
  //   Image,
  TouchableOpacity,
} from "react-native";
import AppCardTemplate from "./AppCardTemplate";
import { Image } from "react-native-expo-image-cache";
function AppOtherMenuElement({ imageIcon, subTitle, title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <AppCardTemplate>
          <View style={styles.rowContainer}>
            <Image
              style={styles.image}
              tint="light"
              //preview={{ uri: thumbnailUrl }}
              uri={imageIcon}
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              {/* <Text style={styles.subtitle}>{subTitle}</Text> */}
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
    // alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
  },
});

export default AppOtherMenuElement;
