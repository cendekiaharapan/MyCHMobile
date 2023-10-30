import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import InvoiceDetailItems from "../components/InvoiceDetailItems";
import Button from "../components/Button";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PaymentInvoiceDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentInvoiceDetails}>
        <View style={styles.header}>
      <Header
        invoiceTitle="INVOICE DETAILS"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        invoicesAlignItems="flex-start"
        invoicesWidth="unset"
        onBackButtonPress={() => navigation.navigate("PaymentInvoice")}
      />
    </View>
      <View style={[styles.studentName, styles.dateLayout]}>
        <Text style={[styles.studentName1, styles.totalFlexBox]}>
          Student Name
        </Text>
        <Text style={[styles.textStudentName, styles.totalFlexBox]}>
          Text_studentName
        </Text>
      </View>
      <View style={[styles.description, styles.dateLayout]}>
        <Text style={[styles.studentName1, styles.totalFlexBox]}>
          Description
        </Text>
        <Text style={[styles.textStudentName, styles.totalFlexBox]}>
          Text_description
        </Text>
      </View>
      <View style={[styles.date, styles.dateLayout]}>
        <Text style={[styles.studentName1, styles.totalFlexBox]}>Date</Text>
        <Text style={[styles.textStudentName, styles.totalFlexBox]}>
          Text_date
        </Text>
      </View>
      <View style={[styles.dueDate, styles.dateLayout]}>
        <Text style={[styles.studentName1, styles.totalFlexBox]}>Due Date</Text>
        <Text style={[styles.textStudentName, styles.totalFlexBox]}>
          Text_due_date
        </Text>
      </View>
      <View style={[styles.itemListTitles, styles.dateLayout]}>
        <Text style={[styles.itemsName, styles.qtyTypo]}>Item Names</Text>
        <Text style={[styles.qty, styles.qtyTypo]}>Qty</Text>
        <Text style={[styles.rateRp, styles.qtyTypo]}>Rate (Rp)</Text>
      </View>

      <InvoiceDetailItems itemName="Item 1" rate="100.000" qty="2" />
      <InvoiceDetailItems itemName="Item 2" rate="750.000" qty="3" />
      <InvoiceDetailItems itemName="Item 3" rate="500.000" qty="1" />
      
      <View style={[styles.totalAmounts, styles.footerFlexBox]}>
        <Text style={[styles.totalAmount, styles.totalFlexBox]}>
          Total Amount
        </Text>
        <Text style={[styles.rpTotalRate, styles.totalFlexBox]}>
          Rp. Total_rate
        </Text>
      </View>
      <View style={[styles.footer, styles.footerFlexBox]}>
      <Button buttonType={1} actionButtonText="PAY NOW" onButtonPress={() => navigation.navigate("")} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  dateLayout: {
    height: 35,
    position: "absolute",
    width: 350,
    left: 20,
    backgroundColor: Color.singleToneWhite,
  },
  totalFlexBox: {
    textAlign: "left",
    color: Color.colorDarkslategray,
  },
  qtyTypo: {
    top: 9,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  footerFlexBox: {
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.singleToneWhite,
  },
  studentName1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
  },
  textStudentName: {
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 5,
  },
  studentName: {
    top: 140,
  },
  description: {
    top: 185,
  },
  date: {
    top: 230,
  },
  dueDate: {
    top: 275,
  },
  itemsName: {
    left: 0,
  },
  qty: {
    left: 190,
  },
  rateRp: {
    left: 248,
  },
  itemListTitles: {
    top: 346,
  },
  totalAmount: {
    width: 109,
    height: 18,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
  },
  rpTotalRate: {
    marginLeft: 130,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
  },
  totalAmounts: {
    top: 680,
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    width: 350,
    left: 20,
    alignItems: "center",
  },
  footer: {
    top: 720,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 390,
    height: 86,
    justifyContent: "center",
    left: 0,
  },
  paymentInvoiceDetails: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.singleToneWhite,
  },
});

export default PaymentInvoiceDetails;
