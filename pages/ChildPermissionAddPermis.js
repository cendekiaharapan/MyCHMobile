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
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import DateTimePicker from "@react-native-community/datetimepicker"; //date time picker
import DatePickerComponent from "../components/DatePicker"; // date picker
import DocumentPick from "../components/DocumentPick"; // document pick
import DropDown from "../components/DropDown";
import axios from "axios";

const ChildPermissionAddPermis = () => {
  const navigation = useNavigation();

  const [service, setService] = React.useState(""); // Initialize service state
  const [type, setType] = React.useState(""); // Initialize service state
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  const [note, setNote] = React.useState("");

  // Function to handle the selected date
  const handleDateChange = (date, field) => {
    if (field === "from") {
      setFromDate(date);
    } else if (field === "to") {
      setToDate(date);
    }
  };

  // Function to update the service state
  const handleServiceChange = (selectedService) => {
    setService(selectedService);
  };

  // Function to handle changes in the text area
  const handleNoteChange = (text) => {
    setNote(text);
  };

  const handleSubmitButton = () => {
    // Create a data object with the data to send in the request
    const data = {
      student_id: service,
      type: type,
      from_date: fromDate,
      to_date: toDate,
      note: note,
    };

    // Make a POST request to the API
    axios
      .post(
        "https://www.balichildrenshouse.com/myCHStaging/api/addChildPermission",
        data
      )
      .then((response) => {
        // Handle the success response here, e.g., show a success message or navigate to a different screen
        console.log("API response:", response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("API request error:", error);
      });

    navigation.navigate("ChildPermissionHistorys");
  };

  return (
    <NativeBaseProvider>
      <View
        style={[styles.childPermissionAddPermis, styles.submitbuttonLayout]}
      >
        <View style={styles.content}>
          {/* Hero Content */}
          <View style={[styles.herocontent, styles.inputformFlexBox]}>
            <Image
              style={styles.backicon}
              contentFit="cover"
              source={require("../assets/backicon1.png")}
            />
            <View style={styles.permission}>
              <Text style={styles.permission1}>Permission</Text>
            </View>
            <Image
              style={styles.historyicon}
              contentFit="cover"
              source={require("../assets/historyicon.png")}
            />
          </View>
          {/* End Hero Content */}
          <ScrollView>
            {/* Form 1 ( Child ) */}
            <DropDown label="Child" onServiceChange={handleServiceChange} />
            {/* End Form 1 ( Child ) */}

            {/* Form 2 ( Type Of Permission ) */}
            <FormControl mb="3">
              <FormControl.Label>Type Of Permission</FormControl.Label>
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
              <FormControl.Label>From</FormControl.Label>
              <DatePickerComponent
                onDateChange={(date) => handleDateChange(date, "from")}
              />
            </FormControl>
            {/* End Form 3 ( Date Picker ) */}
            {/* Form 4 ( Date Picker ) */}
            <FormControl mb="3">
              <FormControl.Label>To</FormControl.Label>
              <DatePickerComponent
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
    width: 15,
    height: 24,
    overflow: "hidden",
  },
  permission1: {
    fontSize: FontSize.headingMd20_size,
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
