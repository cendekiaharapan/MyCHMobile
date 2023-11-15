import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import CHDHistoryCard from "../components/CHDHistoryCard";

import { Color } from "../GlobalStyles";

const PaymentCHDHistory = ({ route }) => {
  const { student_id, student_name, chd_balance } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.paymentChdHistory}>
      <Header
        invoiceTitle="CHD History"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        iNVOICESAlignItems="flex-start"
        iNVOICESWidth="unset"
        onBackButtonPress={() =>
          navigation.navigate("PaymentTopup", {
            student_id,
            student_name,
            chd_balance,
          })
        }
      />

      {/* First Component with ChdCardHistoryType set to 1 */}
      <CHDHistoryCard ChdCardHistoryType={1} />
      <CHDHistoryCard ChdCardHistoryType={0} />
      <CHDHistoryCard ChdCardHistoryType={1} />
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
