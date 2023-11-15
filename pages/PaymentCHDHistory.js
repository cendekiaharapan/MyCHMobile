import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import CHDHistoryCard from "../components/CHDHistoryCard";

import { Color } from "../GlobalStyles";

const PaymentCHDHistory = ({ route }) => {
  const { student_id, student_name, chd_balance } = route.params;
  const navigation = useNavigation();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(
      "http://penjemputan.balichildrenshouse.com/api/get_transactions_list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id: student_id,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.transactions) {
          setTransactions(data.transactions);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <View style={styles.paymentChdHistory}>
      <Header
        invoiceTitle="CHD History"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        invoicesAlignItems="flex-start"
        invoicesWidth="unset"
        onBackButtonPress={() =>
          navigation.navigate("PaymentTopup", {
            student_id,
            student_name,
            chd_balance,
          })
        }
      />

      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {transactions.map((transaction, index) => (
          <CHDHistoryCard
            key={index}
            type={transaction.action === "2" ? 1 : 0}
            date={transaction.waktu}
            description={transaction.deskripsi}
            amount={transaction.jumlah}
          />
        ))}
      </ScrollView>
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
  },
});

export default PaymentCHDHistory;
