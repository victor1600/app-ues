import React from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
const FormField = ({ name, width, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField;

const styles = StyleSheet.create({});
