import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import CHDHistoryCard from "../components/CHDHistoryCard";

import { Color } from "../GlobalStyles";

const PaymentCHDHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentChdHistory}>
      <Header
        invoiceTitle="CHD History"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        invoicesAlignItems="flex-start"
        invoicesWidth="unset"
        onBackButtonPress={() => navigation.navigate("PaymentTopup")}
      />
      
      
      {/* First Component with type set to 1 */}
      <CHDHistoryCard type={1} />
      <CHDHistoryCard type={0} />
      <CHDHistoryCard type={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  paymentChdHistory: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    alignItems: "center",
    
  },
});

export default PaymentCHDHistory;
