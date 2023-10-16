import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import InvoiceContainer1 from "./InvoiceContainer1";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const TuitionFormContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tiffanyJaniceParent}>
      <Text style={[styles.tiffanyJanice, styles.dueFriday30Typo]}>
        TIFFANY JANICE
      </Text>
      <Pressable
        style={styles.invoice1}
        onPress={() => navigation.navigate("PaymentInvoiceDetails")}
      >
        <View style={styles.frame}>
          <Text style={[styles.dueFriday30, styles.rp43860000Clr]}>
            DUE Friday, 30 Oct 2023
          </Text>
          <Text style={[styles.newAcademicYear, styles.rp43860000Clr]}>
            New Academic year 2025 2026
          </Text>
        </View>
        <View style={styles.frame1}>
          <Text style={[styles.rp43860000, styles.unpaidTypo]}>
            Rp. 43,860,000
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
      </Pressable>
      <Pressable
        style={styles.invoice1}
      >
        <View style={styles.frame}>
          <Text style={[styles.dueFriday30, styles.rp43860000Clr]}>
            DUE Friday, 30 Oct 2023
          </Text>
          <Text style={[styles.newAcademicYear, styles.rp43860000Clr]}>
            New Academic year 2025 2026
          </Text>
        </View>
        <View style={styles.frame1}>
          <Text style={[styles.rp43860000, styles.unpaidTypo]}>
            Rp. 23,860,000
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
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  dueFriday30Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  rp43860000Clr: {
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
  tiffanyJanice: {
    color: Color.colorDarkslategray,
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
  },
  dueFriday30: {
    lineHeight: 13,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  newAcademicYear: {
    marginTop: 25,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
  },
  frame: {
    width: 233,
    height: 55,
    overflow: "hidden",
  },
  rp43860000: {
    color: Color.colorGray,
    textAlign: "left",
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
  invoice1: {
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
    height: 150,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_xl,
    marginTop: 10,
    width: 350,
  },
  tiffanyJaniceParent: {
    height: 337,
    width: 350,
  },
});

export default TuitionFormContainer;
