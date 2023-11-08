import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import CHDAccountCard from "../components/CHDAccountCard";
import { Color } from "../GlobalStyles";

const PaymentCHDAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentChdAccount}>
      <Header
        invoiceTitle="CHD ACCOUNT"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        iNVOICESAlignItems="flex-start"
        iNVOICESWidth="unset"
        onBackButtonPress={() => navigation.navigate("PageStart")}
      />
      <View style={styles.chdAccountArea}>
        <CHDAccountCard student_name="Tiffany janice" chd_balance="450" />
        <CHDAccountCard student_name="Timothy Jacob" chd_balance="250" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chdAccountArea: {
    width: 350,
    height: 704,
    marginTop: 20,
  },
  paymentChdAccount: {
    backgroundColor: Color.singleToneWhite,
    flex: 1,
    width: "100%",
    height: 844,
    alignItems: "center",
  },
});

export default PaymentCHDAccount;
