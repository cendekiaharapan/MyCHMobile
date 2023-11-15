import React, { useState, useCallback, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import { NativeBaseProvider, FormControl } from "native-base";
import axios from "axios";
import ListComponent from "../components/ListComponent";
import { FontFamily, Color, FontSize } from "../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";

const AssessmentList = ({ route }) => {
  const navigation = useNavigation();
// Use useRoute to get route information
  const { selectedStudent, selectedSession, selectedSessionName, selectedStudentName, selectedSemesterName, selectedSemester} = route.params || {};
  const [assessmentData, setAssessmentData] = useState([]);
  const navigateToAssessmentDetail = (subject) => {
    subject.session = selectedSessionName;
    subject.semester = selectedSemesterName;
    console.log("AssessmentData being passed to AssessmentDetail.js:", assessmentData);
    console.log("Subject being passed to AssessmentDetail.js:", subject);
    navigation.navigate("AssessmentDetail", { subject, data: assessmentData});
  };


  useEffect(() => {
    axios.post("https://www.balichildrenshouse.com/myCH/api/get-semester-assessment-report", {
      session: selectedSession,
      semester: selectedSemester,
      id: selectedStudent,
    })
    .then(response => {
      setAssessmentData(response.data[0]);
    })
    .catch(error => {
      console.error("Error fetching assessment data:", error);
    });
  }, [selectedStudent, selectedSemester, selectedSession]);

  return (
    <NativeBaseProvider>
      <View style={styles.mainContainer}>
        <View style={styles.bodyContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
            <Pressable
              style={styles.imageContainer}
              onPress={() => navigation.navigate("NewAssessment")} // Navigate to "NewAssessment" screen
            >
              <Image
                style={styles.ictwotoneArrowBackIcon}
                contentFit="cover"
                source={require("../assets/ictwotonearrowback.png")}
              />
            </Pressable>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>Term Assessment</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
          
            <FormControl mb="3">
              <FormControl.Label>Student</FormControl.Label>
              <Text>{selectedStudentName}</Text>
            </FormControl>
            <FormControl mb="3">
              <FormControl.Label>Session</FormControl.Label>
              <Text>{selectedSessionName}</Text>
            </FormControl>
            <FormControl mb="3">
              <FormControl.Label>Semester</FormControl.Label>
              <Text>{selectedSemesterName}</Text>
            </FormControl>
            
          </View>
          <View style={styles.scrollContainer}>
            <ScrollView style={styles.scrollView}>
            {assessmentData.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => navigateToAssessmentDetail(item)}
              >
                <ListComponent
                  subject={item.title}
                  score={item.final_score}
                />
              </Pressable>
            ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  FormTitle: {
    textAlign: "left",
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 5,
    color: "#000", // You can change the text color
  },
   
scrollContainer: {
    flex: 1,
  },
  
  scrollView: {
    flex: 1,
  },    
  mainContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
  },
  headerContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    flex: 0.35,
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

export default AssessmentList;
