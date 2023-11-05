import * as React from "react";
import { FormControl, Select, CheckIcon } from "native-base";

const DropDown = ({ label, onServiceChange }) => {
  const [service, setService] = React.useState("");

  // When the value changes, invoke the callback to pass the selected service
  const handleServiceChange = (itemValue) => {
    setService(itemValue);
    onServiceChange(itemValue); // Call the callback
  };

  return (
    <FormControl mt="3" mb="3">
      <FormControl.Label>{label}</FormControl.Label>
      <Select
        selectedValue={service}
        height="10"
        minWidth="200"
        accessibilityLabel="Choose Your Child"
        placeholder="Choose Your Child"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="3" />,
        }}
        mt={1}
        onValueChange={handleServiceChange} // Use the callback here
        borderRadius="full"
        isReadOnly={true}
      >
        <Select.Item label="Patrick" value="1029" />
        <Select.Item label="Andrew" value="1030" />
      </Select>
    </FormControl>
  );
};

export default DropDown;
