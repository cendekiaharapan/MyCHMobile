import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePickerComponent from "../components/DatePicker";
import DocumentPick from "../components/DocumentPick";
import DropDown from "../components/DropDown";
import axios from "axios";
import { LoadingModal } from "react-native-loading-modal";
import Toast from "react-native-toast-message";

const ChildPermissionViewHisto = ({ route, navigation }) => {
  const leave = route?.params?.leave;
  const imageUri = route?.params?.imageUri;
  const imageUrl = route?.params?.imageUrl;
  const name = route?.params?.name;
  const childId = route?.params?.childId;
  const studentGet = route?.params?.studentGet;

  const [student, setStudent] = useState("");
  const [studentName, setStudentName] = useState("");
  const [type, setType] = useState("");
  const [fromDateTime, setFromDateTime] = useState(null);
  const [toDateTime, setToDateTime] = useState(null);
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fullImageUrl = `${imageUrl}${imageUri}`;
  const toast = useToast();

  const showToastEditSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Update Successful",
    });
  };
  const showToastEditError = () => {
    Toast.show({
      type: "error",
      text1: "Update Failed",
    });
  };
  const showToastDeleteSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Delete Successful",
    });
  };
  const showToastDeleteError = () => {
    Toast.show({
      type: "error",
      text1: "Delete Failed",
    });
  };

  useEffect(() => {
    console.log("inside use effect : ", leave.id);
    if (leave) {
      setStudentName(name);
      setStudent(leave.student_id);
      setType(leave.apply_type);
      setFromDateTime(
        formatDateTime(leave.year, leave.month, leave.day, leave.from_time)
      );
      setToDateTime(
        formatDateTime(
          leave.to_year,
          leave.to_month,
          leave.to_day,
          leave.to_time
        )
      );
      setNote(leave.note);
    }
  }, [leave]);

  const formatDateTime = (year, month, day, time) => {
    if (!year || !month || !day || !time) {
      return null;
    }

    const [hour, minute] = time.split(":");
    const date = new Date(year, month - 1, day, hour, minute);

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
  };

  const handleDateTimeChange = (dateTime, field) => {
    if (field === "from") {
      setFromDateTime(dateTime);
    } else if (field === "to") {
      setToDateTime(dateTime);
    }
  };

  const handleServiceChange = (selectedService) => {
    setStudent(selectedService);
  };

  const handleStudentNameChange = (name) => {
    setStudentName(name);
  };

  const handleNoteChange = (note) => {
    setNote(note);
  };

  const handleUpdateData = () => {
    setIsLoading(true);

    const selectedChildData = studentGet.find(
      (child) => child.name === studentName
    );

    const data = {
      id: leave.id,
      student_id: selectedChildData.id,
      apply_type: type,
      from_timestamp: fromDateTime,
      to_timestamp: toDateTime,
      note: note,
    };
    console.log("inside handle update data : ", data);
    axios
      .patch("https://www.balichildrenshouse.com/myCH/api/edit-leave", data)
      .then((response) => {
        console.log("API response:", response.data);
        navigation.goBack();

        showToastEditSuccess();
      })
      .catch((error) => {
        console.error("API request error:", error);

        showToastEditError();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDeleteData = () => {
    setIsLoading(true);
    console.log("Inside Handle Delete : ", leave.id);
    const idToDelete = leave.id;

    axios
      .delete(
        `https://www.balichildrenshouse.com/myCH/api/delete_excused/${idToDelete}`
      )
      .then((response) => {
        console.log("API response:", response.data);
        navigation.goBack();

        showToastDeleteSuccess();
      })
      .catch((error) => {
        console.error("API request error:", error);

        showToastDeleteError();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <NativeBaseProvider>
      <View style={[styles.childPermissionViewHisto, styles.lineIconLayout]}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <View style={styles.backbuttonParent}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChildPermissionHistorys")}
            >
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vector5.png")}
              />
            </TouchableOpacity>
            <Text style={styles.rufusStewart}>{name}</Text>
          </View>

          <View style={styles.maincontent}>
            <ScrollView>
              <View style={styles.profilepictureParent}>
                <Image
                  style={styles.profilepictureIcon}
                  contentFit="cover"
                  source={
                    imageUri
                      ? { uri: fullImageUrl }
                      : require("../assets/profilepic.png")
                  }
                />
                <Text
                  style={[styles.januari20231120, styles.lineIconSpaceBlock]}
                >
                  {leave.created_at}
                </Text>
                <Image
                  style={[styles.lineIcon, styles.lineIconSpaceBlock]}
                  contentFit="cover"
                  source={require("../assets/line.png")}
                />
              </View>
              <View
                style={[
                  styles.permissionDetailWrapper,
                  styles.bodycontentSpaceBlock,
                ]}
              >
                <Text style={styles.permissionDetail}>Permission Detail</Text>
              </View>
              <View style={[styles.bodycontent, styles.bodycontentSpaceBlock]}>
                {console.log(
                  "inside dropdown student get ",
                  studentGet,
                  leave,
                  studentName
                )}
                <DropDown
                  label="Child"
                  leave={leave}
                  data={studentGet}
                  selected={studentName}
                  name={studentName}
                  setSelected={handleStudentNameChange}
                />
                <FormControl mb="3">
                  <FormControl.Label>Type Of Permission</FormControl.Label>
                  <Select
                    selectedValue={type}
                    height="10"
                    minWidth="200"
                    accessibilityLabel="Choose Permission"
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
                    <Select.Item label="Sick Leave" value="sick_leave" />
                  </Select>
                </FormControl>
                <FormControl mb="3">
                  <FormControl.Label>From</FormControl.Label>
                  <DatePickerComponent
                    onDateChange={(dateTime) =>
                      handleDateTimeChange(dateTime, "from")
                    }
                    dateTime={formatDateTime(
                      leave.year,
                      leave.month,
                      leave.day,
                      leave.from_time
                    )}
                  />
                </FormControl>
                <FormControl mb="3">
                  <FormControl.Label>To</FormControl.Label>
                  <DatePickerComponent
                    onDateChange={(dateTime) =>
                      handleDateTimeChange(dateTime, "to")
                    }
                    dateTime={formatDateTime(
                      leave.to_year,
                      leave.to_month,
                      leave.to_day,
                      leave.to_time
                    )}
                  />
                </FormControl>
                <FormControl mb="3">
                  <FormControl.Label>Note</FormControl.Label>
                  <TextArea
                    h={40}
                    placeholder="Leave a note"
                    value={note}
                    onChangeText={handleNoteChange}
                  />
                </FormControl>
              </View>
            </ScrollView>
          </View>
          <View style={styles.btnsaveParent}>
            <Button
              onPress={handleUpdateData}
              borderRadius="full"
              style={[styles.btnsave, styles.btnsaveFlexBox]}
            >
              <View>
                <Text style={{ color: Color.colorWhite }}>Save</Text>
              </View>
            </Button>
            <TouchableOpacity
              onPress={handleDeleteData}
              style={[styles.btndelete, styles.btnsaveFlexBox]}
            >
              <View>
                <Text style={[styles.delete, styles.deleteTypo]}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>

          <LoadingModal modalVisible={isLoading} color="red" />
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  lineIconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  contentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  lineIconSpaceBlock: {
    marginTop: 9,
    alignSelf: "stretch",
  },
  bodycontentSpaceBlock: {
    marginTop: 13,
    alignSelf: "stretch",
  },
  selectSpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  inputBorder: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xl,
    borderWidth: 1,
    borderColor: Color.mutedMuted300,
    borderStyle: "solid",
    backgroundColor: Color.singleToneWhite,
    height: 30,
    borderRadius: Border.br_9980xl,
    alignItems: "center",
    flexDirection: "row",
  },
  placeholderTypo: {
    color: Color.textText900,
    textAlign: "left",
    fontSize: FontSize.size_4xs,
  },
  cursorLayout: {
    height: 18,
    backgroundColor: Color.primaryPrimary700,
    marginLeft: 8,
    display: "none",
  },
  childTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_4xs,
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  inputfieldSpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  btndeleteBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  textLayout: {
    width: 212,
    lineHeight: 21,
    fontSize: FontSize.textMediumSm14_size,
    fontFamily: FontFamily.textRegularSm14,
  },
  btnsaveFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: Border.br_xl,
  },
  deleteTypo: {
    fontSize: FontSize.textMediumSm14_size,
    textAlign: "center",
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
    flex: 1,
  },
  rufusStewart: {
    fontSize: FontSize.headingMd20_size,
    lineHeight: 22,
    color: Color.colorMidnightblue,
    marginLeft: 100,
    textAlign: "center",
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
  },
  backbuttonParent: {
    top: 50,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  profilepictureIcon: {
    width: 85,
    height: 87,
    borderRadius: 60,
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
  },
  januari20231120: {
    color: Color.colorDarkgray_100,
    height: 11,
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
    fontSize: FontSize.size_4xs,
    marginTop: 9,
    textAlign: "center",
  },
  lineIcon: {
    maxWidth: "100%",
    height: 1,
    overflow: "hidden",
    width: "100%",
  },
  profilepictureParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  permissionDetail: {
    fontSize: FontSize.textRegularMd16_size,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
    flex: 1,
  },
  permissionDetailWrapper: {
    flexDirection: "row",
  },
  placeholder: {
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 14,
    color: Color.textText900,
    flex: 1,
  },
  cursor: {
    marginLeft: 8,
    display: "none",
    flex: 1,
  },
  icons: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  inputField: {
    alignSelf: "stretch",
  },
  labelAndContaier: {
    alignSelf: "stretch",
    flex: 1,
  },
  inputRounded: {
    height: 30,
    marginTop: 6,
    borderRadius: Border.br_9980xl,
  },
  inputfield1: {
    alignSelf: "stretch",
  },
  typeOfPermission: {
    zIndex: 0,
  },
  chevronDownIcon: {
    marginLeft: 4,
    overflow: "hidden",
  },
  select: {
    zIndex: 1,
    height: 30,
    marginTop: 6,
    borderRadius: Border.br_9980xl,
  },
  bxsdownArrow: {
    top: "50%",
    left: 292,
    width: 9,
    height: 9,
    zIndex: 2,
    marginTop: 4,
    position: "absolute",
    overflow: "hidden",
  },
  placeholder2: {
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
    flex: 1,
  },
  inputField3: {
    top: 0,
    left: 0,
    width: 352,
    position: "absolute",
  },
  labelAndContaier3: {
    alignSelf: "stretch",
    flex: 1,
  },
  playIcon: {
    overflow: "hidden",
  },
  placeholder4: {
    marginLeft: 8,
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 14,
    color: Color.textText900,
  },
  cursor4: {
    width: 1,
    marginLeft: 8,
    display: "none",
  },
  frame: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  scroll: {
    backgroundColor: Color.textDarkSecondary,
    width: 8,
    height: 99,
    marginLeft: 4,
    display: "none",
    borderRadius: Border.br_9980xl,
  },
  defaultInputMaximumHeightParent: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.textText50,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_5xs,
    borderColor: Color.mutedMuted300,
    borderWidth: 1,
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
    color: Color.textLightSecondary,
    textAlign: "right",
  },
  helperText: {
    marginTop: 4,
    display: "none",
    flexDirection: "row",
  },
  textArea: {
    flex: 1,
  },
  inputfield6: {
    flex: 1,
  },
  bodycontent: {
    flex: 1,
  },
  maincontent: {
    height: 607,
    paddingHorizontal: 0,
    paddingVertical: 13,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  saveChanges: {
    color: Color.singleToneWhite,
  },
  btnsave: {
    backgroundColor: Color.colorTomato,
  },
  delete: {
    color: Color.colorGray_200,
  },
  btndelete: {
    borderColor: Color.colorGray_200,
    marginLeft: 23,
    borderWidth: 1,
    borderStyle: "solid",
    paddingTop: 10,
  },
  btnsaveParent: {
    bottom: 30,
    height: 41,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  content: {
    flex: 1,
  },
  childPermissionViewHisto: {
    backgroundColor: Color.colorGray_100,
    height: 844,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_23xl,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    borderRadius: Border.br_xl,
    width: "100%",
  },
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

export default ChildPermissionViewHisto;
