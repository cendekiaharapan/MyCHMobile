import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import InvoiceLists from "../components/InvoiceLists";
import { Color } from "../GlobalStyles";
import { useState, useEffect } from "react";
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
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native";
const PaidInvoiceHistory = () => {
  const navigation = useNavigation();
  const [studentId, setStudentId] = useState(null);
  const [studentName, setStudentName] = useState(null);
  const [unpaidPayment, setUnpaidPayment] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      // Your effect to run when the screen comes into focus
      console.log("Screen is focused, perform tasks here.");

      // For example, you might want to fetch data
      fetchDataStudent();

      return () => {
        // Optional cleanup function when the component is unmounted or loses focus
        console.log("Screen is unfocused, cleanup tasks here.");
      };
    }, [])
  );

  // useEffect(() => {
  //   fetchDataStudent();
  //   getAllPaymentHistories();
  // }, []); // Dependency array

  const fetchPaymentHistories = async (studentId) => {
    console.log("inside fetch payment histories");
    try {
      const response = await axios.get(
        `https://www.balichildrenshouse.com/myCH/api/get-payment-histories-by-student_id/${studentId}`
      );
      console.log(
        "this is the payment history ",
        studentId,
        ": ",
        response.data
      );
      return response.data; // Assuming the data contains payment histories
    } catch (error) {
      // console.error(
      //   `Error fetching payment histories for student ID ${studentId}:`,
      //   error
      // );
      return null;
    }
  };

  const fetchDataStudent = async () => {
    retrieveItem("childData")
      .then((data) => {
        if (data) {
          // Use the retrieved data
          const student_ids = data.map((item) => item.id);
          const student_name = data.map((item) => item.name);
          getAllPaymentHistories(student_ids);
          // Update your component state or data source with the new data
          // For example, if you're using state in a functional component:
          setStudentId(student_ids);
          setStudentName(student_name);
        } else {
          // Handle the case when no data is found
          console.log("No data found in AsyncStorage.");
        }
      })
      .catch((error) => {
        console.error("Error fetching response data from SQLite:", error);
      });
  };

  const getAllPaymentHistories = async (studentId) => {
    try {
      const allPaymentHistories = await Promise.all(
        await studentId.map((studentId) => fetchPaymentHistories(studentId))
      );

      console.log("All Payment Histories:", allPaymentHistories);
      const flattenedPayments = allPaymentHistories.reduce(
        (accumulator, paymentHistory) => {
          // Check if "payments" property exists
          if (paymentHistory && paymentHistory.payments) {
            // Concatenate the payments array to the accumulator
            return accumulator.concat(paymentHistory.payments);
          }

          return accumulator; // Handle cases where "payments" property is missing or null
        },
        []
      );

      const sortedPayments = flattenedPayments.sort(
        (a, b) => new Date(a.due_date) - new Date(b.due_date)
      );

      const unpaidPayments = sortedPayments.filter(
        (payment) => payment.status === "paid"
      );

      console.log("Unpaid Payments:", unpaidPayments);
      setUnpaidPayment(unpaidPayments);
    } catch (error) {
      console.error(
        "Error fetching payment histories for all students:",
        error
      );
      return null;
    }
  };
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
      <ScrollView contentContainerStyle={styles.historyInvoiceContainer}>
        <View style={styles.historyInvoiceInnerContainer}>
          {unpaidPayment != null ? (
            unpaidPayment.length > 0 ? (
              unpaidPayment.map((payment) => {
                const formatter = new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                });

                const formattedTotalRate = formatter.format(payment.total);
                const studentIdIndex = studentId.indexOf(payment.student_id);
                const paymentId = payment.id;
                console.log(payment.student_id);
                console.log(studentName[studentIdIndex]);
                return (
                  <InvoiceLists
                    InvoiceListType={1}
                    onPressNavigation={() =>
                      navigation.navigate("PaidInvoiceDetails", {
                        paymentId,
                        studentId: payment.student_id,
                      })
                    }
                    studentName={studentName[studentIdIndex]} // Assuming studentName is based on the student_id
                    description={payment.description}
                    dueDate={payment.due_date}
                    totalRate={formattedTotalRate}
                  />
                );
              })
            ) : (
              <Text>No Paid Payments</Text>
            )
          ) : (
            <Text>Loading </Text>
          )}
        </View>
      </ScrollView>
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
  historyInvoiceContainer: {
    // backgroundColor: Color.singleToneWhite,
    flexGrow: 1, // Use flexGrow: 1 to allow the container to take the available space
  },
  historyInvoiceInnerContainer: {
    justifyContent: "center",
  },
});

export default PaidInvoiceHistory;
