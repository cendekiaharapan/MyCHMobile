import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const PopOver4 = () => {
  return (
    <View style={styles.popOver}>
      <Image
        style={styles.popOverChild}
        contentFit="cover"
        source={require("../assets/rectangle-673.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.modalTitleBarWrapper}>
          <View style={styles.modalTitleBar}>
            <View style={styles.line} />
            <View style={styles.lightcheckCircleParent}>
              <Image
                style={styles.lightcheckCircleIcon}
                contentFit="cover"
                source={require("../assets/lightcheck-circle.png")}
              />
              <Text style={[styles.title, styles.textFlexBox]}>
                Save Successfull
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.supportingText, styles.buttonSolidFlexBox]}>
          <Text style={[styles.text, styles.textLayout]}>
            Save History Chat Changes Successfull
          </Text>
        </View>
        <View style={styles.modalFooter}>
          <View style={[styles.buttonSolid, styles.buttonSolidFlexBox]}>
            <Text style={[styles.textLabel, styles.textLayout]}>Alright</Text>
            <View style={styles.add}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector3.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.textText900,
  },
  buttonSolidFlexBox: {
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  textLayout: {
    lineHeight: 21,
    fontSize: FontSize.textMediumSm14_size,
  },
  popOverChild: {
    width: 20,
    height: 10,
    display: "none",
  },
  line: {
    top: 69,
    right: 0,
    left: 0,
    backgroundColor: Color.lowContrastGray,
    height: 1,
    position: "absolute",
    display: "none",
  },
  lightcheckCircleIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.headingMd20_size,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.headingMd20,
    marginTop: 16,
  },
  lightcheckCircleParent: {
    marginLeft: -86.5,
    top: 20,
    left: "50%",
    position: "absolute",
    alignItems: "center",
  },
  modalTitleBar: {
    height: 113,
    flex: 1,
    backgroundColor: Color.textText50,
  },
  modalTitleBarWrapper: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.textText50,
    alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    fontFamily: FontFamily.textRegularSm14,
    textAlign: "center",
    color: Color.textText900,
    flex: 1,
  },
  supportingText: {
    paddingBottom: Padding.p_5xs,
    backgroundColor: Color.textText50,
    alignSelf: "stretch",
  },
  textLabel: {
    fontWeight: "500",
    fontFamily: FontFamily.textMediumSm14,
    color: Color.textText50,
    textAlign: "left",
  },
  vectorIcon: {
    width: 12,
    height: 12,
  },
  add: {
    padding: Padding.p_11xs,
    marginLeft: 4,
    flexDirection: "row",
    display: "none",
  },
  buttonSolid: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.successSuccess700,
    paddingVertical: Padding.p_3xs,
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
  },
  modalFooter: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    backgroundColor: Color.textText50,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
  },
  popOver: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1.41,
    elevation: 1.41,
    shadowOpacity: 1,
    width: 330,
    alignItems: "center",
    borderRadius: Border.br_5xs,
  },
});

export default PopOver4;
