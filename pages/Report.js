import React, { useState, useCallback, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { retrieveItem } from "../database/database.js";
import DropDown from "../components/DropDownDailyScore";
import DatePickerComponent from "../components/DatePickerDailyScore";
import axios from "axios";
import Toast from "react-native-toast-message";

const Report = () => {
  const navigation = useNavigation();
  const [studentName, setStudentName] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [studentId, setStudentId] = useState("");
  const [selectedStudentName, setSelectedStudentName] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentData, setStudentData] = useState(null);

  const showToastErrorRequired = () => {
    Toast.show({
      text1: "Please select all required fields!",
      text1Style: { fontSize: 15 },
      text2Style: { fontSize: 13 },
      type: "error",
    });
  };

  const handlePressSubmit = () => {
    // Check if all required data is available
    if (selectedStudentId && selectedStartDate && selectedEndDate) {
      // Create the JSON object
      const postData = {
        student_id: selectedStudentId,
        start_date: selectedStartDate.toISOString(),
        end_date: selectedEndDate.toISOString(),
      };

      console.log("GG", postData);

      // Send the POST request using Axios
      axios
        .post(
          "https://www.balichildrenshouse.com/myCH/api/student/scores",
          postData,
          {}
        )
        .then((response) => {
          console.log("Success:", response.data);
          handleNavigateSubmit(response.data);
          showToastSuccess();
        })
        .catch((error) => {
          showToastError();
        });
    } else {
      showToastErrorRequired();
    }
  };
  const handleSelectStudent = (studentId, studentName) => {
    setSelectedStudentId(studentId);
    setSelectedStudentName(studentName); // Set the selected student name
  };
  console.log("Bjjjjjjj: ", studentName);

  const handleSelectStudentOne = (studentId, studentName) => {
    setSelectedStudentId(studentId);
    setSelectedStudentName(studentName); // Set the selected student name
  };
  console.log("Tolong: ", studentName);

  const handleStartDateChange = (selected) => {
    setSelectedStartDate(selected);
  };

  const handleNavigateSubmit = (apiResponse) => {
    // Make sure the state is updated before accessing it
    const postData = {
      student_id: selectedStudentId,
      start_date: selectedStartDate?.toISOString(),
      end_date: selectedEndDate?.toISOString(),
    };

    console.log(
      "API ggzcxzvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv:",
      selectedStudentName
    );

    const selectedStudentData = studentData.find(
      (student) => student.id === selectedStudentId
    );

    if (selectedStudentData) {
      setSelectedStudent(selectedStudentData);
    }

    navigation.navigate("ListOfReport", {
      postData,
      selectedStudentId,
      selectedStartDate,
      selectedEndDate,
      studentName,
      apiResponse,
      selectedStudentName, // Include selectedStudentName in the navigation params
      selectedStudentData,
    });
  };

  // console.log("API gg:", apiResponse);

  const handleEndDateChange = (selected) => {
    setSelectedEndDate(selected);
  };

  const showToastSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Successfully found scores.",
    });
  };
  const showToastError = () => {
    Toast.show({
      type: "error",
      text1: "Report not found in this range date",
    });
  };

  useEffect(() => {
    retrieveItem("childData")
      .then((data) => {
        if (data && Array.isArray(data)) {
          setStudentData(data);
          const student_names = data.map((item) => item.name);
          const student_ids = data.map((item) => item.id);
          setStudentName(student_names);
          setStudentId(student_ids);
        } else {
          console.log("No data found in AsyncStorage.");
        }
      })
      .catch((error) => {
        console.error("Error fetching response data from SQLite:", error);
      });
  }, []);

  // console.log("API Response:", apiResponse);
  return (
    <NativeBaseProvider>
      <View style={styles.report}>
        <View style={styles.frameParent}>
          <View>
          <View style={styles.weeklyReportWrapper}>
            <Text style={styles.weeklyReport}>Daily Score</Text>
          </View>
          <View style={styles.ictwotoneArrowBackParent}>
            <Pressable
              style={styles.ictwotoneArrowBack}
              onPress={() => {
                navigation.navigate("Main App Stack", {
                  screen: "BottomNavbar", // change this with your screen name
                });
              }}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ictwotonearrowback.png")}
              />
            </Pressable>
            </View>
          </View>
          <View style={styles.btnprimaryParent}>
            <View style={styles.btnprimary}>
              <Pressable
                style={styles.btnprimaryChild}
                onPress={() => navigation.navigate("ListOfReport")}
              />
            </View>
            <Text style={styles.selectSubject}>Select Child</Text>
            <DropDown
              studentNames={studentName?.length ? studentName : []}
              studentIds={studentId?.length ? studentId : []}
              onSelect={(studentId, studentName) =>
                handleSelectStudentOne(studentId, studentName)
              } // Pass the callback function
            />
            <Text style={styles.selectRangeDate}>Select Range Date</Text>
            <View style={styles.container1}>
              <DatePickerComponent
                selectedDate={selectedStartDate}
                onDateChange={handleStartDateChange}
                label="Start Date"
              />
            </View>
            <View style={styles.container1}>
              <DatePickerComponent
                selectedDate={selectedEndDate}
                onDateChange={handleEndDateChange}
                label="End Date"
                style={styles.datestyle}
              />
            </View>
            <View style={[styles.btnprimary, styles.btnprimaryLayout]}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? Color.colorTomato_300
                      : Color.colorTomato_200,
                  },
                  styles.btnprimaryChild,
                  styles.btnprimaryLayout,
                  styles.datepickst,
                ]}
                onPress={handlePressSubmit}
              >
                <Text style={styles.submit}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  ictwotoneArrowBackParent: {
    left: "3%",
    width: 24,
    height: 24,
  },
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  icon: {
    height: "100%",
  },
  frameWrapperPosition: {
    height: 24,
    top: 0,
    position: "absolute",
  },
  btnprimaryLayout: {
    height: 50,
    width: '100%',
    left: '0%',
    position: "absolute",
  },
  datepickst: {
    borderColor: "black",
  },
  datestyle: {
    borderColor: "black",
    FontSize: 20,
  },
  selectTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "center",
    position: "absolute",
  },
  inputLayout1: {
    height: 50,
    width: 285,
    left: 0,
    position: "absolute",
  },
  allTypo: {
    height: 30,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 8,
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "left",
    position: "absolute",
  },
  bxsdownIconPosition: {
    height: 12,
    width: 12,
    top: "50%",
    marginTop: -6.5,
    position: "absolute",
    overflow: "hidden",
  },
  inputGroupLayout: {
    width: 296,
    height: 100,
    position: "absolute",
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 79,
    left: 0,
  },
  inputLayout: {
    width: 135,
    height: 50,
    top: 0,
    position: "absolute",
  },
  endTypo: {
    color: Color.colorDarkgray,
    top: 3,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  weeklyReport: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    color: Color.colorMidnightblue,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
  },
  weeklyReportWrapper: {
    width: '100%',
    alignSelf: "stretch",
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  frameWrapper: {
    marginLeft: -39,
    width: 107,
    left: "50%",
  },
  ictwotoneArrowBackIcon: {
    width: 200,
    left: -20,
    overflow: "hidden",
  },
  btnprimaryChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorTomato_200,
    top: -35,
  },
  submit: {
    top: 14,
    left: '40%',
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  btnprimary: {
    top: '110%',
  },
  selectSubject: {
    fontSize: FontSize.bodyBodyXS_size,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    left: 10,
    bottom: -17,
  },
  inputChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 79,
    height: 40,
    width: 285,
    left: 0,
    top: 0,
    position: "absolute",
  },
  all: {
    left: 16,
    width: 191,
  },
  bxsdownArrowIcon: {
    left: 257,
  },
  input: {
    top: 0,
  },
  inputWrapper: {
    top: 26,
  },
  selectSubjectParent: {
    height: 66,
    width: 270,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputItem: {
    width: 296,
    height: 40,
    position: "absolute",
    top: 0,
  },
  all1: {
    left: 17,
    width: 199,
  },
  bxsdownArrowIcon1: {
    left: 267,
  },
  inputContainer: {
    left: 0,
    top: 0,
  },
  container1: {
    flex: 1,
    top: 13,
  },
  container2: {
    top: 10,
  },
  groupWrapper: {
    left: 12,
    top: 26,
  },
  selectRangeDate: {
    marginLeft: '-49%',
    top: 6,
    fontSize: FontSize.bodyBodyXS_size,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    left: "50%",
  },
  groupContainer5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  inputInner: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 79,
    left: 0,
  },
  groupContainer: {
    left: 0,
  },
  oct2023: {
    marginLeft: -31.16,
    top: 21,
    fontSize: FontSize.size_3xs,
    width: 62,
    height: 15,
    left: "50%",
  },
  groupContainer6Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer6Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  end: {
    marginLeft: -11.42,
    width: 30,
  },
  inputParent: {
    left: 161,
  },
  groupParent: {
    top: 120,
    left: 10,
  },
  btnprimaryParent: {
    top: "7%",
    left: '15%',
    height: 300,
    width: '100%'
  },
  frameParent: {
    width: '80%',
    height: '100%',
  },
  report: {
    top: "10%",
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 800,
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_26xl,
    overflow: "hidden",
  },
  headerContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    marginLeft: '1%',
    height: 24,
    width: 24,
  },
  ictwotoneArrowBackIcon: {
    height: 24,
    width: 24,
  },
  titleContainer: {
    flex: 1,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: FontFamily.poppinsBold,
  },
});

export default Report;
