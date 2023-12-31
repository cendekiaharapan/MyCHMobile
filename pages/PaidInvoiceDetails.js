import * as React from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import InvoiceDetailItems from "../components/InvoiceDetailItems";
import Button from "../components/Button";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import axios from "axios";
import { useState, useEffect } from "react";
import { retrieveItem } from "../database/database";
import { Linking } from "react-native";
import { LoadingModal } from "react-native-loading-modal";

const PaidInvoiceDetails = ({ route }) => {
  const navigation = useNavigation();
  const [studentIds, setStudentIds] = React.useState([]);
  const [studentNames, setStudentNames] = React.useState([]);
  const [selectedPayment, setSelectedPayment] = React.useState(null);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [total, setTotal] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState(null);
  const { paymentId, studentId } = route.params;

  React.useEffect(() => {
    // Retrieve student data from storage
    retrieveItem("childData")
      .then((data) => {
        if (data) {
          // Extract student_ids and student_name from data
          const studentIds = data.map((item) => item.id);
          const studentNames = data.map((item) => item.name);

          // Set the extracted data to the component state
          setStudentIds(studentIds);
          setStudentNames(studentNames);

          // Log the retrieved student_ids and student_names
          console.log("Student IDssss:", studentIds);
          console.log("Student Names:", studentNames);
        } else {
          console.log("No data found in SQLite.");
        }
      })
      .catch((error) => {
        console.error("Error fetching response data from SQLite:", error);
      });
  }, []);

  const fetchDescription = async (selectedPaymentId) => {
    try {
      const response = await axios.get(
        `https://www.balichildrenshouse.com/myCH/api/get-payment-histories-by-student_id/${studentId}`
      );

      console.log("Response Data:", response.data);

      if (response.data.payments && response.data.payments.length > 0) {
        const selectedPayment = response.data.payments.find(
          (payment) => payment.id === selectedPaymentId
        );

        if (selectedPayment) {
          setSelectedPayment(selectedPayment);
          setDescription(selectedPayment.description);
          setDate(selectedPayment.date);
          setDueDate(selectedPayment.due_date);
          setTotal(selectedPayment.total);

          const itemsArray = selectedPayment.invoice_items.map((item) => ({
            itemName: item.item_title,
            qty: item.item_qty,
            rate: item.item_rate,
          }));

          setItems(itemsArray);
          setApiResponse(response);
        } else {
          console.log(`Payment with id ${selectedPaymentId} not found.`);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openPaymentUrl = async () => {
    try {
      // Fetch the payment ID from the first payment in the response

      // Open the payment URL with the dynamic payment ID
      const paymentUrl = `https://www.balichildrenshouse.com/myCH/api/payment/midtrans/${paymentId}`;
      // Use Linking to open the URL in the device's default browser
      await Linking.openURL(paymentUrl);
    } catch (error) {
      console.error("Error opening payment URL:", error);
    }
  };

  const openReceiptUrl = async () => {
    try {
      // Fetch the payment ID from the first payment in the response

      // Open the payment URL with the dynamic payment ID
      const paymentUrl = `https://www.balichildrenshouse.com/myCH/ev-assets/uploads/invoices/${selectedPayment.receipt_name}`;
      // Use Linking to open the URL in the device's default browser
      await Linking.openURL(paymentUrl);
    } catch (error) {
      console.error("Error opening payment URL:", error);
    }
  };

  const handlePayNowPress = () => {
    // Call the function to open the payment URL
    openPaymentUrl();
  };

  useEffect(() => {
    fetchDescription(paymentId).finally(() => {
      setLoading(false);
    });
  }, [paymentId]);

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

  const formattedTotal = parseFloat(total).toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  });

  return (
    <View style={styles.paymentInvoiceDetails}>
      <View style={styles.header}>
        <Header
          invoiceTitle="INVOICE DETAILS"
          backButtonPosition="unset"
          backButtonTop="unset"
          backButtonLeft="unset"
          iNVOICESAlignItems="flex-start"
          iNVOICESWidth="unset"
          onBackButtonPress={() => navigation.navigate("PaidInvoiceHistory")}
        />
      </View>
      <View style={[styles.studentName, styles.dateLayout]}>
        <Text style={[styles.studentName1, styles.totalFlexBox]}>
          Student Name
        </Text>
        <Text style={[styles.textStudentName, styles.totalFlexBox]}>
          {studentNames[studentIds.indexOf(studentId)]}
        </Text>
      </View>
      <View style={[styles.description, styles.dateLayout]}>
        <Text style={[styles.studentName1, styles.totalFlexBox]}>
          Description
        </Text>
        <Text style={[styles.textStudentName, styles.totalFlexBox]}>
          {description}
        </Text>
      </View>
      <View style={[styles.date, styles.dateLayout]}>
        <Text style={[styles.studentName1, styles.totalFlexBox]}>Date</Text>
        <Text style={[styles.textStudentName, styles.totalFlexBox]}>
          {date}
        </Text>
      </View>
      <View style={[styles.dueDate, styles.dateLayout]}>
        <Text style={[styles.studentName1, styles.totalFlexBox]}>Due Date</Text>
        <Text style={[styles.textStudentName, styles.totalFlexBox]}>
          {dueDate}
        </Text>
      </View>
      <View style={[styles.itemListTitles, styles.dateLayout]}>
        <Text style={[styles.itemsName, styles.qtyTypo]}>Item Names</Text>
        <Text style={[styles.qty, styles.qtyTypo]}>Qty</Text>
        <Text style={[styles.rateRp, styles.qtyTypo]}>Rate (Rp)</Text>
      </View>

      {items.map((item, index) => (
        <InvoiceDetailItems
          key={index}
          itemName={item.itemName}
          qty={item.qty}
          rate={item.rate}
        />
      ))}

      <View style={[styles.totalAmounts, styles.footerFlexBox]}>
        <Text style={[styles.totalAmount, styles.totalFlexBox]}>
          Total Amount
        </Text>
        <Text style={[styles.rpTotalRate, styles.totalFlexBox]}>
          Rp. {formattedTotal}
        </Text>
      </View>
      <View style={[styles.footer, styles.footerFlexBox]}>
        <Button ButtonType={3} actionButtonText="DOWNLOAD RECEIPT" onButtonPress={openReceiptUrl}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center'
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  dateLayout: {
    height: 35,
    position: "absolute",
    width: '100%',
    left: 20,
    backgroundColor: Color.singleToneWhite,
  },
  totalFlexBox: {
    textAlign: "left",
    color: Color.colorDarkslategray,
  },
  qtyTypo: {
    top: 9,
    textAlign: "left",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  footerFlexBox: {
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.singleToneWhite,
  },
  studentName1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
  },
  textStudentName: {
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: '1%',
  },
  studentName: {
    top: 140,
  },
  description: {
    top: 185,
  },
  date: {
    top: 230,
  },
  dueDate: {
    top: 275,
  },
  itemsName: {
    left: 0,
  },
  qty: {
    left: '45%',
  },
  rateRp: {
    left: '65%',
  },
  itemListTitles: {
    top: 346,
  },
  totalAmount: {
    width: 109,
    height: 18,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
  },
  rpTotalRate: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray,
  },
  totalAmounts: {
    top: '85%',
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    // alignItems: "center",
    justifyContent: 'space-between', // Aligns children to each end
    paddingHorizontal: 20, // Add some padding on both sides
    alignItems: "center",
    width: '100%', // Full width of the parent
  },
  footer: {
    top: '90%',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: '100%',
    height: 86,
    justifyContent: "center",
    left: 0,
  },
  paymentInvoiceDetails: {
    flex: 1,
    width: "100%",
    height: '100%',
    backgroundColor: Color.singleToneWhite,
  },
});

export default PaidInvoiceDetails;
