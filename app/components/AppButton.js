import React from "react";
import { Button } from "react-native-elements";
import { StyleSheet } from "react-native";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return <Button onPress={onPress} title={title} />;
};

export default AppButton;

const styles = StyleSheet.create({});
