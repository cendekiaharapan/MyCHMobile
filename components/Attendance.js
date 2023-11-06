import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Attendance = ({ onClose }) => {
  return (
    <View style={[styles.attendance, styles.attendanceLayout]}>
      <View style={[styles.mensah, styles.cardShadowBox]}>
        <View style={[styles.card, styles.cardShadowBox]} />
        <Text style={styles.mintaDonor}>ATTENDANCE</Text>
        <Image
          style={[styles.image1Icon, styles.attendanceLayout]}
          contentFit="cover"
          source={require("../assets/images/image-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  attendanceLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  card: {
    height: "99.67%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0.33%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 35.6,
    elevation: 35.6,
  },
  mintaDonor: {
    height: "9.55%",
    width: "67.82%",
    top: "79.62%",
    left: "16.47%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorMidnightblue,
    textAlign: "center",
    position: "absolute",
  },
  image1Icon: {
    height: "60.56%",
    width: "69.93%",
    top: "12.94%",
    right: "15.69%",
    bottom: "26.5%",
    left: "14.38%",
    position: "absolute",
  },
  mensah: {
    top: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 1.19,
    elevation: 1.19,
    height: 213,
    width: 346,
  },
  attendance: {
    backgroundColor: Color.colorGray_300,
    height: 213,
    width: 346,
  },
});

export default Attendance;
