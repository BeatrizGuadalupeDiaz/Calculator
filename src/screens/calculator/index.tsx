import React from "react";
import { SafeAreaView, View } from "react-native";

import { Display } from "../../components";
import { ButtonSet } from "../../components/groupBtns";
import { styles } from "./styles";

export const Calculator = () => {
  const STYLE_OPERATOR = styles.buttonSet2;
  const [currentValue, setCurrentValue] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.diplayConteiner}>
        <Display value={currentValue} />
      </View>
      <View style={styles.bntsConteiner}>
        <View style={{ flex: 0.8 }}>
          <ButtonSet
            typeBtn={"tertiary"}
            signs={["AC", "DEL", "%"]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <ButtonSet
            typeBtn={"primary"}
            signs={["7", "8", "9"]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <ButtonSet
            typeBtn={"primary"}
            signs={["4", "5", "6"]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <ButtonSet
            typeBtn={"primary"}
            signs={["1", "2", "3"]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
          <ButtonSet
            typeBtn={"primary"}
            signs={["00", "0", "."]}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <ButtonSet
            typeBtn={"secondary"}
            signs={["/", "*", "-", "+", "="]}
            flexDirec={STYLE_OPERATOR}
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
