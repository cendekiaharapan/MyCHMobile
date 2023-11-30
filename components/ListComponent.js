import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const ListComponent = ({ subject, score }) => {
  return (
    <View style={styles.listComponent}>
      <Image
        style={styles.listComponentChild}
        contentFit="cover"
        source={require("../assets/frame-27.png")}
      />
      <Text style={[styles.textSubject, styles.textTypo1]} numberOfLines={1}>{subject}</Text>
      <Text style={[styles.text, styles.textTypo2]}>{parseFloat(score).toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    left: "6.25%",
  },
  textTypo1: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
    width:200
  },
  textTypo2: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  listComponentChild: {
    top: 0,
    left: '-3%',
    borderRadius: 1,
    height: 80,
    width: '120%',
  },
  textDescription: {
    width: "66.56%",
    top: "45%",
    fontSize: 10,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorBlack,
    textAlign: "left",
    left: "6.25%",
    position: "absolute",
  },
  textSubject: {
    top: "25%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: "6.25%",
    fontWeight: "700",
    fontSize:20
  },
  text: {
    top: "20%",
    left: "85%",
    fontSize: 30,
    textAlign: "center",
  },
  listComponent: {
    height: 80,
    width: '85%',
    borderRadius: 10,
    
    marginBottom:10,
  },
});

export default ListComponent;
