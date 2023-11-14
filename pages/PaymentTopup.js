import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Balance from "../components/Balance";
import TopupAmount from "../components/TopupAmount";
import IDREquivalent from "../components/IDREquivalent";
import Button from "../components/Button";
import { Color, Padding } from "../GlobalStyles";

const PaymentTopup = () => {
  const navigation = useNavigation();
  const studentName = route?.params?.student_name;
  const chdBalance = route?.params?.chd_balance;


  return (
    <View style={styles.container}>
      <Header
        invoiceTitle="TOP UP CHD"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        iNVOICESAlignItems="flex-start"
        iNVOICESWidth="unset"
        onBackButtonPress={() => navigation.navigate("PaymentCHDAccount")}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.chdDetails}>
          <Balance 
            chdBalance={chdBalance}
          />
          <TopupAmount 
          
          />
          <IDREquivalent
          
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button ButtonType={1} actionButtonText="TOP UP" onButtonPress={() => navigation.navigate("")} />
        <Button ButtonType={2} actionButtonText="HISTORY" onButtonPress={() => navigation.navigate("PaymentCHDHistory")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  chdDetails: {
    borderRadius: 5,
    width: 350,
    height: 530,
    overflow: "hidden",
    alignSelf: "center",
  },
  footer: {
    width: "100%",
    paddingHorizontal: Padding.p_xl,
    paddingBottom: Padding.p_xl,
  },
});

export default PaymentTopup;