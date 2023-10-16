import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AlertDialog1 = () => {
  return (
    <View style={styles.alertdialog}>
      <View style={[styles.titleWrapper, styles.modalFooterFlexBox]}>
        <Text style={styles.title}>Delete Permission Record</Text>
      </View>
      <View style={styles.divider}>
        <View style={styles.divider1} />
      </View>
      <View style={[styles.supportingText, styles.modalFooterFlexBox]}>
        <Text style={styles.text}>
          Are you sure you want to delete this record?
        </Text>
      </View>
      <View style={styles.divider}>
        <View style={styles.divider1} />
      </View>
      <View style={[styles.modalFooter, styles.modalFooterFlexBox]}>
        <View style={[styles.buttonOutline, styles.buttonFlexBox]}>
          <Text style={[styles.textLabel, styles.textTypo]}>Cancel</Text>
          <View style={styles.lightadd}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </View>
        </View>
        <View style={[styles.buttonSolid, styles.buttonFlexBox]}>
          <Text style={[styles.textLabel1, styles.textTypo]}>Delete</Text>
          <View style={styles.lightadd}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalFooterFlexBox: {
    padding: Padding.p_base,
    backgroundColor: Color.textText50,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_xs,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: Border.br_9xs,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.textMediumSm14_size,
    textAlign: "left",
  },
  title: {
    fontSize: FontSize.headingMd20_size,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: FontFamily.headingMd20,
    textAlign: "left",
    flex: 1,
    color: Color.textText900,
  },
  titleWrapper: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    alignItems: "center",
    padding: Padding.p_base,
    backgroundColor: Color.textText50,
  },
  divider1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.mutedMuted300,
  },
  divider: {
    height: 1,
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 21,
    fontSize: FontSize.textMediumSm14_size,
    textAlign: "left",
    color: Color.textText900,
    flex: 1,
  },
  supportingText: {
    padding: Padding.p_base,
    backgroundColor: Color.textText50,
  },
  textLabel: {
    color: Color.textText900,
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
  },
  vectorIcon: {
    width: 12,
    height: 12,
  },
  lightadd: {
    padding: Padding.p_11xs,
    display: "none",
    marginLeft: 4,
    flexDirection: "row",
  },
  buttonOutline: {
    borderStyle: "solid",
    borderColor: Color.mutedMuted300,
    borderWidth: 1,
  },
  textLabel1: {
    color: Color.textText50,
  },
  buttonSolid: {
    backgroundColor: Color.errorError700,
    marginLeft: 12,
  },
  modalFooter: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    alignItems: "center",
    padding: Padding.p_base,
    backgroundColor: Color.textText50,
  },
  alertdialog: {
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1.41,
    elevation: 1.41,
    shadowOpacity: 1,
    width: 330,
  },
});

export default AlertDialog1;
