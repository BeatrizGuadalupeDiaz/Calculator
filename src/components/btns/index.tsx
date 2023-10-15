import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { PropsBtn } from "./type";
import { btnStyles, textStyles } from "./styles";
const Btn = ({
  onPress,
  btnStyle,
  text,
  type,
  isLoading,
  textStyle,
}: PropsBtn) => {
  const handleOnPress = () => {
    if (!isLoading) {
      onPress && onPress();
    }
  };
  return (
    <View
      style={{ width: "auto", justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity
        onPress={handleOnPress}
        style={{ ...btnStyle, ...btnStyles[type], ...btnStyles.general }}
      >
        <Text
          style={{ ...textStyle, ...textStyles[type], ...textStyles.general }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;
