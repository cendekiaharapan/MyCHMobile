import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import TopUpForm from "./TopUpForm";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IDREquivalent = () => {
  return (
    <View style={[styles.idrEquivalent, styles.framePosition]}>
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={styles.idrEquivalent1}>IDR Equivalent:</Text>
      </View>
      <TopUpForm
        inputFieldPosition="absolute"
        inputFieldTop={25}
        inputFieldLeft={0}
        inputFieldWidth={350}
        inputFieldBackgroundColor="#f0f0f0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 350,
    left: 0,
    position: "absolute",
  },
  idrEquivalent1: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame: {
    top: 0,
    overflow: "hidden",
    justifyContent: "center",
  },
  idrEquivalent: {
    top: 178,
    height: 59,
  },
});

export default IDREquivalent;
