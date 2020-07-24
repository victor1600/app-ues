import { Platform } from "react-native";
const theme = {
  Button: {
    titleStyle: {
      color: "white",
    },
    buttonStyle: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
  },
  colors: {
    primary: "#9f0025",
    grey0: "#f8f4f4",
    grey1: "#6e6969",
  },
  Input: {
    inputStyle: {
      color: "#0c0c0c",
      fontSize: 18,
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
  },
};

export default theme;
