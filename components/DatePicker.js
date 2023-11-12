import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontFamily, FontSize } from "../GlobalStyles";

const DatePickerComponent = ({ onDateChange, dateTime, leave }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [selectedTime, setSelectedTime] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
    if (dateTime) {
      const [date, time] = dateTime.split(" ");
      setSelectedDate(new Date(date));
      setSelectedTime(time || null);
    } else {
      setSelectedDate(new Date());
    }
  }, [dateTime]);

  // Inside DatePickerComponent

  const handleDateChange = (event, selected) => {
    if (selected !== undefined) {
      setSelectedDate(selected);
      setShowDatePicker(Platform.OS === "ios"); // Close the picker on iOS

      // Format selected date
      const formattedDate = `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, '0')}-${String(selected.getDate()).padStart(2, '0')}`;

      // Ensure onDateChange is a function before calling it
      if (typeof onDateChange === 'function') {
        // Pass formatted date to the parent component
        onDateChange({ date: formattedDate, time: selectedTime });
      }
    }
  };

  const handleTimeChange = (event, selected) => {
    if (selected !== undefined && selected !== null) {
      setSelectedTime(`${String(selected.getHours()).padStart(2, '0')}:${String(selected.getMinutes()).padStart(2, '0')}`);
      setShowTimePicker(Platform.OS === "ios"); // Close the picker on iOS

      // Format selected time
      const formattedTime = `${String(selected.getHours()).padStart(2, '0')}:${String(selected.getMinutes()).padStart(2, '0')}`;

      // Ensure onDateChange is a function before calling it
      if (typeof onDateChange === 'function') {
        // Pass formatted time to the parent component
        onDateChange({ date: selectedDate, time: formattedTime });
      }
    }
  };

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  const toggleTimePicker = () => {
    setShowTimePicker((prev) => !prev);
  };

  const formattedDate = selectedDate
    ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`
    : "Select Date";

  const formattedTime = selectedTime || "Select Time";

  return (
    <>
      <TouchableOpacity style={styles.datePicker} onPress={toggleDatePicker}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.datePicker} onPress={toggleTimePicker}>
        <Text style={styles.dateText}>{formattedTime}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={selectedTime ? new Date(`2000-01-01T${selectedTime}`) : new Date()}
          mode="time"
          display="default"
          onChange={handleTimeChange}
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