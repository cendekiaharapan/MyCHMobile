import * as React from "react";
import { FormControl, Select, CheckIcon } from "native-base";
const DropDown = ({ label }) => {
  const [service, setService] = React.useState("");
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
        onValueChange={(itemValue) => setService(itemValue)}
        borderRadius="full"
        isReadOnly={true}
      >
        <Select.Item label="Patrick" value="excused" />
        <Select.Item label="Andrew" value="sick" />
      </Select>
    </FormControl>
  );
};

export default DropDown;
