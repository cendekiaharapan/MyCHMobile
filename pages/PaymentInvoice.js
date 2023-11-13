import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { ScrollView } from "react-native";
import InvoiceLists from "../components/InvoiceLists";
import Button from "../components/Button";
import { Color, Padding } from "../GlobalStyles";
import { useState, useEffect } from "react";
import axios from "axios";
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
import { useFocusEffect } from "@react-navigation/native";

const PaymentInvoice = () => {
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
        (payment) => payment.status === "unpaid"
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
    <View style={[styles.paymentInvoice, styles.footerFlexBox]}>
      <Header
        invoiceTitle="INVOICES"
        onBackButtonPress={() => navigation.navigate("PageStart")}
      />
      <ScrollView contentContainerStyle={styles.invoicelistarea}>
        <View style={styles.invoicelistarea}>
          {unpaidPayment != null ? (
            unpaidPayment.length > 0 ? (
              unpaidPayment.map((payment) => {
                const formatter = new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                });

                const formattedTotalRate = formatter.format(payment.total);
                const studentIdIndex = studentId.indexOf(payment.student_id);
                return (
                  <InvoiceLists
                    key={payment.id} // Make sure to use a unique key for each component
                    InvoiceListType={2}
                    onPressNavigation="PaymentInvoiceDetails"
                    studentName={studentName[studentIdIndex]} // Assuming studentName is based on the student_id
                    description={payment.title}
                    dueDate={payment.due_date}
                    totalRate={formattedTotalRate} // Convert total to string if it's not already
                  />
                );
              })
            ) : (
              <Text>No unpaid payments</Text>
            )
          ) : (
            <Text>Loading </Text>
          )}
        </View>
      </ScrollView>
      <View style={[styles.footer, styles.footerFlexBox]}>
        <Button
          ButtonType={2}
          actionButtonText="HISTORY"
          onButtonPress={() => navigation.navigate("PaidInvoiceHistory")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerFlexBox: {
    justifyContent: "center",
    backgroundColor: Color.singleToneWhite,
    alignItems: "center",
  },
  invoicelistarea: {
    width: 350,
    paddingHorizontal: 0,
    justifyContent: "center",
  },
  footer: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 390,
    height: 86,
  },
  paymentInvoice: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default PaymentInvoice;
