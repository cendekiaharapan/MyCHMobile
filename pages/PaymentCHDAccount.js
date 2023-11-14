import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Header from "../components/Header";
import CHDAccountCard from "../components/CHDAccountCard";
import { Color } from "../GlobalStyles";
import axios from "axios";
import { retrieveItem } from "../database/database";

const PaymentCHDAccount = () => {
  const navigation = useNavigation();
  const [chdBalances, setChdBalances] = React.useState({}); // State to store the balance
  const [studentIds, setStudentIds] = React.useState([]); // State to store student IDs
  const [studentNames, setStudentNames] = React.useState([]);
  const [studentGet, setStudentGet] = useState(null);
  
  const fetchStudentBalances = async (studentIds) => {
    try {
      const balances = {};

      // Fetch balances for each student
      for (const studentId of studentIds) {
        const response = await axios.get(`http://penjemputan.balichildrenshouse.com/api/get_flashpay_balance_by_student_id_get/${studentId}`);
        balances[studentId] = response.data.balance;
      }

      // Set the balances in the state
      setChdBalances(balances);
      console.log(chdBalances);
    } catch (error) {
      console.error("Error fetching student balances:", error);
    }
  };

  // Use useFocusEffect to fetch data when the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      console.log("Page focused, fetching data...");
      // Retrieve student data from storage and fetch balances
      retrieveItem("childData")
        .then((data) => {
          if (data) {
            // Extract student_ids and student_name from data
            const studentIds = data.map((item) => item.id);
            const studentNames = data.map((item) => item.name);

            // Set the extracted data to the component state
            setStudentIds(studentIds);
            setStudentNames(studentNames);
            setStudentGet(data);
            // Log the retrieved student_ids and student_names
            console.log("Student IDs:", studentIds);
            console.log("Student Names:", studentNames);
            console.log("Student Data:", studentGet);

            fetchStudentBalances(studentIds);
          } else {
            console.log("No data found in SQLite.");
          }
        })
        .catch((error) => {
          console.error("Error fetching response data from SQLite:", error);
        });
    }, [])
  );


  return (
    <View style={styles.paymentChdAccount}>
      <Header
        invoiceTitle="CHD ACCOUNT"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        iNVOICESAlignItems="flex-start"
        iNVOICESWidth="unset"
        onBackButtonPress={() => navigation.navigate("PaymentTopup")}
      />
      <View style={styles.chdAccountArea}>
        {/* Use the chdBalance state variable in CHDAccountCard */}
        {studentIds.map((studentId, index) => (
        <CHDAccountCard key={studentId} student_name={studentNames[index]} chd_balance={chdBalances[studentId]} />
        ))}
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
