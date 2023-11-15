import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Header = (assessmentData) => {


  return (
    <View style={styles.header}>
      {assessmentData && (
        <>
        {console.log(assessmentData)}
          <Text style={styles.mathematic}>{assessmentData.assessmentData.title}</Text>
          <Text style={[styles.text, styles.textTypo]}>{assessmentData.assessmentData.final_score}</Text>
          <Text style={[styles.semester1, styles.semester1Typo]}>{assessmentData.assessmentData.semester}</Text>
          <Text style={[styles.academicYear20232024, styles.semester1Typo]}>{assessmentData.assessmentData.session}</Text>
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
    height: 100,
    width: 350,
    
  },
});

export default Header;
