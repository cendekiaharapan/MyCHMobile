import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Balance from "../components/Balance";
import TopupAmount from "../components/TopupAmount";
import IDREquivalent from "../components/IDREquivalent";
import Button from "../components/Button";
import { Color, Padding } from "../GlobalStyles";

const PaymentTopup = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.paymentTopup, styles.footerFlexBox]}>
      <Header
        invoiceTitle="TOP UP CHD"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        invoicesAlignItems="flex-start"
        invoicesWidth="unset"
        onBackButtonPress={() => navigation.navigate("PaymentCHDAccount")}
      />
      <View style={styles.chdDetails}>
        <Balance />
        <TopupAmount />
        <IDREquivalent />
      </View>
      <View style={[styles.footer, styles.footerFlexBox]}>
       
      <Button buttonType={1} actionButtonText="TOP UP" onButtonPress={() => navigation.navigate("")}/>
      <Button buttonType={2} actionButtonText="HISTORY" onButtonPress={() => navigation.navigate("PaymentCHDHistory")} />
        
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  footerFlexBox: {
    alignItems: "center",
    backgroundColor: Color.colorGray_100,
  },
  chdDetails: {
    borderRadius: 5,
    width: 350,
    height: 530,
    overflow: "hidden",
  },
  footer: {
    width: 390,
    height: 140,
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_xl,
  },
  paymentTopup: {
    flex: 1,
    width: "100%",
    height: 844,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
});

export default PaymentTopup;
