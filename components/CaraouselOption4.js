import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const CaraouselOption4 = ({ onClose }) => {
  return (
    <View style={styles.caraouselOption4}>
      <View style={[styles.newsFrame, styles.frameFlexBox1]}>
        <View style={[styles.frameParent, styles.frameFlexBox1]}>
          <View style={[styles.frame, styles.frameFlexBox]}>
            <Text style={styles.pujiTuhan}>Puji Tuhan</Text>
          </View>
          <View style={[styles.frame1, styles.frameSpaceBlock]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/images/rectangle-162.png")}
            />
          </View>
          <View style={[styles.frame2, styles.frameSpaceBlock]}>
            <View style={[styles.frame3, styles.frameFlexBox]}>
              <Text style={styles.topAchieverOf}>
                Top Achiever of grade eleven online in the fourth week! Keep up
                the good work everyone! Stay tuned for next week's ranking
              </Text>
            </View>
            <View style={styles.frame4}>
              <View style={styles.frame5}>
                <Text style={styles.newsTypo}>News</Text>
                <Text
                  style={[styles.aug2023, styles.newsTypo]}
                >{`13, Aug 2023 `}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox1: {
    flex: 1,
    alignSelf: "stretch",
  },
  frameFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameSpaceBlock: {
    marginTop: 18,
    overflow: "hidden",
  },
  newsTypo: {
    opacity: 0.4,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 17,
    color: Color.amberBlack,
  },
  pujiTuhan: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    color: Color.amberBlack,
    flex: 1,
    alignSelf: "stretch",
  },
  frame: {
    overflow: "hidden",
    flex: 1,
    alignSelf: "stretch",
  },
  frameChild: {
    borderRadius: 3,
    width: 170,
    height: 330,
  },
  frame1: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  topAchieverOf: {
    fontSize: FontSize.size_mid,
    width: 273,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 20,
    color: Color.amberBlack,
  },
  frame3: {
    overflow: "hidden",
  },
  aug2023: {
    width: 118,
    marginLeft: 10,
  },
  frame5: {
    flexDirection: "row",
    overflow: "hidden",
  },
  frame4: {
    marginTop: 6,
    overflow: "hidden",
    justifyContent: "center",
  },
  frame2: {
    alignItems: "center",
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  newsFrame: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  caraouselOption4: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    width: 300,
    height: 584,
    padding: Padding.p_3xs,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default CaraouselOption4;
