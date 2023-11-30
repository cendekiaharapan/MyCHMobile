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
import { NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
// import Calender from "./Calender";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
// import React, { useState } from "react";
import AsessmentComponent from "../components/AsessmentComponent";
import Header from "../components/HeaderTerm";
import Criteria from "../components/Criteria";
import axios from "axios";

const AssessmentDetail = ({ route, navigation }) => {
  const {
    selectedStudent,
    selectedSession,
    selectedSessionName,
    selectedStudentName,
    selectedSemesterName,
    selectedSemester,
    chosenStudentData
  } = route.params || {};
  const [loading, setLoading] = useState(true);
  const [scoring, setScoring] = useState(null);

  const assessmentData = route.params.subject;

  const handleBackButton = () => {
    navigation.navigate("AssessmentList", {
      selectedStudent,
      selectedSession,
      selectedStudentName,
      selectedSessionName,
      selectedSemesterName,
      selectedSemester,
      chosenStudentData
    });
  };

  useEffect(() => {
    console.log("selectedStudentData", chosenStudentData)
    if (chosenStudentData) {
      axios.get(`https://www.balichildrenshouse.com/myCH/api/scoring/${chosenStudentData.class_id}`)
        .then(response => {
          console.log(`https://www.balichildrenshouse.com/myCH/api/scoring/${chosenStudentData.class_id}`, "response", response)
          setScoring(response.data.data);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          console.error(error)
        });
        setLoading(false);
    }
  }, [selectedStudent]);

  return (
    <NativeBaseProvider>
      <View style={styles.mainContainer}>
        <View style={styles.bodyContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleBackButton}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.ictwotoneArrowBackIcon}
                  contentFit="cover"
                  source={require("../assets/ictwotonearrowback.png")}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              {assessmentData && (
                <Text style={styles.titleStyle}>Term Asessment</Text>
              )}
            </View>
          </View>

          {assessmentData && (
            <Header
              assessmentData={assessmentData}
            />
          )}

          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <View style={[styles.column]}>
                {scoring && scoring.booklet > 0 && (<AsessmentComponent
                  Text_Criteria="Booklet"
                  score={assessmentData?.booklet}
                />)}
                {scoring && scoring.subject_integration > 0 && (<AsessmentComponent
                  Text_Criteria="Subject Integration"
                  score={assessmentData?.subject_integration}
                />)}
                {scoring && scoring.progression_test > 0 && (<AsessmentComponent
                  Text_Criteria="Progression Test"
                  score={assessmentData?.progress_test}
                />)}
                {scoring && scoring.final_block_assessment > 0 && (<AsessmentComponent
                  Text_Criteria="Final Block Assessment"
                  score={assessmentData?.final_block_assessment}
                />)}
              </View>
              <View style={[styles.column, styles.marginBottom, {left: '5%'}]}>
                {scoring && scoring.presentation > 0 && (<AsessmentComponent
                  Text_Criteria="Presentation"
                  score={assessmentData?.presentation}
                />)}
                {scoring && scoring.mock_test > 0 && (<AsessmentComponent
                  Text_Criteria="Mock Test"
                  score={assessmentData?.mock_test}
                />)}
                {scoring && Number(scoring.daily_post) > 0 && (<AsessmentComponent
                  Text_Criteria="Average Daily Score"
                  score={assessmentData?.avg_score}
                />)}
                {scoring && Number(scoring.mid_block_assessment) > 0 && (<AsessmentComponent
                  Text_Criteria="Mid Block Assessment"
                  score={assessmentData?.mid_block_assessment}
                />)}
              </View>
            </View>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    paddingLeft: '3%',
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,

    justifyContent: "center",
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
    margin: -5,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Your-Font-Family", // Replace with your actual font family
    color: "white", // Change text color if needed
  },
});

export default AssessmentDetail;
