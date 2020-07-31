import React from "react";
import { StyleSheet, Image, Alert } from "react-native";
import Screen from "./Screen";
import FormField from "../components/forms/FormField";
import * as Yup from "yup";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import authApi from "../api/auth";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Ingrese usuario")
    .email("Ingrese un correo valido")
    .label("Email"),
  password: Yup.string().required("Ingrese contraseña").label("Password"),
});

const LoginScreen = () => {
  const navigator = useNavigation();

  // const handleSubmit = (value) => {
  //   console.log(value);
  //   if (value.email !== "victor@gmail.com" || value.password !== "prueba") {
  //     Alert.alert(
  //       "Credenciales Erróneas",
  //       "Por favor inténtelo de nuevo.",
  //       [{ text: "OK", onPress: () => console.log("OK Pressed") }],
  //       { cancelable: false }
  //     );
  //   } else {
  //     navigator.navigate("MainMenu");
  //   }
  // };

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) {
      Alert.alert(
        "Credenciales Erróneas",
        "Por favor inténtelo de nuevo.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      navigator.navigate("MainMenu");
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/minerva2.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Usuario"
          textContentType="emailAddress"
          icon="user"
          placeholer="hola"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Contraseña"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Ingresar" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
