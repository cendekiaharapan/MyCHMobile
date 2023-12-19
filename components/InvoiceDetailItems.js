import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const InvoiceDetailItems = ({ itemName, rate, qty }) => {
  return (
    <View style={styles.itemList}>
      <Text style={[styles.itemName1, styles.rate1Typo]}>{itemName}</Text>
      <Text style={styles.qty1}>{qty}</Text>
      <Text style={[styles.rate1, styles.rate1Typo]}>Rp. {rate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rate1Typo: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    fontSize: FontSize.size_xs,
    top: 10,
    position: "absolute",
    width: "40%"
  },
  itemName1: {
    left: 10,
  },
  rate1: {
    left: '72%',
  },
  qty1: {
    left: '50%',
    textAlign: "center",
    width: 28,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    fontSize: FontSize.size_xs,
    top: 10,
    position: "absolute",
  },
  itemList: {
    marginTop: 5,
    top: 375,
    left: 20,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorFloralwhite,
    width: '90%',
    height: '6%',
  },
});

export default InvoiceDetailItems;
