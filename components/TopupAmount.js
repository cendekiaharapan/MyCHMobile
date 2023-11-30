import * as React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TopupAmount = ({ onAmountChange }) => {
  const [topupAmount, setTopupAmount] = React.useState("");

  const handleAmountChange = (text) => {
    // Pass the updated topupAmount value to the parent component
    onAmountChange(text);
  };

  return (
    <View style={[styles.topupAmount, styles.framePosition]}>
      <View style={[styles.frame, styles.framePosition]}>
        <Text style={styles.topUpAmountChd}>Top-up Amount (CHD):</Text>
      </View>
      <TextInput
        style={styles.inputField}
        onChangeText={handleAmountChange}
        keyboardType="numeric"
        placeholder="Enter CHD amount"
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
  inputField: {
    position: "absolute",
    top: 25,
    left: 0,
    width: 350,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
});

export default TopupAmount;
