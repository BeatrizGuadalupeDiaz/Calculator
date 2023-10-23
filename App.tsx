import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Btn, Display } from "./src/components";

const SET_VALUE = 1;
const MINIMUM_VALUE = 0;

export default function App() {
  const STYLE_01 = styles.buttonSet1;
  const STYLE_02 = styles.buttonSet2;
  const ONE = 1;
  const [counter, setCounter] = React.useState(0);

  const ButtonSet = ({ typeBtn, sign, flexDirec }: any) => {
    return (
      <View style={flexDirec}>
        {flexDirec === STYLE_02 ? (
          <>
            <Btn
              text={sign[0]}
              onPress={() => console.log(sign[0])}
              type={typeBtn}
            />
            <Btn
              text={sign[1]}
              onPress={() => console.log(sign[1])}
              type={typeBtn}
            />
            <Btn
              text={sign[2]}
              onPress={() => console.log(sign[2])}
              type={typeBtn}
            />
            <Btn
              text={sign[3]}
              onPress={() => console.log(sign[3])}
              type={typeBtn}
            />
            <Btn
              text={sign[4]}
              onPress={() => console.log(sign[4])}
              type={typeBtn}
            />
          </>
        ) : (
          <>
            <Btn
              text={sign[0]}
              onPress={() => console.log(sign[0])}
              type={typeBtn}
            />
            <Btn
              text={sign[1]}
              onPress={() => console.log(sign[1])}
              type={typeBtn}
            />
            <Btn
              text={sign[2]}
              onPress={() => console.log(sign[2])}
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
        <Display value={ONE} />
      </View>
      <View style={styles.bntsConteiner}>
        <View style={{ flex: 0.8 }}>
          <ButtonSet
            typeBtn={"tertiary"}
            sign={["AC", "+/-", "%"]}
            flexDirec={STYLE_01}
          />
          <ButtonSet
            typeBtn={"primary"}
            sign={[7, 8, 9]}
            flexDirec={STYLE_01}
          />
          <ButtonSet
            typeBtn={"primary"}
            sign={[4, 5, 6]}
            flexDirec={STYLE_01}
          />
          <ButtonSet
            typeBtn={"primary"}
            sign={[ONE, 2, 3]}
            flexDirec={STYLE_01}
          />
          <ButtonSet
            typeBtn={"primary"}
            sign={["00", 0, "."]}
            flexDirec={STYLE_01}
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <ButtonSet
            typeBtn={"secondary"}
            sign={["/", "*", "-", "+", "="]}
            flexDirec={STYLE_02}
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
  },
  buttonSet1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonSet2: {
    flex: 1,
    justifyContent: "space-around",
  },
});
