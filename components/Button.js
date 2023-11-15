// Button.js
import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Button = ({ buttonType, actionButtonText, propMarginTop, onButtonPress }) => {
  const getStyleValue = (key, value) => {
    if (value === undefined) return;
    return { [key]: value === "unset" ? undefined : value };
  };

  const buttonStyles = {
    1: styles.button1,
    2: styles.button2,
    3: styles.button3,
  };

  const textStyle = {
    1: styles.payNow,
    2: styles.history,
    3: styles.paid, // Change to the appropriate text style for Button3
  };

  const buttonContainerStyles = getStyleValue("marginTop", propMarginTop);

  console.log(actionButtonText);
  return (
    <Pressable
      style={[buttonStyles[buttonType], buttonContainerStyles]}
      onPress={onButtonPress}
    >
      <Text         
      style={{
          fontFamily: FontFamily.poppinsLight,
          fontWeight: "300",
          color: "#a6a6a6",
          fontSize: FontSize.textRegularXs12_size,
          textAlign: 'center'
        }}>
          {actionButtonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  payNow: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.singleToneWhite,
    textAlign: "center",
  },
  history: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorTomato_200,
    textAlign: "center",
  },
  paid: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.singleToneWhite,
    textAlign: "center",
  },
  
  button1: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorTomato_200,
    width: 349,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.singleToneWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorTomato_200,
    borderWidth: 1,
    width: 349,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  button3: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLimegreen,
    width: 349,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  
});

export default Button;
