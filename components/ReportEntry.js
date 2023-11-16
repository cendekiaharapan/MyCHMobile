// ReportEntry.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ReportEntry = ({ date, subject, topic, comment, score }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.frame, styles.frameShadowBox]}>
        <View style={styles.cardShadowBox} />
        <Text style={styles.date}>{date}</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.subject}>{subject}</Text>
          <Text style={styles.topic}>{topic}</Text>
          <Text style={styles.comment}>{comment}</Text>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>{`Score `}</Text>
          <Text style={styles.scoreText}>{score}</Text>
        </View>
        <Text style={styles.arrow}>{`>`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  frame: {
    elevation: 5,
    shadowRadius: 5,
    borderColor: "white", // Border color
    borderWidth: 1, // Border width
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.8)",
    height: "auto",
    position: "relative",
    width: "100%",
    backgroundColor: Color.colorGray_100,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardShadowBox: {
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0)", // Darker shadow color
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
    borderWidth: 1, // Border width
    bottom: 5,
    height: "90%",
    top: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: 0,
    right: 0,
    position: "absolute",
    width: "100%",
  },
  date: {
    fontSize: FontSize.size_3xs,
    left: "5%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
    top: "12%",
    width: "90%",
  },
  contentContainer: {
    flex: 1,
    padding: "5%",
    marginTop: "7%",
  },
  subject: {
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    marginBottom: "2%",
    width: "50%",
  },
  topic: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    marginBottom: "3%",
    width: "65%",
  },
  comment: {
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    width: "65%",
    color: "green",
    marginBottom: "3%",
  },
  scoreContainer: {
    flexDirection: "column",
    position: "absolute",
    top: "20%",
    left: "70%",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 50,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  scoreLabel: {
    marginBottom: 5,
    color: Color.colorBlack,
    fontSize: FontSize.bodyBodyXS_size,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  arrow: {
    top: "40%",
    left: "92%",
    color: Color.colorForestgreen_100,
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
});

export default ReportEntry;
