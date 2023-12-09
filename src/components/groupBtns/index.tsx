import { View } from "react-native";

import Btn from "../btns";
import { styles } from "./styles";
import { PropsButtonSet } from "./types";
import { verifyTypeBtn } from "../../utils/functions";

const STYLE_GENERAL = styles.buttonSet1;

export const ButtonSet = ({
  typeBtn,
  sign,
  flexDirec = STYLE_GENERAL,
  setCurrentValue,
  currentValue,
}: PropsButtonSet) => {
  return (
    <View style={flexDirec}>
      {flexDirec != STYLE_GENERAL ? (
        <>
          <Btn
            text={sign[0]}
            onPress={() => setCurrentValue((prev: string) => prev + sign[0])}
            type={typeBtn}
          />
          <Btn
            text={sign[1]}
            onPress={() => setCurrentValue((prev: string) => prev + sign[1])}
            type={typeBtn}
          />
          <Btn
            text={sign[2]}
            onPress={() => setCurrentValue((prev: string) => prev + sign[2])}
            type={typeBtn}
          />
          <Btn
            text={sign[3]}
            onPress={() => setCurrentValue((prev: string) => prev + sign[3])}
            type={typeBtn}
          />
          <Btn
            text={sign[4]}
            onPress={() =>
              verifyTypeBtn({
                value: sign[4],
                typeBtn,
                setCurrentValue,
                currentValue,
              })
            }
            type={typeBtn}
          />
        </>
      ) : (
        <>
          <Btn
            text={sign[0]}
            onPress={() =>
              verifyTypeBtn({
                value: sign[0],
                typeBtn,
                setCurrentValue,
                currentValue,
              })
            }
            type={typeBtn}
          />
          <Btn
            text={sign[1]}
            onPress={() =>
              verifyTypeBtn({
                value: sign[1],
                typeBtn,
                setCurrentValue,
                currentValue,
              })
            }
            type={typeBtn}
          />
          <Btn
            text={sign[2]}
            onPress={() =>
              verifyTypeBtn({
                value: sign[2],
                typeBtn,
                setCurrentValue,
                currentValue,
              })
            }
            type={typeBtn}
          />
        </>
      )}
    </View>
  );
};
