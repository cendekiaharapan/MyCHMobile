import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

import InvoiceLists from "../components/InvoiceLists";
import Button from "../components/Button";
import { Color, Padding } from "../GlobalStyles";

const PaymentInvoice = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.paymentInvoice, styles.footerFlexBox]}>
      <Header
        invoiceTitle="INVOICES"
        onBackButtonPress={() => navigation.navigate("PageStart")}
      />
      <View style={styles.invoicelistarea}>
        <InvoiceLists
          InvoiceListType={2}
          onPressNavigation="PaymentInvoiceDetails"
          studentName="Tiffany Janice"
          description="Invoice for textbooks"
          dueDate="2023-10-30"
          totalRate="2,500,000"
        />
        <InvoiceLists
          InvoiceListType={2}
          onPressNavigation="PaymentInvoiceDetails"
          studentName="Timothy Jacob"
          description="Invoice for school supplies"
          dueDate="2023-11-01"
          totalRate="1,500,000"
        />
      </View>
      <View style={[styles.footer, styles.footerFlexBox]}>
      <Button ButtonType={2} actionButtonText="HISTORY" 
      onButtonPress={() => navigation.navigate("PaidInvoiceHistory")} />

       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerFlexBox: {
    justifyContent: "center",
    backgroundColor: Color.singleToneWhite,
    alignItems: "center",
  },
  invoicelistarea: {
    width: 350,
    height: 600,
    paddingHorizontal: 0,
    
    alignItems: "center",
  },
  footer: {
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
  },
  paymentInvoice: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default PaymentInvoice;
