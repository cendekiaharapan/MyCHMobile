import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AsessmentComponent = ({ Text_Criteria, score }) => {
  return (
    <View style={styles.asessmentComponent}>
      <View style={styles.card}>
        <Text style={[styles.textCriteria, styles.centeredText]}>
          {Text_Criteria}
        </Text>
        <Text style={[styles.score, styles.centeredText]}>
          {score !== null && score !== "" ? score : "N/A"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredText: {
    textAlign: "center",
    color: Color.colorBlack,
    
  },
  card: {
    height: "105%",
    width: "105%",
    top: "0%",
    right: "0%",
    bottom: "1.64%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 29.56,
    elevation: 29.56,
    
    shadowOpacity: 1,
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  textCriteria: {
    top: "11.5%",
    fontSize: FontSize.size_2xs_6,
    fontFamily: FontFamily.poppinsRegular,
  },
  score: {
    
    
    fontSize: 25,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    
  },
  asessmentComponent: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowRadius: 0.99,
    elevation: 0.99,
    width: 152,
    height: 61,
    shadowOpacity: 1,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});

export default AsessmentComponent;
