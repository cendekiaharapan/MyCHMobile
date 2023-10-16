import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import FormContainer4 from "./FormContainer4";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const DateFilterContainer = () => {
  return (
    <View style={styles.friday06Oct2023Parent}>
      <Text style={styles.friday06Oct}>Friday, 06 Oct 2023</Text>
      <View style={styles.topupConParent}>
        <Image
          style={styles.topupConIcon}
          contentFit="cover"
          source={require("../assets/topup-con.png")}
        />
        <Text style={[styles.boughtItemsAt, styles.chdTypo]}>
          Bought item(s) at the canteen
        </Text>
        <Text style={[styles.chd, styles.chdTypo]}>+20 CHD</Text>
      </View>
      <FormContainer4 temperatureChange="-20 CHD" />
    </View>
  );
};

const styles = StyleSheet.create({
  chdTypo: {
    lineHeight: 13,
    fontSize: FontSize.size_xs,
    left: 47,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  friday06Oct: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  topupConIcon: {
    top: 1,
    width: 42,
    height: 39,
    left: 0,
    position: "absolute",
  },
  boughtItemsAt: {
    top: 0,
    fontSize: FontSize.size_xs,
    left: 47,
  },
  chd: {
    top: 23,
  },
  topupConParent: {
    top: 93,
    left: 5,
    width: 232,
    height: 40,
    position: "absolute",
  },
  friday06Oct2023Parent: {
    top: 140,
    left: 20,
    width: 350,
    height: 133,
    position: "absolute",
  },
});

export default DateFilterContainer;
