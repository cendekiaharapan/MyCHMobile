import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import {
  Center,
  NativeBaseProvider,
  FormControlLabel,
  FormControlLabelText,
  TextArea,
  TextareaInput,
  FormControlHelper,
  FormControlHelperText,
  Button,
  Select,
  FormControl,
  Input,
  CheckIcon,
  useToast,
} from "native-base";
import { LoadingModal } from "react-native-loading-modal";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

// date picker
import DocumentPick from "../components/DocumentPick"; // document pick
import DropDown from "../components/DropDown";
import axios from "axios";
import DateTimePicker from "../components/DateTimePicker";
import Toast from "react-native-toast-message";
import { retrieveItem } from "../database/database";
import { useState } from "react";

const ChildPermissionAddPermis = () => {
  const navigation = useNavigation();
  const [studentIds, setStudentIds] = React.useState([]); // State to store student IDs
  const [studentNames, setStudentNames] = React.useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [service, setService] = React.useState(null); // Initialize service state
  const [type, setType] = React.useState(null); // Initialize service state
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  const [note, setNote] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const showToastSuccess = () => {
    Toast.show({
      text1: "Successfully, added permission!",
      text1Style: { fontSize: 15 },
      text2Style: { fontSize: 13 },
      type: "success",
    });
  };

  const showToastErrorRequired = () => {
    Toast.show({
      text1: "Please select all required fields!",
      text1Style: { fontSize: 15 },
      text2Style: { fontSize: 13 },
      type: "error",
    });
  };

  React.useEffect(() => {
    // Retrieve student data from storage
    retrieveItem("childData")
      .then((data) => {
        if (data) {
          // Extract student_ids and student_name from data
          const studentIds = data.map((item) => item.id);
          const studentNames = data.map((item) => item.name);

          // Set the extracted data to the component state
          setStudentIds(studentIds);
          setStudentNames(studentNames);

          // Log the retrieved student_ids and student_names
          console.log("Student IDssss:", studentIds);
          console.log("Student Names:", studentNames);
          setLoading(false);
        } else {
          setLoading(false);
          console.log("No data found in SQLite.");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching response data from SQLite:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // Function to handle the selected date
  const handleDateChange = (date, field) => {
    if (field === "from") {
      setFromDate(date);
    } else if (field === "to") {
      setToDate(date);
    }
  };

  // Function to update the service state
  const handleServiceChange = (selectedStudent) => {
    setStudentIds(selectedStudent);
  };

  // Function to handle changes in the text area
  const handleNoteChange = (text) => {
    setNote(text);
  };

  const handleSubmitButton = async () => {
    console.log("inside from date : ", fromDate);
    setLoading(true);
    // Create a data object with the data to send in the request
    const data = {
      student_id: selectedStudent,
      type: type,
      from_date: fromDate,
      to_date: toDate,
      note: note,
    };
    console.log("inside data : ", data);

    if (
      selectedStudent != null &&
      type != null &&
      fromDate != null &&
      toDate != null
    ) {
      // Make a POST request to the API
      axios
        .post(
          "https://www.balichildrenshouse.com/myCH/api/addChildPermission",
          data
        )
        .then((response) => {
          setLoading(false);
          showToastSuccess();
          // Handle the success response here, e.g., show a success message or navigate to a different screen
          console.log("API response:", response.data);
          navigation.navigate("ChildPermissionHistorys");
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          console.error("API request error:", error);
        });
    } else {
      setLoading(false);
      showToastErrorRequired();
    }
  };

  const handleBackButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "BottomNavbar", // change this with your screen name
    });
  };

  const handleHistoryButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "ChildPermissionHistorys", // change this with your screen name
    });
  };

  return (
    <NativeBaseProvider>
      <LoadingModal modalVisible={loading} color="red" />
      <View
        style={[styles.childPermissionAddPermis, styles.submitbuttonLayout]}
      >
        <View style={styles.content}>
          {/* Hero Content */}
          <View style={[styles.herocontent, styles.inputformFlexBox]}>
            <TouchableOpacity onPress={handleBackButton}>
              <Image
                style={styles.backicon}
                contentFit="cover"
                source={require("../assets/images/backicon1.png")}
              />
            </TouchableOpacity>
            <View style={styles.permission}>
              <Text style={styles.permission1}>Permission</Text>
            </View>
            <TouchableOpacity onPress={handleHistoryButton}>
              <Image
                style={styles.historyicon}
                contentFit="cover"
                source={require("../assets/images/historyicon.png")}
              />
            </TouchableOpacity>
          </View>
          {/* End Hero Content */}
          <ScrollView>
            {/* Form 1 ( Child ) */}
            <FormControl mb="3">
              <View style={styles.requireContainer}>
                <FormControl.Label>Select Student</FormControl.Label>
                <Text style={styles.required}> *</Text>
              </View>
              {/* New Select component for students */}
              <Select
                height="10"
                minWidth="200"
                accessibilityLabel="Choose Student"
                placeholder="Choose Student"
                onValueChange={(studentId) => {
                  setSelectedStudent(studentId);
                }}
                borderRadius="full"
                isReadOnly={true}
              >
                {studentNames.map((student, index) => (
                  <Select.Item
                    key={studentIds[index]}
                    label={student}
                    value={studentIds[index]}
                  />
                ))}
              </Select>
            </FormControl>
            {/* End Form 1 ( Child ) */}

            {/* Form 2 ( Type Of Permission ) */}
            <FormControl mb="3">
              <View style={styles.requireContainer}>
                <FormControl.Label>Type Of Permission</FormControl.Label>
                <Text style={styles.required}> *</Text>
              </View>
              <Select
                selectedValue={type}
                height="10"
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Permission"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="3" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setType(itemValue)}
                borderRadius="full"
                isReadOnly={true}
              >
                <Select.Item label="Excused" value="excused" />
                <Select.Item label="Sick Leave" value="sick" />
              </Select>
            </FormControl>
            {/* End Form 2 ( Type Of Permission ) */}

            {/* Form 3 ( Date Picker ) */}
            <FormControl mb="3">
              <View style={styles.requireContainer}>
                <FormControl.Label>From</FormControl.Label>
                <Text style={styles.required}> *</Text>
              </View>
              <DateTimePicker
                onDateChange={(date) => handleDateChange(date, "from")}
              />
            </FormControl>
            {/* End Form 3 ( Date Picker ) */}
            {/* Form 4 ( Date Picker ) */}
            <FormControl mb="3">
              <View style={styles.requireContainer}>
                <FormControl.Label>To</FormControl.Label>
                <Text style={styles.required}> *</Text>
              </View>
              <DateTimePicker
                onDateChange={(date) => handleDateChange(date, "to")}
              />
            </FormControl>
            {/* End Form 4 ( Date Picker ) */}

            {/* Form 5 ( Document Picker ) */}
            <FormControl mb="3">
              <FormControl.Label>Letter (Optional)</FormControl.Label>
              <DocumentPick />
            </FormControl>
            {/* End Form 5 ( Document Picker ) */}

            {/* Form 6 ( Commment Box ) */}
            <FormControl mb="3">
              <FormControl.Label>Note</FormControl.Label>
              <TextArea
                h={40}
                placeholder="Leave a note"
                value={note} // Bind the value of the TextArea to the 'note' state
                onChangeText={handleNoteChange} // Handle changes to the TextArea
              />
            </FormControl>
            {/* End Form 6 ( Comment Box ) */}

            <Button
              onPress={handleSubmitButton}
              borderRadius="full"
              mt="5"
              style={styles.submitbutton}
            >
              <Text style={styles.submit}>Submit</Text>
            </Button>
          </ScrollView>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  submitbuttonLayout: {
    borderRadius: Border.br_xl,
    flexDirection: "row",
  },
  inputformFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  maincontentFlexBox: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  childLayout: {
    minWidth: 200,
    alignSelf: "stretch",
  },
  to1Typo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "left",
  },
  selectSpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  inputBorder: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.singleToneWhite,
    borderWidth: 1,
    borderColor: Color.mutedMuted300,
    borderStyle: "solid",
    borderRadius: Border.br_9980xl,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  placeholderTypo: {
    color: Color.textText900,
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "left",
    flex: 1,
  },
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  requireContainer: {
    flexDirection: "row",
  },
  required: {
    color: "red",
  },
  placeholderTypo1: {
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 18,
  },
  textLayout: {
    width: 212,
    lineHeight: 21,
    fontSize: FontSize.textMediumSm14_size,
    fontFamily: FontFamily.textRegularSm14,
  },
  backicon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  permission1: {
    fontSize: 20,
    lineHeight: 22,
    color: Color.colorMidnightblue,
    textAlign: "left",
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
  },
  permission: {
    width: 281,
    justifyContent: "center",
    alignItems: "center",
  },
  historyicon: {
    width: 26,
    height: 26,
  },
  herocontent: {
    height: 46,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  child1: {
    alignSelf: "stretch",
    flex: 1,
  },
  child: {
    alignItems: "center",
    flexDirection: "row",
  },
  placeholder: {
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 18,
  },
  cursor: {
    backgroundColor: Color.primaryPrimary700,
    width: 1,
    marginLeft: 8,
    display: "none",
    height: 18,
  },
  newinputform: {
    borderWidth: 1,
    borderColor: "#d9d9d9",
    height: 40,
    borderRadius: 99999999,
    justifyContent: "center",
    paddingLeft: 10,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.textRegularXs12_size,
  },
  icons: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  inputField: {
    minWidth: 220,
  },
  labelAndContaier: {
    minWidth: 220,
    alignSelf: "stretch",
  },
  inputRounded: {
    borderRadius: Border.br_9980xl,
    alignSelf: "stretch",
  },
  inputRoundedWrapper: {
    alignItems: "center",
  },
  inputform1: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  typeOfPermission1: {
    height: 15,
    flex: 1,
  },
  chevronDownIcon: {
    marginLeft: 4,
  },
  labelAndContaier1: {
    alignSelf: "stretch",
  },
  select: {
    borderRadius: Border.br_9980xl,
  },
  inputform2: {
    paddingBottom: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
  placeholder2: {
    fontWeight: "500",
    fontFamily: FontFamily.textMediumSm14,
  },
  inputField2: {
    minWidth: 210,
  },
  to1: {
    height: 18,
    flex: 1,
  },
  letterOptional: {
    minWidth: 200,
    alignSelf: "stretch",
  },
  placeholder4: {
    marginLeft: 8,
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 18,
  },
  inputform5: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  note: {
    alignSelf: "stretch",
  },
  frame: {
    height: 18,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  leaveAComment: {
    color: Color.textLightSecondary,
    fontSize: FontSize.textRegularXs12_size,
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 18,
    textAlign: "left",
    flex: 1,
  },
  scroll: {
    backgroundColor: Color.textDarkSecondary,
    width: 8,
    height: 99,
    marginLeft: 4,
    borderRadius: Border.br_9980xl,
  },
  leaveACommentParent: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.textText50,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.mutedMuted300,
    borderStyle: "solid",
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  errorText: {
    color: Color.textDarkSecondary,
    textAlign: "left",
  },
  counterText: {
    textAlign: "right",
    color: Color.textLightSecondary,
  },
  helperText: {
    marginTop: 4,
    display: "none",
    flexDirection: "row",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  textArea: {
    height: 141,
    minWidth: 220,
  },
  inputform: {
    minHeight: 500,
    flex: 1,
  },
  submit: {
    color: Color.singleToneWhite,
    textAlign: "center",
    fontSize: FontSize.textMediumSm14_size,
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
    flex: 1,
  },
  submitbutton: {
    backgroundColor: Color.colorTomato,
    height: 41,
    padding: Padding.p_3xs,
    minWidth: 220,
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  maincontent: {
    paddingLeft: 7,
    paddingRight: Padding.p_5xs,
    minHeight: 600,
    overflow: "hidden",
    flex: 1,
  },
  content: {
    top: 50,
    height: "100%",
    maxHeight: 750,
    flex: 1,
  },
  childPermissionAddPermis: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    height: 844,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_23xl,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
});

export default ChildPermissionAddPermis;
