import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InvoiceContainer from "./InvoiceContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AcademicYearForm1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Pressable
        style={styles.invoice1}
        onPress={() => navigation.navigate("PaymentInvoiceDetailsPaid")}
      >
        <View style={[styles.frame1, styles.frameLayout]}>
          <Text style={[styles.tiffanyJanice, styles.rp43860000FlexBox]}>
            TIFFANY JANICE
          </Text>
          <View style={[styles.frame2, styles.frameLayout]}>
            <Text style={[styles.tiffanyJanice, styles.rp43860000FlexBox]}>
              New Academic year 2025 2026
            </Text>
            <Text style={[styles.rp43860000, styles.paidTypo]}>
              Rp. 43,860,000
            </Text>
          </View>
        </View>
        <View style={styles.downloadButton}>
          <Text style={[styles.paid, styles.paidTypo]}>PAID</Text>
        </View>
      </Pressable>
      <InvoiceContainer
        personName="TIFFANY JANICE"
        tuitionDescription="Tuition"
        price="Rp. 22,356,000"
      />
      <InvoiceContainer
        personName="TIMOTHY JACOB"
        tuitionDescription="New Academic year 2025 2026"
        price="Rp. 23,860,000"
        propWidth={233}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 233,
    overflow: "hidden",
  },
  rp43860000FlexBox: {
    textAlign: "left",
    color: Color.colorGray,
  },
  paidTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 13,
    fontSize: FontSize.size_xs,
  },
  tiffanyJanice: {
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  rp43860000: {
    marginTop: 2,
    textAlign: "left",
    color: Color.colorGray,
  },
  frame2: {
    height: 32,
    marginTop: 21,
  },
  frame1: {
    height: 70,
  },
  paid: {
    color: Color.colorWhite,
    textAlign: "center",
    width: 64,
  },
  downloadButton: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorLimegreen,
    width: 310,
    height: 28,
    alignItems: "flex-end",
    paddingHorizontal: 122,
    paddingVertical: Padding.p_6xs,
    marginTop: 12,
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
    width: 350,
  },
  frame: {
    height: 480,
    alignItems: "center",
    marginTop: 20,
    overflow: "hidden",
    width: 350,
  },
});

export default AcademicYearForm1;
