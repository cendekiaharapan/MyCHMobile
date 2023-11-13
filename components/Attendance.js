import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Attendance = ({ onClose }) => {
  return (
    <View style={styles.attendance}>
      <View style={styles.mensahParent}>
        <View style={styles.mensah}>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/images/ellipse-91.png")}
            />
            <Text style={styles.text}>100%</Text>
          </View>
          <Text style={styles.mintaDonor}>ATTENDANCE</Text>
        </View>
        <View style={styles.maskGroup}>
          <View style={styles.frameParent}>
            <View style={styles.frame}>
              <View style={styles.frameItem} />
              <Text style={[styles.mintaDonor1, styles.mintaTypo]}>
                0 Absent
              </Text>
            </View>
            <View style={[styles.frame1, styles.frameFlexBox]}>
              <View style={styles.frameInner} />
              <Text style={[styles.mintaDonor2, styles.mintaTypo]}>
                18 Present
              </Text>
            </View>
            <View style={[styles.frame2, styles.frameFlexBox]}>
              <Image
                style={styles.rectangleIcon}
                contentFit="cover"
                source={require("../assets/images/rectangle-367.png")}
              />
              <Text style={[styles.mintaDonor1, styles.mintaTypo]}>
                2 Excused
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mintaTypo: {
    marginLeft: 8,
    width: 72,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorMidnightblue,
  },
  frameFlexBox: {
    marginTop: 4,
    overflow: "hidden",
    width: 120,
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild: {
    borderRadius: Border.br_21xl,
    height: 120,
    zIndex: 0,
    width: 120,
  },
  text: {
    position: "absolute",
    top: 46,
    left: 28,
    fontSize: 25,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    zIndex: 1,
    textAlign: "center",
    color: Color.colorMidnightblue,
  },
  ellipseParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mintaDonor: {
    fontSize: FontSize.size_mini,
    marginTop: 12,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorMidnightblue,
  },
  mensah: {
    paddingLeft: 50,
    paddingTop: 23,
    paddingRight: 54,
    paddingBottom: 28,
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 35.6,
    shadowRadius: 35.6,
    shadowOffset: {
      width: 0,
      height: 5.93411922454834,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 12,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameItem: {
    backgroundColor: Color.colorDarkslateblue,
    width: 40,
    height: 17,
  },
  mintaDonor1: {
    height: 14,
  },
  frame: {
    overflow: "hidden",
    height: 17,
    width: 120,
    flexDirection: "row",
    alignItems: "center",
  },
  frameInner: {
    backgroundColor: Color.colorTomato,
    height: 18,
    width: 40,
  },
  mintaDonor2: {
    height: 12,
  },
  frame1: {
    height: 18,
  },
  rectangleIcon: {
    width: 40,
    height: 17,
  },
  frame2: {
    height: 17,
  },
  frameParent: {
    alignItems: "center",
  },
  maskGroup: {
    width: 154,
    paddingHorizontal: 22,
    paddingVertical: 15,
    marginTop: 30,
    shadowOpacity: 1,
    elevation: 35.6,
    shadowRadius: 35.6,
    shadowOffset: {
      width: 0,
      height: 5.93411922454834,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 12,
  },
  mensahParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  attendance: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
  },
});

export default Attendance;
