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
        <Text style={styles.subject}>{subject}</Text>
        <Text style={styles.topic}>{topic}</Text>
        <Text style={styles.comment}>{comment}</Text>
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
    paddingVertical: 10,
  },
  frame: {
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    height: 150,
    position: "relative",
    width: "100%",
    backgroundColor: Color.colorGray_100,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardShadowBox: {
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
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
  subject: {
    top: "20%",
    left: "5%",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs, // Mengurangi ukuran font untuk subject
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  topic: {
    top: "35%",
    left: "5%",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs, // Mengurangi ukuran font untuk topic
    textAlign: "left",
    position: "absolute",
    width: "90%",
  },
  comment: {
    top: "50%",
    left: "5%",
    fontFamily: FontFamily.poppinsLight, // Mengganti tebal tulisan comment
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs, // Mengurangi ukuran font untuk comment
    textAlign: "left",
    position: "absolute",
    width: "60%",
  },
  scoreContainer: {
    flexDirection: "column", // Menyesuaikan dengan permintaan
    position: "absolute",
    top: "20%",
    left: "70%",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 50, // Menyesuaikan dengan permintaan
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  scoreLabel: {
    marginBottom: 5, // Menambahkan jarak antara label dan angka score
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
