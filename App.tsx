import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StyleSheetProperties,
} from "react-native";
import { Btn, Display } from "./src/components";
import { btnType } from "./src/components/btns/type";
import { BasicOperation } from "./src/utils/basicOperations";
const MINIMUM_VALUE = 0;
type value = string | number;
export default function App() {
  const STYLE_GENERAL = styles.buttonSet1;
  const STYLE_OPERATOR = styles.buttonSet2;
  const [currentValue, setCurrentValue] = React.useState("");

  const handleSetNumber = (number: value) => {
    setCurrentValue((prev) => prev + number.toString());
  };
  const handleMetod = (metod: value) => {
    const useMetod: any = {
      AC: () => setCurrentValue(""),
      DEL: () => setCurrentValue((prev) => prev.substring(0, prev.length - 1)),
      "%": () => setCurrentValue((prev) => (Number(prev) / 100).toString()),
    };
    useMetod[metod]();
  };
  const handleOperator = (operator: value) => {
    const valorInicial = 0;
    if (currentValue.includes("+")) {
      const splitNumbers = currentValue.split("+");
      const reducee = splitNumbers
        .map((number) => Number(number))
        .reduce((acc, current) => acc + current, valorInicial);
      setCurrentValue(reducee.toString());
    }
    if (currentValue.includes("-")) {
      const splitNumbers = currentValue.split("-");
      const number = splitNumbers
        .map((number) => Number(number))
        .reduce((acc, current) => acc - current);
      setCurrentValue(number.toString());
    }
    if(currentValue.includes("*")){
      console.log("es un *")
    }
    if(currentValue.includes("/")){
      console.log("es un /")
    }
  };
  const verifyTypeBtn = (value: value, typebtn: string) => {
    const verify: any = {
      primary: () => handleSetNumber(value),
      secondary: () => handleOperator(value),
      tertiary: () => handleMetod(value),
    };
    verify[typebtn]();
  };
  interface PropsButtonSet {
    typeBtn: btnType;
    sign: string[] | number[];
    flexDirec?: {};
  }
  const ButtonSet = ({
    typeBtn,
    sign,
    flexDirec = STYLE_GENERAL,
  }: PropsButtonSet) => {
    return (
      <View style={flexDirec}>
        {flexDirec === STYLE_OPERATOR ? (
          <>
            <Btn
              text={sign[0]}
              onPress={() => setCurrentValue((prev) => prev + sign[0])}
              type={typeBtn}
            />
            <Btn
              text={sign[1]}
              onPress={() => setCurrentValue((prev) => prev + sign[1])}
              type={typeBtn}
            />
            <Btn
              text={sign[2]}
              onPress={() => setCurrentValue((prev) => prev + sign[2])}
              type={typeBtn}
            />
            <Btn
              text={sign[3]}
              onPress={() => setCurrentValue((prev) => prev + sign[3])}
              type={typeBtn}
            />
            <Btn
              text={sign[4]}
              onPress={() => verifyTypeBtn(sign[4], typeBtn)}
              type={typeBtn}
            />
          </>
        ) : (
          <>
            <Btn
              text={sign[0]}
              onPress={() => verifyTypeBtn(sign[0], typeBtn)}
              type={typeBtn}
            />
            <Btn
              text={sign[1]}
              onPress={() => verifyTypeBtn(sign[1], typeBtn)}
              type={typeBtn}
            />
            <Btn
              text={sign[2]}
              onPress={() => verifyTypeBtn(sign[2], typeBtn)}
              type={typeBtn}
            />
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.diplayConteiner}>
        <Display value={currentValue} />
      </View>
      <View style={styles.bntsConteiner}>
        <View style={{ flex: 0.8 }}>
          <ButtonSet typeBtn={"tertiary"} sign={["AC", "DEL", "%"]} />
          <ButtonSet typeBtn={"primary"} sign={[7, 8, 9]} />
          <ButtonSet typeBtn={"primary"} sign={[4, 5, 6]} />
          <ButtonSet typeBtn={"primary"} sign={[1, 2, 3]} />
          <ButtonSet typeBtn={"primary"} sign={["00", "0", "."]} />
        </View>
        <View style={{ flex: 0.2 }}>
          <ButtonSet
            typeBtn={"secondary"}
            sign={["/", "*", "-", "+", "="]}
            flexDirec={STYLE_OPERATOR}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  diplayConteiner: {
    flex: 0.4,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  bntsConteiner: {
    flex: 0.6,
    flexDirection: "row",
    padding: 10,
  },
  buttonSet1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonSet2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
