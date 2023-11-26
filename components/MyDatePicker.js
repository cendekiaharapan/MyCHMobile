import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.container}>
      <Text>Select a Date:</Text>
      <DatePicker
        style={styles.datePicker}
        date={selectedDate}
        mode="datetime"
        placeholder="Select date"
        format="YYYY-MM-DD"
        minDate="2023-01-01"
        maxDate="2030-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: {
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 5,
            padding: 5,
          },
          // You can customize other styles here
        }}
        onDateChange={handleDateChange}
      />
      <Text>Selected Date: {selectedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  datePicker: {
    width: 200,
    marginTop: 10,
  },
});

export default MyDatePicker;
