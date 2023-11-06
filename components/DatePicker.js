import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontFamily, FontSize } from "../GlobalStyles";

const DatePickerComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null); // Initialize to null
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to handle date change
  const handleDateChange = (event, selected) => {
    if (selected !== undefined) {
      setSelectedDate(selected);
      setShowDatePicker(Platform.OS === "ios"); // Close the picker on iOS
      onDateChange(selected);
    }
  };

  // Function to show/hide the date picker
  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = selectedDate
    ? `${selectedDate.getDate()} ${
        months[selectedDate.getMonth()]
      } ${selectedDate.getFullYear()}`
    : "Select Date"; // Use "Select Date" if selectedDate is null

  return (
    <>
      <TouchableOpacity style={styles.datePicker} onPress={toggleDatePicker}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()} // Use selectedDate or current date
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    borderWidth: 1,
    borderColor: "#a6a6a6",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 99999,
  },
  dateText: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: "#292a2a",
    fontSize: FontSize.textRegularXs12_size,
  },
});

export default DatePickerComponent;
