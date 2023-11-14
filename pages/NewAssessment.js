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
import DropDown from "../components/DropDown";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
// import React, { useState } from "react";

const NewAssessment = () => {
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
              <Text style={styles.titleStyle}>Term Assessment</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.dropDownContainer}>
              <DropDown label="Select Student" placeholder="Select Student" />
              <DropDown label="Select Subject" placeholder="Select Subject" />
              <DropDown label="Select Semester" placeholder="Select Semester" />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.roundedButton}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
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
  bodyContainer: {
    flex: 0.53,
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

export default NewAssessment;
