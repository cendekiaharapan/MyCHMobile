import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Balance from "../components/Balance";
import TopupAmount from "../components/TopupAmount";
import Button from "../components/Button";
import {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
  saveTokenToSecureStore,
  getTokenFromSecureStore,
  saveRespDataSecureStore,
  getRespDataFromSecureStore,
} from "../database/database";
import { Color, Padding } from "../GlobalStyles";
import { LoadingModal } from "react-native-loading-modal";
import { Linking } from "react-native";
import axios from "axios";

const PaymentTopup = ({ route, navigation }) => {
  const { student_id, student_name, chd_balance } = route.params;

  const [idStudent, setIDStudent] = useState(student_id);
  const [idParent, setIDParent] = useState([]);
  const [chdBalance, setCHDBalance] = useState(chd_balance);
  const [topUpAmount, setTopUpAmount] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response_data = await getRespDataFromSecureStore();
      console.log("Parent ID:", response_data.user.id);
      setIDParent(response_data.user.id);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const openPaymentUrl = async () => {
    try {
      // Add validation for topUpAmount before proceeding
      if (!topUpAmount || isNaN(topUpAmount)) {
        console.error("Please enter a valid amount");
        return;
      }

      const exchangeRatesResponse = await axios.get(
        "https://www.balichildrenshouse.com/myCH/api/exchange-rates"
      );
      const exchangeRates = exchangeRatesResponse.data;

      if (exchangeRates.success) {
        const buyRate = exchangeRates.buy;
        const total = topUpAmount * buyRate; // Calculate the total based on the 'buy' value

        const userID = idStudent;
        const senderID = idParent;
        const paymentUrl = `https://www.balichildrenshouse.com/myCH/api/top-up-ch-dollar/${total}/${userID}/${senderID}`;

        await Linking.openURL(paymentUrl);
      } else {
        console.error("Failed to retrieve exchange rates.");
      }
    } catch (error) {
      console.error("Error opening payment URL:", error);
    }
  };

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
          <Balance chdBalance={chd_balance} />
          <TopupAmount onAmountChange={setTopUpAmount} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          ButtonType={1}
          actionButtonText="TOP UP"
          onButtonPress={openPaymentUrl}
        />
        <Button
          ButtonType={2}
          actionButtonText="HISTORY"
          onButtonPress={() =>
            navigation.navigate("PaymentCHDHistory", {
              student_id,
              student_name,
              chd_balance,
            })
          }
        />
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
