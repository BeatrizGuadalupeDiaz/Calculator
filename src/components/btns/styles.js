import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
  general: {
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.04,
  },
  primary: {
    color: "white",
  },
  secondary: {
    color: "black",
  },
  tertiary:{
    color: "black",
  }
});

export const btnStyles = StyleSheet.create({
  general: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  primary: {
    backgroundColor: "black",
  },
  secondary: {
    backgroundColor: "orange",
  },
  tertiary:{
    backgroundColor: '#B2B2B2'
  }
});
