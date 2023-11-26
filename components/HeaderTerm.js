import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Header = (assessmentData) => {
  return (
    <View style={styles.header}>
      {assessmentData && (
        <>
          {console.log(assessmentData)}
          <View style={styles.BlueContainer}>
            <View style={styles.TextContainer}>
              <Text style={styles.AcademicStyles}>
                {assessmentData.assessmentData.session}
              </Text>
              <Text style={styles.SubjectTitle}>
                {assessmentData.assessmentData.title}
              </Text>
              <Text style={styles.SemesterStyles}>
                {assessmentData.assessmentData.semester}
              </Text>
            </View>
            <View style={styles.ScoreContainer}>
              <Text style={styles.ScoreNumber}>
                {assessmentData.assessmentData.final_score}
              </Text>
              <Text style={styles.FinalScores}>Final Score</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    position: "absolute",
    marginRight: 50,
  },
  semester1Typo: {
    fontSize: FontSize.size_xs,
    left: 20,
    textAlign: "left",
    position: "absolute",
  },
  headerChild: {
    top: 0,
    left: 0,
    borderRadius: 15,
    position: "absolute",
    height: 100,
    width: 350,
  },
  mathematic: {
    top: "34.5%",
    left: "5.71%",
    fontSize: 24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
    width: 250,
  },
  text: {
    top: "9.5%",
    left: "73.71%",
    fontSize: 48,
  },
  semester1: {
    top: 64,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 20,
  },
  academicYear20232024: {
    top: 22,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#211b3d",
  },
  finalScore: {
    top: "64.5%",
    left: "67.14%",
    fontSize: 18,
  },
  header: {
    left: 10,
    marginTop: 30,
    marginBottom: 25,
    height: 100,
    width: 350,
  },
  BlueContainer: {
    flex: 1,
    flexDirection: "row",
  },
  TextContainer: {
    flex: 1,
  },
  ScoreContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.3,
    bottom: 20,
  },
  AcademicStyles: {
    fontSize: 12,
    fontFamily: FontFamily.poppinsMedium,
  },
  SubjectTitle: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsBold,
  },
  SemesterStyles: {
    fontSize: 12,
    fontFamily: FontFamily.poppinsBold,
  },
  ScoreNumber: {
    fontSize: 36,
    fontFamily: FontFamily.poppinsBold,
  },
  FinalScores: {
    bottom: 2,
    fontSize: 13,
    fontFamily: FontFamily.poppinsBold,
  },
});

export default Header;
