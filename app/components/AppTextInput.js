import React, { useContext } from "react";
import { StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { ThemeContext } from "react-native-elements";
import AppForm from "./forms/AppForm";

const AppTextInput = ({ icon = "volume-off", ...otherProps }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Input
      {...otherProps}
      leftIcon={<Icon name={icon} size={24} color={theme.colors.grey1} />}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
