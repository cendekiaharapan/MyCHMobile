import React, { useEffect, useState } from "react";
import { Image, Linking } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button, NativeBaseProvider, Box, Select, Center } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios"; // Import Axios
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import Toast from "react-native-toast-message";
import { retrieveItem } from "../database/database";
import { LoadingModal } from "react-native-loading-modal";
import { useNavigation } from "@react-navigation/native";

const ReportCard = () => {
  const [academicSessions, setAcademicSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [termSessions, setTermSessions] = useState([]);
  const [filteredTermSessions, setFilteredTermSessions] = useState([]);
  const [reportCardUrl, setReportCardUrl] = useState(
    "https://www.balichildrenshouse.com/myCH/student-report-card"
  );
  const [studentIds, setStudentIds] = React.useState([]); // State to store student IDs
  const [studentNames, setStudentNames] = React.useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [loading, setLoading] = React.useState(true);
  const navigation = useNavigation();
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
        } else {
          console.log("No data found in SQLite.");
        }
      })
      .catch((error) => {
        console.error("Error fetching response data from SQLite:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "Academic Session",
      text2: "There are no terms for this academic session",
      position: "top",
    });
  };
  const showToastError = () => {
    Toast.show({
      type: "error",
      text1: "Academic Report",
      text2: "No academic report, please select another option!",
      position: "top",
    });
  };
  const showToastSuccess = () => {
    Toast.show({
      type: "success",
      text1: "Academic Report",
      text2: "Report card has been retrieved!",
      position: "top",
      autoHide: false,
    });
  };

  useEffect(() => {
    axios
      .get("https://www.balichildrenshouse.com/myCH/api/get-academic-sessions")
      .then((response) => {
        setAcademicSessions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching academic sessions: ", error);
      });
  }, []);

  function clearSelectedSemester() {
    // Implement the logic to clear the selected semester state
    setSelectedSemester(null);
    setFilteredTermSessions([]);
  }

  function fetchAndSetTermSessions(selectedSession) {
    console.log("inside ftech and set term session id : ", selectedSession);
    if (selectedSession) {
      console.log("SELECTED ACADEMIC SESSION NOT NULL!");
      axios
        .get(
          `https://www.balichildrenshouse.com/myCH/api/get_session_terms/${selectedSession}`
        )
        .then((termsResponse) => {
          if (termsResponse && termsResponse.data) {
            console.log("ini isi term response data", termsResponse.data);
            setFilteredTermSessions(termsResponse.data);
            setTermSessions(termsResponse.data);
          } else {
            console.error(
              "Error fetching term sessions: Response data is undefined"
            );
          }
        })
        .catch((error) => {
          setLoading(false);
          showToast();
          clearSelectedSemester();
        });
    }
  }

  const handleAcademicSessionChange = (itemId) => {
    setSelectedSession(itemId);

    console.log("set selected section (itemId) = ", itemId);
  };

  const handleBackButton = (itemId) => {
    navigation.navigate("Main App Stack", {
      screen: "BottomNavbar", // change this with your screen name
    });
  };

  const handleViewReportCard = () => {
    setLoading(true);
    // You can change this to your desired student ID
    const url = `https://www.balichildrenshouse.com/myCH/api/getacademicreport/${selectedStudent}/${selectedSession}/${selectedSemester}`;

    axios
      .get(url)
      .then((response) => {
        // Handle the response data as needed
        setLoading(false);
        showToastSuccess();
        // Open the URL in the default web browser
        Linking.openURL(url); // Replace 'url' with the actual response field that contains the URL
      })
      .catch((error) => {
        setLoading(false);
        showToastError();
        // console.error('Error fetching academic report: ', error);
      });
  };
  return (
    <NativeBaseProvider>
      <View style={styles.reportCard}>
        <LoadingModal modalVisible={loading} color="red" />
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <TouchableOpacity onPress={handleBackButton}>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
            </TouchableOpacity>
            <View style={styles.reportCardWrapper}>
              <Text style={styles.reportCard1}>Report Card</Text>
            </View>
          </View>
        </View>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <View style={styles.selectSessionParent}>
              <Text style={styles.selectSession}>Select Student</Text>
              {/* New Select component for students */}
              <Select
                minWidth="100%"
                accessibilityLabel="Choose Student"
                placeholder="Choose Student"
                onValueChange={(studentId) => {
                  setSelectedStudent(studentId);
                }}
              >
                {studentNames.map((student, index) => (
                  <Select.Item
                    key={studentIds[index]}
                    label={student}
                    value={studentIds[index]}
                  />
                ))}
              </Select>
            </View>
            <View style={styles.selectSessionParent}>
              <Text style={styles.selectSession}>Select Session</Text>
              <Center>
                <Select
                  minWidth="100%"
                  accessibilityLabel="Choose Session"
                  placeholder="Choose Session"
                  onValueChange={(itemId) => {
                    // console.log("set selected session id : ",itemId);
                    // console.log("value of selected session id : ",selectedSession);
                    fetchAndSetTermSessions(itemId);
                    setSelectedSession(itemId);
                  }}
                >
                  {academicSessions.map((session) => (
                    <Select.Item
                      key={session.id}
                      label={session.name}
                      value={session.id}
                    />
                  ))}
                </Select>
              </Center>
            </View>

            <View style={styles.selectSessionParent}>
              <Text style={styles.selectSession}>Select Semester</Text>
              <Center>
                {academicSessions.length > 0 && (
                  <Select
                    selectedValue={selectedSemester}
                    minWidth="100%"
                    accessibilityLabel="Choose Semester"
                    placeholder="Choose Semester"
                    onValueChange={(itemValue) => {
                      setSelectedSemester(itemValue);
                      console.log("Selected Semester:", itemValue);
                    }}
                  >
                    {filteredTermSessions.map((term) => (
                      <Select.Item
                        key={term.id}
                        label={term.name}
                        value={term.id}
                      />
                    ))}
                  </Select>
                )}
              </Center>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.roundedButton}
                onPress={handleViewReportCard}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    height: 50,
    width: 330,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Your-Font-Family", // Replace with your actual font family
    color: "white", // Change text color if needed
  },
  roundedButton: {
    flex: 1,
    borderRadius: 25, // Use half of the height to create a perfect circle
    backgroundColor: "#FC4B41",
    justifyContent: "center",
    alignItems: "center",
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    right: 80,
  },
  reportCard1: {
    position: "relative",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
    width: 150,
  },
  reportCardWrapper: {
    height: 25,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame1: {
    width: "100%",
    height: 31,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // marginRight: 93,
  },
  frame: {
    marginTop: 25,
    width: 360,
    height: 50,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  academicYear20232024: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 191,
    height: 30,
  },
  input: {
    borderRadius: 79,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 285,
    height: 40,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  bxsdownArrowIcon: {
    position: "relative",
    width: 12,
    height: 12,
    overflow: "hidden",
    marginLeft: -12,
  },
  frame4: {
    width: 285,
    height: 40,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 13,
  },
  frameChild: {
    position: "relative",
    width: 287,
    height: 0,
  },
  selectSession: {
    position: "relative",
    fontSize: 15,
    letterSpacing: -0.2,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.blue2,
    textAlign: "left",
  },
  selectSessionParent: {
    width: 330,
    flexDirection: "column",
    marginTop: 13,
  },
  frame3: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inputParent: {
    width: 285,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 0,
    marginTop: 4,
  },
  selectSemesterParent: {
    width: 285,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
  },
  viewReportCard: {
    flex: 1,
    borderRadius: 25, // Use half of the height to create a perfect circle
    backgroundColor: "#FC4B41",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCariTiket: {
    borderRadius: 50,
    backgroundColor: Color.colorTomato,
    width: 182,
    height: 37,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  menu: {
    borderRadius: 7,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingTop: Padding.p_xl,
    paddingRight: 15,
    paddingBottom: Padding.p_xl,
  },
  frame2: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 62,
  },
  reportCard: {
    position: "relative",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    // width: 350,
    // height: 800,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
  },
});

export default ReportCard;
