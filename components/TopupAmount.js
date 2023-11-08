import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import TopUpForm from "./TopUpForm";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TopupAmount = () => {
  return (
    <View style={[styles.topupAmount, styles.framePosition]}>
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={styles.topUpAmountChd}>Top-up Amount (CHD):</Text>
      </View>
      <TopUpForm
        inputFieldPosition="absolute"
        inputFieldTop={25}
        inputFieldLeft={0}
        inputFieldWidth={350}
        inputFieldBackgroundColor="#fff"
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
  topUpAmountChd: {
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
  topupAmount: {
    top: 99,
    height: 59,
  },
});

export default TopupAmount;
