import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InvoiceContainer = ({
  personName,
  tuitionDescription,
  price,
  propWidth,
}) => {
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={styles.invoice2}>
      <View style={[styles.frame, frameStyle]}>
        <Text style={[styles.tiffanyJanice, styles.tuitionFlexBox]}>
          {personName}
        </Text>
        <Text style={[styles.tuition, styles.tuitionFlexBox]}>
          {tuitionDescription}
        </Text>
      </View>
      <View style={styles.frame1}>
        <Text style={[styles.rp22356000, styles.paidTypo]}>{price}</Text>
        <View style={styles.downloadButton}>
          <Text style={[styles.paid, styles.paidTypo]}>PAID</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tuitionFlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  paidTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    fontSize: FontSize.size_xs,
  },
  tiffanyJanice: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    color: Color.colorGray,
  },
  tuition: {
    marginTop: 21,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    color: Color.colorGray,
  },
  frame: {
    width: 116,
    height: 55,
    overflow: "hidden",
  },
  rp22356000: {
    textAlign: "left",
    color: Color.colorGray,
  },
  paid: {
    color: Color.colorWhite,
    textAlign: "center",
    width: 64,
  },
  downloadButton: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorLimegreen,
    height: 28,
    alignItems: "flex-end",
    paddingHorizontal: 122,
    paddingVertical: Padding.p_6xs,
    marginTop: 12,
    width: 310,
  },
  frame1: {
    height: 53,
    marginTop: 2,
    width: 310,
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
    marginTop: 15,
  },
});

export default InvoiceContainer;
