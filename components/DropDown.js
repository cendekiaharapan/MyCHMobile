import * as React from "react";
import { FormControl, Select, CheckIcon } from "native-base";

const DropDown = ({ label, data, selected, setSelected }) => {
  return (
    <FormControl mt="3" mb="3">
      <FormControl.Label>{label}</FormControl.Label>
      <Select
        selectedValue={selected} // Set the selected value to the name
        height="10"
        minWidth="200"
        accessibilityLabel="Choose Your Child"
        placeholder="Choose Your Child"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="3" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setSelected(itemValue)}
        borderRadius="full"
      >
        {data && data.length > 0 ? (
          data.map((student) => (
            <Select.Item
              key={student.id}
              label={student.name}
              value={student.name} // Use the name as the value
            />
          ))
        ) : (
          <Select.Item label="No children available" value="" />
        )}
      </Select>
    </FormControl>
  );
};

export default DropDown;
