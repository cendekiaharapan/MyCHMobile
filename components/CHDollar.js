import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CHDollar = ({ onClose }) => {
  return (
    <View style={styles.chDollar}>
      <View style={styles.mensahWrapper}>
        <View style={[styles.mensah, styles.cardPosition]}>
          <View style={[styles.card, styles.cardPosition]} />
          <Text style={styles.mintaDonor}>CH DOLLAR BALANCE</Text>
          <Image
            style={styles.image9Icon}
            contentFit="cover"
            source={require("../assets/images/image-9.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 13,
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  card: {
    height: "99.67%",
    bottom: "0.33%",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 39.56,
    elevation: 39.56,
    backgroundColor: Color.colorWhite,
  },
  mintaDonor: {
    height: "9.72%",
    width: "95.06%",
    top: "76.44%",
    left: "2.14%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorMidnightblue,
    textAlign: "center",
    position: "absolute",
  },
  image9Icon: {
    top: 104,
    left: 11,
    width: 243,
    height: 59,
    position: "absolute",
  },
  mensah: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 1.32,
    elevation: 1.32,
    bottom: "0%",
    height: "100%",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 13,
  },
  mensahWrapper: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  chDollar: {
    width: 254,
    height: 277,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default CHDollar;
