import * as React from "react";
import { FormControl, Select, CheckIcon } from "native-base";

const DropDown = ({ label, onServiceChange, studentGet, leave }) => {
  const [service, setService] = React.useState("");

  // When the value changes, invoke the callback to pass the selected service
  const handleServiceChange = (itemValue) => {
    setService(itemValue);
    onServiceChange(itemValue); // Call the callback
  };

  React.useEffect(() => {
    if (studentGet && studentGet.length > 0 && leave) {
      const selectedStudent = studentGet.find((student) => student.id === leave.student_id);
      if (selectedStudent) {
        setService(selectedStudent.id);
      }
    }
  }, [leave, studentGet]);

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
        {studentGet &&
          studentGet.length > 0 &&
          studentGet.map((student) => (
            <Select.Item
              key={student.id}
              label={student.name}
              value={student.id}
            />
          ))}
      </Select>
    </FormControl>
  );
};

export default DropDown;