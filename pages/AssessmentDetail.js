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
import Header from "../components/Header";
import Criteria from "../components/Criteria";

const AssessmentDetail = () => {
    const assessmentData = {
        "id": 996,
        "teacher_id": 2018,
        "class_id": 1,
        "title": "English",
        "code": "CH010101",
        "type": 0,
        "active": 1,
        "moodle_id": 964,
        "remedial_moodle_id": 1127,
        "created_at": "2019-07-05 01:46:16",
        "updated_at": "2023-06-28 03:14:52",
        "avg_score": 83.2,
        "final_score": "90",
        "score_semester": null,
        "booklet": "60",
        "presentation": "",
        "subject_integration": "90",
        "progress_test": "95",
        "mid_block_assessment": 60,
        "final_block_assessment": 90,
        "remarks": "",
        "mock_test": "30",
        "semester": "Semester 2",
        "session": "Academic Year 2023/2024"
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
              {assessmentData && (
                <Text style={styles.titleStyle}>{assessmentData.title}</Text>
              )}
            </View>
          </View>

          {assessmentData && (
            <Header assessmentData={assessmentData} title={assessmentData.title} score={assessmentData.avg_score} />
          )}

          <View style={styles.mainContainer}>
            <View style={styles.container}>
              <View style={[styles.column, styles.marginRight, styles.marginBottom]}>
              <AsessmentComponent
            Text_Criteria="Booklet"
            score={assessmentData?.booklet}
          />
          <AsessmentComponent
            Text_Criteria="Subject Integration"
            score={assessmentData?.subject_integration}
          />
          <AsessmentComponent
            Text_Criteria="Progression Test"
            score={assessmentData?.progress_test}
          />
               <AsessmentComponent
            Text_Criteria="Final Block Assessment"
            score={assessmentData?.final_block_assessment}
          />
          
        </View>
              <View style={[styles.column, styles.marginBottom]}>
              <AsessmentComponent
            Text_Criteria="Presentation"
            score={assessmentData?.presentation}
          />
          <AsessmentComponent
            Text_Criteria="Mock Test"
            score={assessmentData?.mock_test}
          />
          <AsessmentComponent
            Text_Criteria="Average Daily Score"
            score={assessmentData?.avg_score}
          />
            <AsessmentComponent
            Text_Criteria="Mid Block Assessment"
            score={assessmentData?.mid_block_assessment}
          />
     
        </View></View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: -5,
        alignContent: "center",
        justifyContent: "center",
      },
      column: {
        flex: 1,
        paddingVertical: 10,
        
      },
      marginRight: {
        marginRight: 20,
        alignContent: "center",
        justifyContent: "center",
    },
    marginBottom: {
       paddingBottom: 50,
       paddingRight: 70,
       alignContent: "center",
    },

  bodyContainer: {
    flex: 0.53,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    alignContent: "center",
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
