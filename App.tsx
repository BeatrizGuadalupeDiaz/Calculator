import React from "react";
import { View } from "react-native";

import { Calculator } from "./src/screens/calculator";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Calculator />
    </View>
  );
}
