import * as React from "react";
import { FormControl, Select, CheckIcon } from "native-base";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DropDown = ({ label, studentNames, studentIds, onSelect }) => {
  const [selectedStudentId, setSelectedStudentId] = React.useState("");
  const [selectedStudentName, setSelectedStudentName] = React.useState("");

  const handleSelect = (itemValue) => {
    setSelectedStudentName(itemValue);
    const selectedIndex = studentNames.indexOf(itemValue);
    const selectedId = studentIds[selectedIndex];
    setSelectedStudentId(selectedId);
    onSelect(selectedId, itemValue); // Call the onSelect callback with studentId and studentName
  };

  return (
    <FormControl mt="3" mb="3">
      <FormControl.Label>{label}</FormControl.Label>
      <Select
        selectedValue={selectedStudentName}
        height="10"
        minWidth="200"
        accessibilityLabel="Choose Child"
        placeholder="Choose Child"
        borderColor="black"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="3" />,
          color: "black",
        }}
        mt={1}
        onValueChange={handleSelect}
        borderRadius="full"
        isReadOnly={true}
        style={[styles.start, styles.endTypo]}
      >
        {studentNames.map((name, index) => (
          <Select.Item
            key={index}
            style={[
              styles.option,
              {
                color: selectedStudentName === name ? "black" : undefined,
                backgroundColor:
                  selectedStudentName === name ? "teal.600" : undefined,
              },
            ]}
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
    color: Color.colorBlack,
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
