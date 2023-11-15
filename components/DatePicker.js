import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  View,
} from "react-native";
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

  const handleDateChange = (event, selected) => {
    if (selected !== undefined) {
      setSelectedDate(selected);
      setShowDatePicker(Platform.OS === "ios");

      const formattedDate = `${selected.getFullYear()}-${String(
        selected.getMonth() + 1
      ).padStart(2, "0")}-${String(selected.getDate()).padStart(2, "0")}`;
      const formattedTime = selectedTime || "00:00";

      if (typeof onDateChange === "function") {
        onDateChange(`${formattedDate} ${formattedTime}`);
      }
    }
  };

  const handleTimeChange = (event, selected) => {
    if (selected !== undefined && selected !== null) {
      setSelectedTime(
        `${String(selected.getHours()).padStart(2, "0")}:${String(
          selected.getMinutes()
        ).padStart(2, "0")}`
      );
      setShowTimePicker(Platform.OS === "ios");

      const formattedDate = selectedDate
        ? `${selectedDate.getFullYear()}-${String(
            selectedDate.getMonth() + 1
          ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(
            2,
            "0"
          )}`
        : "Select Date";

      const formattedTime = `${String(selected.getHours()).padStart(
        2,
        "0"
      )}:${String(selected.getMinutes()).padStart(2, "0")}`;

      if (typeof onDateChange === "function") {
        onDateChange(`${formattedDate} ${formattedTime}`);
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
    ? `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1
      ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`
    : "Select Date";

  const formattedTime = selectedTime || "Select Time";

  return (
    <>
      <View>
        <TouchableOpacity style={styles.datePicker} onPress={toggleDatePicker}>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textStyles}>Time</Text>
        <TouchableOpacity style={styles.datePickers} onPress={toggleTimePicker}>
          <Text style={styles.dateText}>{formattedTime}</Text>
        </TouchableOpacity>
      </View>
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
          value={
            selectedTime ? new Date(`2000-01-01T${selectedTime}`) : new Date()
          }
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
  textStyles: {
    color: "#a7a7a7",
    marginBottom: 3,
  },
  datePickers: {
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
  dateMode: {
    marginBottom: 20,
  },
});

export default DatePickerComponent;
