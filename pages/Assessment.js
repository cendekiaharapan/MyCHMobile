import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
// import Calender from "./Calender";
import DropDown from "../components/DropDown";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
// import React, { useState } from "react";

const Assessment = () => {
  const navigation = useNavigation();
  const Assessment = () => {
    const [isTextClicked, setIsTextClicked] = useState(false);

    const handleTextClick = () => {
      setIsTextClicked(!isTextClicked);
    };
  };

  return (
    <NativeBaseProvider>
      <View style={styles.assessment}>
        <View style={styles.frameParent}>
          <View style={styles.groupChild} />
          <Image
            style={styles.ictwotoneArrowBackIcon}
            contentFit="cover"
            source={require("../assets/ictwotonearrowback.png")}
          />

          <View style={styles.groupParent}>
            <View style={[styles.btnprimary, styles.btnprimaryLayout]}>
              <Pressable
                style={[styles.btnprimaryChild, styles.btnprimaryLayout]}
                onPress={() => navigation.navigate("ListOfSubjectAssessment")}
              />
              <Text style={styles.submit}>Submit</Text>
            </View>
            <View style={styles.selectSessionParent}>
              <Text style={[styles.selectSession, styles.selectTypo]}>
                Select Session
              </Text>
              <DropDown value="Kiko" />
            </View>
          </View>

          <View style={styles.selectSemesterParent}>
            <Text style={[styles.selectSemester, styles.selectTypo]}>
              Select Semester
            </Text>
            <View style={[styles.groupContainer, styles.inputWrapperPosition]}>
              <View style={[styles.groupView, styles.viewLayout]}>
                <View style={[styles.groupView, styles.viewLayout]}>
                  <View style={[styles.groupView, styles.viewLayout]}>
                    <View style={[styles.inputInner, styles.viewLayout]} />
                  </View>
                </View>
                <Text style={styles.midSemester1}>Mid Semester 1</Text>
              </View>
              <View style={[styles.inputParent, styles.viewLayout]}>
                <View style={[styles.groupView, styles.viewLayout]}>
                  <View style={[styles.rectangleView, styles.viewLayout]} />
                </View>
                <Text style={[styles.semester1, styles.semesterPosition]}>
                  Semester 1
                </Text>
              </View>
            </View>
            <Pressable onPress={handleTextClick}>
              <View style={[styles.groupParent1, styles.inputWrapperPosition]}>
                <View style={[styles.groupView, styles.viewLayout]}>
                  <View style={[styles.groupView, styles.viewLayout]}>
                    <View style={[styles.groupView, styles.viewLayout]}>
                      <View style={[styles.inputInner, styles.viewLayout]} />
                    </View>
                  </View>
                  <Text style={styles.midSemester1}>Mid Semester 2</Text>
                </View>
                <View style={[styles.inputParent, styles.viewLayout]}>
                  <View style={[styles.groupView, styles.viewLayout]}>
                    <View style={[styles.inputInner, styles.viewLayout]} />
                  </View>
                  <Text style={[styles.semester2, styles.semesterPosition]}>
                    Semester 2
                  </Text>
                </View>
              </View>
            </Pressable>
          </View>

          <Text style={[styles.weeklyReport, styles.allFlexBox]}>
            Term Assessment
          </Text>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  btnprimaryLayout: {
    height: 50,
    left: 0,
    position: "absolute",
    width: 290,
  },
  selectTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.bodyBodyXS_size,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputWrapperPosition: {
    height: 40,
    left: 0,
    position: "absolute",
  },
  inputPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 79,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  allFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  bxsdownIconPosition: {
    height: 12,
    top: "50%",
    marginTop: -6.5,
    position: "absolute",
    overflow: "hidden",
  },
  viewLayout: {
    width: 136,
    height: 40,
    top: 0,
    position: "absolute",
  },
  semesterPosition: {
    width: 79,
    marginLeft: -39.74,
    top: 12,
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -38.24,
    width: 108,
    height: 22,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  ictwotoneArrowBackIcon: {
    width: 24,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  btnprimaryChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorTomato_200,
    top: 0,
  },
  submit: {
    top: 14,
    left: 120,
    fontSize: FontSize.size_sm,
    width: 53,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  btnprimary: {
    top: 349,
    left: 10,
  },
  selectSession: {
    width: 86,
    color: Color.colorBlack,
  },
  inputChild: {
    width: 287,
  },
  all: {
    top: 8,
    left: 16,
    width: 192,
    height: 30,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.bodyBodyXS_size,
  },
  bxsdownArrowIcon: {
    left: 259,
    width: 12,
  },
  input: {
    width: 287,
    top: 0,
  },
  inputWrapper: {
    top: 26,
    width: 287,
  },
  selectSessionParent: {
    height: 66,
    width: 287,
    top: 91,
    left: 0,
    position: "absolute",
  },
  inputItem: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 298,
  },
  academicYear20232024: {
    top: 11,
    left: 14,
    width: 203,
    height: 18,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.bodyBodyXS_size,
  },
  bxsdownArrowIcon1: {
    left: 269,
    width: 13,
  },
  inputContainer: {
    width: 298,
    top: 0,
  },
  groupWrapper: {
    top: 117,
    width: 298,
  },
  selectSemester: {
    width: 97,
    color: Color.colorBlack,
  },
  inputInner: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: 79,
    width: 136,
    left: 0,
  },
  groupView: {
    left: 0,
  },
  midSemester1: {
    marginLeft: -59.88,
    width: 122,
    top: 12,
    color: Color.colorBlack,
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorTomato_100,
    borderRadius: 79,
    width: 136,
    left: 0,
  },
  semester1: {
    color: Color.colorWhite,
    width: 79,
    marginLeft: -39.74,
  },
  inputParent: {
    left: 162,
  },
  groupContainer: {
    top: 28,
    width: 298,
  },
  semester2: {
    color: Color.colorBlack,
  },
  groupParent1: {
    top: 80,
    width: 298,
  },
  selectSemesterParent: {
    top: 187,
    height: 131,
    width: 298,
    left: 20,
    position: "absolute",
  },
  weeklyReport: {
    left: 78,
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    color: Color.colorMidnightblue,
    width: 185,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    height: 22,
    top: 0,
  },
  groupParent: {
    left: 17,
    height: 318,
    width: 298,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    height: 399,
    width: 322,
  },
  assessment: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 700,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 47,
    overflow: "hidden",
  },
});

export default Assessment;
