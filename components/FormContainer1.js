import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FormContainer1 = ({ username, chdvalue }) => {
  return (
    <View style={[styles.userCardContent, styles.frame1FlexBox]}>
      <View style={[styles.frame, styles.frameLayout]}>
        <View style={[styles.frame1, styles.frameLayout]}>
          <View style={styles.userInfo}>
            <Text style={styles.tiffanyJanice}>{username}</Text>
            <View style={styles.frame2}>
              <View style={[styles.chdParent, styles.chdParentFlexBox]}>
                <Text style={[styles.chd, styles.chdText]}>{chdvalue}</Text>
                <Text style={[styles.currrentBalance, styles.chdText]}>
                  | Currrent Balance
                </Text>
              </View>
              <Text
                style={[styles.clickTheCard, styles.chdText]}
              >{`>> Click the card to topup`}</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.wirelessIcon}
          contentFit="cover"
          source={require("../assets/wireless-icon.png")}
        />
      </View>
      <View style={[styles.chIconWrapper, styles.chdParentFlexBox]}>
        <Image
          style={styles.chIcon}
          contentFit="cover"
          source={require("../assets/ch-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1FlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  frameLayout: {
    height: 111,
    overflow: "hidden",
  },
  chdParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  chdText: {
    color: Color.colorGray_200,
    textAlign: "left",
    textTransform: "uppercase",
  },
  tiffanyJanice: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: -0.1,
  },
  chd: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
  },
  currrentBalance: {
    marginLeft: 10,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
  },
  chdParent: {
    height: 24,
    width: 246,
  },
  clickTheCard: {
    fontSize: FontSize.size_xs,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLightItalic,
    marginTop: -1,
    color: Color.colorGray_200,
    letterSpacing: -0.1,
  },
  frame2: {
    height: 41,
    marginTop: 40,
    width: 246,
    overflow: "hidden",
  },
  userInfo: {
    height: 104,
    width: 246,
  },
  frame1: {
    top: 0,
    left: 0,
    justifyContent: "flex-end",
    width: 246,
    overflow: "hidden",
    alignItems: "center",
    position: "absolute",
  },
  wirelessIcon: {
    height: "34.23%",
    width: "13.57%",
    top: "0%",
    right: "0%",
    bottom: "65.77%",
    left: "86.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.5,
    overflow: "hidden",
    position: "absolute",
  },
  frame: {
    overflow: "hidden",
    width: 280,
  },
  chIcon: {
    width: 35,
    height: 37,
    opacity: 0.7,
  },
  chIconWrapper: {
    alignSelf: "stretch",
    marginTop: 9,
    justifyContent: "flex-end",
  },
  userCardContent: {
    top: 40,
    left: 35,
    height: 157,
    justifyContent: "center",
    zIndex: 1,
    width: 280,
  },
});

export default FormContainer1;
