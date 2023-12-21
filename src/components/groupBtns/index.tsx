import { View } from "react-native";

import Btn from "../btns";
import { styles } from "./styles";
import { PropsButtonSet } from "./types";
import { verifyTypeBtn } from "../../utils/functions";

const STYLE_GENERAL = styles.buttonSet1;

export const ButtonSet = ({
  typeBtn,
  signs,
  flexDirec = STYLE_GENERAL,
  setCurrentValue,
  currentValue,
}: PropsButtonSet) => {
  return (
    <View style={flexDirec}>
      {flexDirec != STYLE_GENERAL ? (
        <>
          {signs.map((sign, index) => {
            if (index === 4) {
              return (
                <Btn
                  key={index}
                  text={sign}
                  onPress={() =>
                    verifyTypeBtn({
                      value: sign,
                      typeBtn,
                      setCurrentValue,
                      currentValue,
                    })
                  }
                  type={typeBtn}
                />
              );
            }
            return (
              /* checar las verificaciones del boton */
              <Btn
                key={index}
                text={sign}
                onPress={() => setCurrentValue((prev: string) => prev + sign)}
                type={typeBtn}
              />
            );
          })}
        </>
      ) : (
        <>
          {signs.map((sign, index) => (
            <Btn
              key={index}
              text={sign}
              onPress={() =>
                verifyTypeBtn({
                  value: sign,
                  typeBtn,
                  setCurrentValue,
                  currentValue,
                })
              }
              type={typeBtn}
            />
          ))}
        </>
      )}
    </View>
  );
};
