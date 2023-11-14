import * as React from "react";
import { FormControl, Select, CheckIcon } from "native-base";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DropDown = ({ label, studentNames }) => {
  const [selectedStudent, setSelectedStudent] = React.useState("");

  return (
    <FormControl mt="3" mb="3">
      <FormControl.Label>{label}</FormControl.Label>
      <Select
        selectedValue={selectedStudent}
        height="10"
        minWidth="200"
        accessibilityLabel="Choose Child"
        placeholder="Choose Child"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="3" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setSelectedStudent(itemValue)}
        borderRadius="full"
        isReadOnly={true}
        style={[styles.start, styles.endTypo]}
      >
        {studentNames.map((name, index) => (
          <Select.Item
            key={index}
            style={[styles.option]}
            label={name}
            value={name}
          />
        ))}
      </Select>
    </FormControl>
  );
};

const styles = StyleSheet.create({
  start: {
    marginLeft: -14.54,
    width: 29,
  },
  endTypo: {
    color: Color.colorDarkgray,
    top: 0,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    left: 20,
    fontSize: FontSize.bodyBodyXS_size,
  },
  option: {
    fontFamily: FontFamily.poppinsLight,
    fontSize: FontSize.bodyBodyXS_size,
  },
});
export default DropDown;
