import * as React from "react";
import { StyleSheet, View } from "react-native";
import ContainerCard from "../components/ContainerCard";
import UserCardForm from "../components/UserCardForm";
import { Color } from "../GlobalStyles";

const PaymentCHDAccount = () => {
  return (
    <View style={styles.paymentChdAccount}>
      <ContainerCard />
      <UserCardForm />
    </View>
  );
};

const styles = StyleSheet.create({
  paymentChdAccount: {
    backgroundColor: Color.singleToneWhite,
    flex: 1,
    width: "100%",
    height: 844,
    alignItems: "center",
  },
});

export default PaymentCHDAccount;
