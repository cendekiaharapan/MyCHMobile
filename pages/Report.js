import React, { useState, useCallback } from "react";
import { NativeBaseProvider } from "native-base";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  Modal,
  FormControl,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Calender from "./Calender";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding,
  Label,
} from "../GlobalStyles";
import DropDown from "../components/DropDown";
import DatePickerComponent from "../components/Calender";

const Report = () => {
  const navigation = useNavigation();
  const [groupContainer5Visible, setGroupContainer5Visible] = useState(false);
  const [groupContainer6Visible, setGroupContainer6Visible] = useState(false);

  const openGroupContainer5 = useCallback(() => {
    setGroupContainer5Visible(true);
  }, []);

  const closeGroupContainer5 = useCallback(() => {
    setGroupContainer5Visible(false);
  }, []);

  const openGroupContainer6 = useCallback(() => {
    setGroupContainer6Visible(true);
  }, []);

  const closeGroupContainer6 = useCallback(() => {
    setGroupContainer6Visible(false);
  }, []);

  return (
    <NativeBaseProvider>
      <View style={styles.report}>
        <View style={styles.frameParent}>
          <View style={[styles.frameWrapper, styles.frameWrapperPosition]}>
            <View style={styles.weeklyReportWrapper}>
              <Text style={styles.weeklyReport}>Score Board</Text>
            </View>
          </View>
          <Image
            style={[styles.ictwotoneArrowBackIcon, styles.frameWrapperPosition]}
            contentFit="cover"
            source={require("../assets/ictwotonearrowback.png")}
          />
          <View style={styles.btnprimaryParent}>
            <View style={[styles.btnprimary, styles.btnprimaryLayout]}>
              <Pressable
                style={[styles.btnprimaryChild, styles.btnprimaryLayout]}
                onPress={() => navigation.navigate("ListOfReport")}
              />
              <Text style={styles.submit}>Submit</Text>
            </View>
            <Text style={[styles.selectSubject, styles.selectTypo]}>
              Select Subject
            </Text>
            <DropDown value="Sabrina" />
            <Text style={[styles.selectRangeDate, styles.selectTypo]}>
              Select Range Date
            </Text>
            <View style={[styles.groupParent, styles.inputGroupLayout]}>
              <Pressable
                style={[styles.groupContainer, styles.inputLayout]}
                onPress={openGroupContainer5}
              >
                <DatePickerComponent />
                <Text style={[styles.start, styles.endTypo]}>Start</Text>
              </Pressable>
              <Pressable
                style={[styles.inputParent, styles.inputLayout]}
                onPress={openGroupContainer6}
              >
                <DatePickerComponent />
                <Text style={[styles.end, styles.endTypo]}>End</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* <Modal animationType="fade" transparent visible={groupContainer5Visible}>
        <View style={styles.groupContainer5Overlay}>
          <Pressable
            style={styles.groupContainer5Bg}
            onPress={closeGroupContainer5}
          />
          <Calender onClose={closeGroupContainer5} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainer6Visible}>
        <View style={styles.groupContainer6Overlay}>
          <Pressable
            style={styles.groupContainer6Bg}
            onPress={closeGroupContainer6}
          />
          <Calender onClose={closeGroupContainer6} />
        </View>
      </Modal> */}
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  frameWrapperPosition: {
    height: 24,
    top: 0,
    position: "absolute",
  },
  btnprimaryLayout: {
    height: 50,
    width: 320,
    left: 0,
    position: "absolute",
  },
  selectTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "center",
    position: "absolute",
  },
  inputLayout1: {
    height: 50,
    width: 285,
    left: 0,
    position: "absolute",
  },
  allTypo: {
    height: 30,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 8,
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "left",
    position: "absolute",
  },
  bxsdownIconPosition: {
    height: 12,
    width: 12,
    top: "50%",
    marginTop: -6.5,
    position: "absolute",
    overflow: "hidden",
  },
  inputGroupLayout: {
    width: 296,
    height: 100,
    position: "absolute",
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 79,
    left: 0,
  },
  inputLayout: {
    width: 135,
    height: 50,
    top: 0,
    position: "absolute",
  },
  endTypo: {
    color: Color.colorDarkgray,
    top: 3,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  weeklyReport: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    color: Color.colorMidnightblue,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  weeklyReportWrapper: {
    marginLeft: -61.5,
    width: 124,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  frameWrapper: {
    marginLeft: -39,
    width: 107,
    left: "50%",
  },
  ictwotoneArrowBackIcon: {
    width: 24,
    left: 0,
    overflow: "hidden",
  },
  btnprimaryChild: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorTomato_200,
    top: 0,
  },
  submit: {
    top: 14,
    left: 135,
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  btnprimary: {
    top: 208,
  },
  selectSubject: {
    fontSize: FontSize.bodyBodyXS_size,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    left: 10,
    top: 0,
  },
  inputChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 79,
    height: 40,
    width: 285,
    left: 0,
    top: 0,
    position: "absolute",
  },
  all: {
    left: 16,
    width: 191,
  },
  bxsdownArrowIcon: {
    left: 257,
  },
  input: {
    top: 0,
  },
  inputWrapper: {
    top: 26,
  },
  selectSubjectParent: {
    height: 66,
    width: 270,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputItem: {
    width: 296,
    height: 40,
    position: "absolute",
    top: 0,
  },
  all1: {
    left: 17,
    width: 199,
  },
  bxsdownArrowIcon1: {
    left: 267,
  },
  inputContainer: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    left: 12,
    top: 26,
  },
  selectRangeDate: {
    marginLeft: -150,
    top: 92,
    fontSize: FontSize.bodyBodyXS_size,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    left: "50%",
  },
  groupContainer5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  inputInner: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 79,
    left: 0,
  },
  groupContainer: {
    left: 0,
  },
  start: {
    marginLeft: -14.54,
    width: 29,
  },
  oct2023: {
    marginLeft: -31.16,
    top: 21,
    fontSize: FontSize.size_3xs,
    width: 62,
    height: 15,
    left: "50%",
  },
  groupContainer6Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer6Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  end: {
    marginLeft: -11.42,
    width: 30,
  },
  start: {
    marginLeft: -16.42,
    width: 30,
    marginTop: 3,
  },
  inputParent: {
    left: 161,
  },
  groupParent: {
    top: 120,
    left: 10,
  },
  btnprimaryParent: {
    top: 70,
    left: 2,
    height: 258,
    width: 320,
    position: "absolute",
  },
  frameParent: {
    width: 322,
    height: 349,
  },
  report: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 800,
    flexDirection: "row",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_26xl,
    overflow: "hidden",
  },
});

export default Report;
