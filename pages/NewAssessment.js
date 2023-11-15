import React, { useState, useCallback, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, NativeBaseProvider, Box, Select, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import DropDown from "../components/DropDownTerm";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { retrieveItem } from "../database/database";

import axios from "axios";

const NewAssessment = () => {
  const [academicSessions, setAcademicSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [termSessions, setTermSessions] = useState([]);
  const [filteredTermSessions, setFilteredTermSessions] = useState([]);
  const [studentIds, setStudentIds] = React.useState([]); // State to store student IDs
  const [studentNames, setStudentNames] = React.useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const navigation = useNavigation();
  const [selectedStudentName, setSelectedStudentName] = useState("");
  const [selectedSemesterName, setSelectedSemesterName] = useState("");
  const [selectedSessionName, setSelectedSessionName] = useState("");

  const handleSubmit = () => {
    if (selectedStudent && selectedSession) {
      // Prepare data for the post request
      console.log("Selected AAAA: " + selectedSemester);
      const postData = {
        session: selectedSession,
        semester: selectedSemester, // Hardcoded semester value
        id: selectedStudent,
      };

      axios
        .post(
          "https://www.balichildrenshouse.com/myCH/api/get-semester-assessment-report",
          postData
        )
        .then((response) => {
          console.log("XXXXXXXXXXXXXX", selectedSemesterName);
          // Navigate to AssessmentList and pass parameters
          navigation.navigate("AssessmentList", {
            selectedStudent,
            selectedSession,
            selectedStudentName,
            selectedSessionName,
            selectedSemesterName,
            selectedSemester,
          });
        })
        .catch((error) => {
          console.error("Error fetching semester assessment report:", error);
        });
    } else {
      console.warn("Please select both student and session before submitting.");
    }
  };
  useEffect(() => {
    // Fetch semester name based on selectedSemester
    const selectedSemesterData = termSessions.find(
      (semester) => semester.id === selectedSemester
    );
    if (selectedSemesterData) {
      setSelectedSemesterName(selectedSemesterData.name);
    } else {
      console.error("Selected semester data not found.");
    }
  }, [selectedSemester, termSessions]);

  React.useEffect(() => {
    // Retrieve student data from storage
    retrieveItem("childData")
      .then((data) => {
        if (data && data.length > 0) {
          const studentIds = data.map((item) => item.id);
          const studentNames = data.map((item) => item.name);
          setStudentIds(studentIds);
          setStudentNames(studentNames);

          // Assuming that the response structure is { name: "StudentName" }
          const selectedStudentData = data.find(
            (student) => student.id === selectedStudent
          );
          if (selectedStudentData) {
            setSelectedStudentName(selectedStudentData.name);
          } else {
            console.error("Selected student data not found.");
          }
        } else {
          console.log("No data found in SQLite.");
        }
      })
      .catch((error) => {
        console.error("Error fetching response data from SQLite:", error);
      });
  }, [selectedStudent]);

  useEffect(() => {
    axios
      .get("https://www.balichildrenshouse.com/myCH/api/get-academic-sessions")
      .then((response) => {
        setAcademicSessions(response.data);

        // Assuming that the response structure is { name: "SemesterName" }
        const sessions = response.data;
        const selectedSessionIndex = sessions.findIndex(
          (session) => session.id === selectedSession
        );
        if (selectedSessionIndex !== -1) {
          setSelectedSessionName(sessions[selectedSessionIndex].name);
        }
      })
      .catch((error) => {
        console.error("Error fetching academic sessions: ", error);
      });
  }, [selectedSession]);

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
            console.log("ini isi term response dataXXXXXX", termsResponse.data);
            setFilteredTermSessions(termsResponse.data);
            setTermSessions(termsResponse.data);
          } else {
            console.error(
              "Error fetching term sessions: Response data is undefined"
            );
          }
        })
        .catch((error) => {
          showToast();
        });
    }
  }

  const handleAcademicSessionChange = (itemId) => {
    setSelectedSession(itemId);

    console.log("set selected section (itemId) = ", itemId);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.mainContainer}>
        <View style={styles.bodyContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.ictwotoneArrowBackIcon}
                contentFit="cover"
                source={require("../assets/ictwotonearrowback.png")}
              />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>Term Assessment</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.dropDownContainer}>
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
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.roundedButton}
                onPress={handleSubmit}
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
  selectSession: {
    position: "relative",
    fontSize: 9,
    letterSpacing: -0.2,
    lineHeight: 9,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.blue2,
    textAlign: "left",
  },
  selectSessionParent: {
    width: 330,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
  },
  frame3: {
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 0,
  },
  mainContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 0.53,
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  headerContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    flex: 0.9,
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageContainer: {
    marginLeft: 5,
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
  roundedButton: {
    flex: 1,
    borderRadius: 25, // Use half of the height to create a perfect circle
    backgroundColor: "#FC4B41",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Your-Font-Family", // Replace with your actual font family
    color: "white", // Change text color if needed
  },
  dropDownContainer: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 50,
  },
});

export default NewAssessment;
