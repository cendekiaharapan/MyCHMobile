import * as React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
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
import { LoadingModal } from "react-native-loading-modal";

const PaymentInvoice = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
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
    setTimeout(() => {
      setLoading(false);
    }, 300);
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

      console.log("Is Loading", loading);
    } catch (error) {
      console.error(
        "Error fetching payment histories for all students:",
        error
      );

      console.log("Is Loading", loading);
      return null;
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="red" />
        <Text>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.paymentInvoice, styles.footerFlexBox]}>
      {/* <LoadingModal modalVisible={loading} color="red" /> */}
      <Header
        invoiceTitle="INVOICES"
        onBackButtonPress={() => navigation.navigate("BottomNavbar")}
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

                const paymentId = payment.id;
                console.log("Payment IDsss:", payment.title);
                return (
                  <InvoiceLists
                    key={payment.id} // Make sure to use a unique key for each component
                    InvoiceListType={2}
                    onPressNavigation={() =>
                      navigation.navigate("PaymentInvoiceDetails", {
                        paymentId,
                        studentId: payment.student_id,
                      })
                    }
                    studentName={studentName[studentIdIndex]} // Assuming studentName is based on the student_id
                    description={payment.description}
                    dueDate={payment.due_date}
                    totalRate={formattedTotalRate} // Convert total to string if it's not already
                  />
                );
              })
            ) : (
                <View style={styles.emptyContainer}>
                  <Image
                    source={require('../assets/nounpaidpayments.png')} // Replace with your image path
                    style={styles.emptyImage}
                  />
                  <Text style={styles.emptyText}>No outstanding payments.</Text>
                </View>
            )
          ) : (
            console.log("Not loaded yet..")
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
  },
  emptyImage: {
    width: 150,
    height: 160, // Adjust size as needed
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: 'gray', // Adjust color as needed
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center'
  },
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
