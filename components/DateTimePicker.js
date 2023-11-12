import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimePicker = ({ onDateChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Set a default date

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setSelectedDate(date);
    onDateChange(date); // Call the prop function to pass the selected date to the parent component
    hideDatePicker();
  };

  const formattedDateTime = selectedDate
    ? selectedDate.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : ""; // Return an empty string if selectedDate is null

  return (
    <TouchableOpacity style={styles.inputContainer} onPress={showDatePicker}>
      <View>
        <Text style={styles.inputText}>{formattedDateTime}</Text>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  inputText: {
    fontSize: 16,
  },
});

export default DateTimePicker;
