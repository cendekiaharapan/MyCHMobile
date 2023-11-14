import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TopUpForm = ({
  inputFieldPosition,
  inputFieldTop,
  inputFieldLeft,
  inputFieldWidth,
  inputFieldBackgroundColor,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", inputFieldPosition),
      ...getStyleValue("top", inputFieldTop),
      ...getStyleValue("left", inputFieldLeft),
      ...getStyleValue("width", inputFieldWidth),
      ...getStyleValue("backgroundColor", inputFieldBackgroundColor),
    };
  }, [
    inputFieldPosition,
    inputFieldTop,
    inputFieldLeft,
    inputFieldWidth,
    inputFieldBackgroundColor,
  ]);

  return (
    <View style={[styles.inputField, inputFieldStyle]}>
      <View style={styles.text}>
        <Text style={styles.placeholder}>0</Text>
        <View style={styles.cursor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textText900,
    textAlign: "left",
    flex: 1,
  },
  cursor: {
    backgroundColor: Color.primaryPrimary700,
    width: 1,
    height: 18,
    display: "none",
    marginLeft: 8,
  },
  text: {
    width: 297,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  inputField: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.singleToneWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 350,
    height: 34,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
});

export default TopUpForm;
