import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer4 = ({ temperatureChange, propTop, propLeft }) => {
  const history1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.history1, history1Style]}>
      <Text style={[styles.boughtItemsAt, styles.chdTypo]}>
        Bought item(s) at the canteen
      </Text>
      <Text style={[styles.chd, styles.chdTypo]}>{temperatureChange}</Text>
      <Image
        style={styles.group21}
        contentFit="cover"
        source={require("../assets/group-2-1.png")}
      />
      <View style={styles.history1Child} />
    </View>
  );
};

const styles = StyleSheet.create({
  chdTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 13,
    fontSize: FontSize.size_xs,
    left: 37,
    position: "absolute",
  },
  boughtItemsAt: {
    top: 1,
  },
  chd: {
    top: 24,
  },
  group21: {
    top: 0,
    left: 0,
    width: 22,
    height: 39,
    position: "absolute",
  },
  history1Child: {
    top: 42,
    left: 35,
    backgroundColor: Color.colorGainsboro,
    width: 300,
    height: 1,
    position: "absolute",
  },
  history1: {
    top: 30,
    left: 15,
    width: 335,
    height: 43,
    position: "absolute",
  },
});

export default FormContainer4;
