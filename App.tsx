import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SET_VALUE = 1;
const MINIMUM_VALUE = 0;

export default function App() {
  
  const [counter, setCounter] = React.useState(0);

  //functions
  const plus = () => {
    setCounter(counter + SET_VALUE);
  };
  const minus = () => {
    if (counter <= MINIMUM_VALUE) {
      return;
    }
    setCounter(counter - SET_VALUE);
  };

  return (
    <View style={styles.container}>
      <Text>Calculator</Text>
      <View>
        <TouchableOpacity style={styles.btn} onPress={plus}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{counter}</Text>
        <TouchableOpacity style={styles.btn} onPress={minus}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 40,
    height: 30,
    backgroundColor: "lightblue",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
});
