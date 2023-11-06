import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const AverageDailyScore = ({ onClose }) => {
  return (
    <View style={[styles.averageDailyScore, styles.image13IconLayout]}>
      <View style={styles.mensahParent}>
        <View style={[styles.mensah, styles.cardPosition]}>
          <View style={[styles.card, styles.cardPosition]} />
          <Text style={styles.mintaDonor}>AVERAGE DAILY SCORE</Text>
        </View>
        <Image
          style={[styles.image13Icon, styles.image13IconLayout]}
          contentFit="cover"
          source={require("../assets/images/image-13.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image13IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  card: {
    height: "99.67%",
    bottom: "0.33%",
    borderRadius: 12,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 35.6,
    elevation: 35.6,
  },
  mintaDonor: {
    height: "9.55%",
    width: "67.82%",
    top: "84.92%",
    left: "16.17%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorMidnightblue,
    textAlign: "center",
    position: "absolute",
  },
  mensah: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 1.19,
    elevation: 1.19,
    bottom: "0%",
    height: "100%",
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  image13Icon: {
    height: "69.58%",
    width: "84.31%",
    top: "6.47%",
    right: "7.84%",
    bottom: "23.95%",
    left: "7.84%",
    position: "absolute",
  },
  mensahParent: {
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  averageDailyScore: {
    backgroundColor: Color.colorGray_300,
    width: 334,
    height: 252,
  },
});

export default AverageDailyScore;
