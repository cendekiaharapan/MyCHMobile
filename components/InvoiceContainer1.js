import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InvoiceContainer1 = ({
  tuitionDescription,
  tuitionAmount,
  propWidth,
}) => {
  const frame1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.invoice2}>
      <View style={[styles.frame, frame1Style]}>
        <Text style={[styles.dueFriday30, styles.tuitionClr]}>
          DUE Friday, 30 Oct 2023
        </Text>
        <Text style={[styles.tuition, styles.tuitionClr]}>
          {tuitionDescription}
        </Text>
      </View>
      <View style={styles.frame1}>
        <Text style={[styles.rp22356000, styles.unpaidTypo]}>
          {tuitionAmount}
        </Text>
        <View style={styles.frame2}>
          <View style={[styles.downloadButton, styles.downloadLayout]}>
            <Image
              style={styles.invoiceLogoIcon}
              contentFit="cover"
              source={require("../assets/invoice-logo.png")}
            />
            <Text style={[styles.payNow, styles.payNowLayout]}>PAY NOW</Text>
          </View>
          <View style={[styles.downloadButton1, styles.downloadLayout]}>
            <Text style={[styles.unpaid, styles.unpaidTypo]}>UNPAID</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tuitionClr: {
    color: Color.colorGray,
    textAlign: "left",
  },
  unpaidTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    fontSize: FontSize.size_xs,
  },
  downloadLayout: {
    paddingVertical: Padding.p_6xs,
    borderRadius: Border.br_6xs,
    alignItems: "center",
    height: 28,
  },
  payNowLayout: {
    lineHeight: 13,
    fontSize: FontSize.size_xs,
  },
  dueFriday30: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorGray,
    lineHeight: 13,
    fontSize: FontSize.size_xs,
  },
  tuition: {
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    marginTop: 25,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorGray,
  },
  frame: {
    width: 140,
    height: 55,
    overflow: "hidden",
  },
  rp22356000: {
    textAlign: "left",
    color: Color.colorGray,
  },
  invoiceLogoIcon: {
    width: 20,
    height: 15,
  },
  payNow: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorTomato_100,
    marginLeft: 12,
    textAlign: "left",
  },
  downloadButton: {
    backgroundColor: Color.colorWhite,
    width: 118,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    paddingVertical: Padding.p_6xs,
    borderRadius: Border.br_6xs,
  },
  unpaid: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  downloadButton1: {
    backgroundColor: Color.colorTomato_100,
    width: 130,
    paddingHorizontal: 0,
    marginLeft: 15,
  },
  frame2: {
    marginTop: 12,
    alignItems: "center",
    height: 28,
    flexDirection: "row",
    width: 263,
    overflow: "hidden",
  },
  frame1: {
    height: 53,
    marginTop: 2,
    width: 263,
    overflow: "hidden",
  },
  invoice2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 350,
    height: 150,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    marginTop: 10,
  },
});

export default InvoiceContainer1;
