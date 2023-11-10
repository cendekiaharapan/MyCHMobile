import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontFamily, FontSize } from "../GlobalStyles";

const DatePickerComponent = ({ onDateChange, leave, fromDate, toDate }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (leave) {
      if (fromDate) {
        setSelectedDate(new Date(fromDate));
      } else if (toDate) {
        setSelectedDate(new Date(toDate));
      } else {
        setSelectedDate(new Date());
      }
    }
  }, [leave, fromDate, toDate]);

  const handleDateChange = (event, selected) => {
    if (selected !== undefined) {
      // Formatting the date to the required format
      const formattedDate = `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, '0')}-${String(selected.getDate()).padStart(2, '0')} ${String(selected.getHours()).padStart(2, '0')}:${String(selected.getMinutes()).padStart(2, '0')}`;
      
      setSelectedDate(selected);
      setShowDatePicker(Platform.OS === "ios"); // Close the picker on iOS
      onDateChange(formattedDate);
    }
  };  

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

  const formatDate = (year, month, day, time) => {
    if (!year || !month || !day || !time) {
      return null;
    }

    const [hour, minute] = time.split(":");
    const date = new Date(year, month - 1, day, hour, minute);

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
  };

  const formattedDate = selectedDate
    ? `${selectedDate.getDate()} ${
        months[selectedDate.getMonth()]
      } ${selectedDate.getFullYear()}`
    : "Select Date";

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