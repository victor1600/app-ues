import React, { useState } from "react";
import { StyleSheet, Image, Alert } from "react-native";
import Screen from "./Screen";
import FormField from "../components/forms/FormField";
import * as Yup from "yup";
import AppForm from "../components/forms/AppForm";
import ErrorMessage from "../components/forms/ErrorMessage";
import SubmitButton from "../components/forms/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Ingrese usuario")
    .email("Ingrese un correo valido")
    .label("Email"),
  password: Yup.string().required("Ingrese contraseña").label("Password"),
});

const LoginScreen = () => {
  const navigator = useNavigation();
  const auth = useAuth();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await authApi.login(email, password, (progress) =>
      setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      // Alert.alert(
      //   "Credenciales Erróneas",
      //   "Por favor inténtelo de nuevo.",
      //   [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      //   { cancelable: false }
      // );
      setLoginFailed(true);
    } else {
      setUploadVisible(false);
      setLoginFailed(false);
      // navigator.navigate("MainMenu");
    }
    auth.logIn("Bearer " + result.data.access_token);
    //console.log(result.data.access_token);
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
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
        <ErrorMessage error="Credenciales incorrectas." visible={loginFailed} />
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
