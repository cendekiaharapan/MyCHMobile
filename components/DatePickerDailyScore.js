import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const DatePickerComponent = ({ onDateChange, selectedDate, label }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selected) => {
    if (selected !== undefined) {
      setShowDatePicker(Platform.OS === "ios");

      if (typeof onDateChange === "function") {
        onDateChange(selected);
      }
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const formattedDate = selectedDate
    ? formatDate(selectedDate)
    : `Select ${label}`;

  return (
    <>
      <TouchableOpacity style={styles.datePicker} onPress={toggleDatePicker}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
          style={styles.datePicker1}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 99999,
    borderColor: "black",
  },
  dateText: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "100",
    color: "#292a2a",
    fontSize: FontSize.size_xs,
  },
  datePicker1: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "100",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
});

export default DatePickerComponent;
