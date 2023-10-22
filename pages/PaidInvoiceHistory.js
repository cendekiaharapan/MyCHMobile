import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import InvoiceLists from "../components/InvoiceLists";
import { Color } from "../GlobalStyles";

const PaidInvoiceHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.PaidInvoiceHistory}>
      <Header
        invoiceTitle="INVOICE HISTORY"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        iNVOICESAlignItems="flex-start"
        iNVOICESWidth="unset"
        onBackButtonPress={() => navigation.navigate("PaymentInvoice")}
      />
      <InvoiceLists
          InvoiceListType={1}
          onPressNavigation="PaidInvoiceDetails"
          studentName="Timothy Jacob"
          description="Invoice for textbooks"
          paidDate="2023-10-19"
          dueDate="2023-10-30"
          totalRate="250000"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  PaidInvoiceHistory: {
    backgroundColor: Color.singleToneWhite,
    flex: 1,
    width: "100%",
    height: 844,
    alignItems: "center",
  },
});

export default PaidInvoiceHistory;
