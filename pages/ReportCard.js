import React, { useEffect, useState } from 'react';
import { Image, Linking } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button, NativeBaseProvider, Box, Select, Center } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios'; // Import Axios
import { FontFamily, Color, FontSize, Padding, Border } from '../GlobalStyles';
import Toast  from 'react-native-toast-message';
import { retrieveItem } from "../database/database";

const ReportCard = () => {
  const [academicSessions, setAcademicSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [termSessions, setTermSessions] = useState([]);
  const [filteredTermSessions, setFilteredTermSessions] = useState([]);
  const [reportCardUrl, setReportCardUrl] = useState('https://www.balichildrenshouse.com/myCH/student-report-card');
  const [studentIds, setStudentIds] = React.useState([]); // State to store student IDs
  const [studentNames, setStudentNames] = React.useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  
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
      });
  }, []);

  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Academic Session',
      text2: 'There are no terms for this academic session',
      position: 'top', 
    });
  };

  useEffect(() => {
    axios.get('https://www.balichildrenshouse.com/myCH/api/get-academic-sessions')
      .then(response => {
        setAcademicSessions(response.data);
      })
      .catch(error => {
        console.error('Error fetching academic sessions: ', error);
      });
  }, []);

  function fetchAndSetTermSessions(selectedSession) {
    console.log("inside ftech and set term session id : ",selectedSession);
    if (selectedSession) {
      console.log("SELECTED ACADEMIC SESSION NOT NULL!");
      axios.get(`https://www.balichildrenshouse.com/myCH/api/get_session_terms/${selectedSession}`)
        .then((termsResponse) => {
          if (termsResponse && termsResponse.data) {
            console.log("ini isi term response data", termsResponse.data);
            setFilteredTermSessions(termsResponse.data);
            setTermSessions(termsResponse.data);

          } else {  
            console.error('Error fetching term sessions: Response data is undefined');
          }
        })
        .catch((error) => {
          showToast();
        });
      }
    }

    const handleAcademicSessionChange = (itemId) => {
      setSelectedSession(itemId);
      
      console.log("set selected section (itemId) = ",itemId);
    };  

  const handleViewReportCard = () => {
    // You can change this to your desired student ID
    const url = `https://www.balichildrenshouse.com/myCH/api/getacademicreport/${selectedStudent}/${selectedSession}/${selectedSemester}`;

    axios.get(url)
      .then(response => {
        // Handle the response data as needed
        

        // Open the URL in the default web browser
        Linking.openURL(url); // Replace 'url' with the actual response field that contains the URL
      })
      .catch(error => {
        console.error('Error fetching academic report: ', error);
      });
  };
  return (
    <NativeBaseProvider>
      <View style={styles.reportCard}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require('../assets/frame.png')}
            />
 <View style={styles.reportCardWrapper}>
              <Text style={styles.reportCard1}>Report Card</Text>
            </View>
          </View>
        </View>
        <View style={styles.frame2}>
          <LinearGradient
            style={styles.menu}
            locations={[0, 1]}
            colors={['#fff', 'rgba(255, 255, 255, 0)']}
          >
            <View style={styles.frame3}>
              <View style={styles.selectSessionParent}>
              <Text style={styles.selectSession}>Select Student</Text>
                  {/* New Select component for students */}
                  <Select
                    minWidth="275"
                    accessibilityLabel="Choose Student"
                    placeholder="Choose Student"
                    onValueChange={(studentId) => {
                      setSelectedStudent(studentId);
                    }}
                  >
                    {studentNames.map((student, index) => (
                      <Select.Item key={studentIds[index]} label={student} value={studentIds[index]} />
                    ))}
                  </Select>
                </View>
              <View style={styles.selectSessionParent}>
                <Text style={styles.selectSession}>Select Session</Text>
                <Center> 
                <Select
                
                minWidth="275"
                accessibilityLabel="Choose Session"
                placeholder="Choose Session"
                onValueChange={(itemId) => {
                  // console.log("set selected session id : ",itemId);
                  // console.log("value of selected session id : ",selectedSession);
                  fetchAndSetTermSessions(itemId);
                  setSelectedSession(itemId);
                  }}>
                {academicSessions.map(session => (
                  <Select.Item key={session.id} label={session.name} value={session.id} />
                ))}
              </Select>
              </Center>
              </View>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/vector-8.png')}
              />
            </View>
            <View style={styles.selectSemesterParent}>
              <Text style={styles.selectSession}>Select Semester</Text>
              <Center> 
              {academicSessions.length > 0 && (
              <Select
              selectedValue={selectedSemester}
              minWidth="275"
              accessibilityLabel="Choose Semester"
              placeholder="Choose Semester"
              onValueChange={(itemValue) => {
                setSelectedSemester(itemValue);
                console.log('Selected Semester:', itemValue);
              }}
            >
              {filteredTermSessions.map((term) => (
                <Select.Item key={term.id} label={term.name} value={term.id} />
              ))}
            </Select>
            )}

              </Center>
            </View>
            <View style={styles.buttonCariTiket}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  style={{
                    ...styles.viewReportCard,
                    backgroundColor: Color.colorTomato,
                    width: 200,
                    height: 40,
                  }}
                  onPress={handleViewReportCard}
                >
                  <Text style={{ color: Color.colorWhite }}>VIEW REPORT CARD</Text>
                </Button>
              </View>
            </View>
          </LinearGradient>
        </View>
       
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "relative",
    width: 24,
    height: 31,
    overflow: "hidden",
  },
  reportCard1: {
    position: "relative",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
    width: 136,
  },
  reportCardWrapper: {
    height: 25,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 70,
  },
  frame1: {
    width: 231,
    height: 31,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 93,
  },
  frame: {
    width: 360,
    height:50,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
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
  selectSessionParent: {
    width: 285,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
  },
  frameChild: {
    position: "relative",
    width: 287,
    height: 0,
  },
  frame3: {
    width: 287,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 0,
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
    position: "relative",
    fontSize: 11,
    lineHeight: 9,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  buttonCariTiket: {
    borderRadius: 50,
    backgroundColor: Color.colorTomato,
    width: 182,
    height: 37,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },  
  menu: {
    borderRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 317,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingTop: Padding.p_xl,
    paddingRight: 15,
    paddingBottom: Padding.p_xl,
    backgroundColor: "transparent",
  },
  frame2: {
    width: 324,
    overflow: "hidden",
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
    width: "100%",
    height: 800,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
  },
});

export default ReportCard;