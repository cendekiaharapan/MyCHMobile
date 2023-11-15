import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Balance = ({ chdBalance }) => {
  return (
    <View style={[styles.balance, styles.framePosition]}>
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={styles.balances}>Balances:</Text>
        <View style={styles.balanceForm}>
          <Text style={styles.balanceText}>{chdBalance}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 350,
    left: 0,
    position: "absolute",
  },
  balances: {
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
  balance: {
    top: 20,
    height: 59,
  },
  balanceForm: {
    borderWidth: 1,
    borderColor: Color.colorGray,
    borderRadius: 8,
    padding: 10,
  },
  balanceText: {
    fontSize: FontSize.size_lg,
    fontWeight: "bold",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
  },
});

export default Balance;