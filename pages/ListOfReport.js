import React, { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { ScrollView, NativeBaseProvider } from "native-base";
import DropDown from "../components/DropDown";
import ReportEntry from "../components/ReportEntry";

const ListOfReport = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    postData,
    selectedStudentId,
    selectedStartDate,
    selectedEndDate,
    studentName,
    apiResponse,
    selectedStudentName,
  } = route.params;

  const [studentID, setStudentID] = useState(selectedStudentId);
  const [startDate, setStartDate] = useState(selectedStartDate);
  const [endDate, setEndDate] = useState(selectedEndDate);

  // You can now use postData and other parameters in your component

  console.log("reportData:", selectedStudentName);

  return (
    <NativeBaseProvider>
      <View style={[styles.listOfReport, styles.iconLayout]}>
        <View style={styles.ictwotoneArrowBackParent}>
          <Pressable
            style={styles.ictwotoneArrowBack}
            onPress={() => navigation.navigate("ListOfReport")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/ictwotonearrowback.png")}
            />
          </Pressable>
          <View style={styles.frameParent}>
            <View style={[styles.frameWrapper, styles.wrapperPosition]}>
              <View
                style={[styles.weeklyReportWrapper, styles.wrapperPosition]}
              >
                <Text style={styles.weeklyReport}>Score Board</Text>
              </View>
            </View>
            <Pressable
              style={styles.ictwotoneArrowBack}
              onPress={() => navigation.navigate("Report")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ictwotonearrowback11.png")}
              />
            </Pressable>
            <View style={styles.groupParent}>
              <View style={styles.selectSubjectParent}>
                <Text style={[styles.selectSubject, styles.selectTypo]}>
                  Student
                </Text>
                <View style={[styles.inputWrapper, styles.inputLayout]}>
                  <View style={[styles.input, styles.inputLayout]}>
                    <View style={[styles.inputChild, styles.inputPosition]} />
                    <Text style={[styles.all, styles.allTypo]}></Text>
                  </View>
                </View>
              </View>
              <View style={[styles.groupWrapper, styles.inputGroupLayout]}>
                <View style={[styles.inputContainer, styles.inputGroupLayout]}>
                  <View
                    style={[styles.inputContainer, styles.inputGroupLayout]}
                  >
                    <View style={[styles.inputItem, styles.inputGroupLayout]} />
                    <Text style={[styles.all1, styles.allTypo]}>
                      {selectedStudentName}
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={[styles.selectRangeDate, styles.selectTypo]}>
                Range Date
              </Text>
              <View style={[styles.groupContainer, styles.inputGroupLayout]}>
                <View
                  style={[
                    styles.groupParent1,
                    styles.inputParentLayout,
                    { top: "5%" },
                  ]}
                >
                  <View style={[styles.groupParent1, styles.inputParentLayout]}>
                    <View
                      style={[styles.groupParent1, styles.inputParentLayout]}
                    >
                      <View
                        style={[styles.inputInner, styles.inputParentLayout]}
                      />
                    </View>
                  </View>
                  <Text style={[styles.start, styles.endTypo]}>Start</Text>
                  <Text style={[styles.oct20235, styles.octTypo]}>
                    {startDate
                      ? `${startDate.getDate()} ${startDate.toLocaleString(
                          "default",
                          { month: "short" }
                        )} ${startDate.getFullYear()}`
                      : ""}
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputParent,
                    styles.inputParentLayout,
                    { top: "5%" },
                  ]}
                >
                  <View style={[styles.groupParent1, styles.inputParentLayout]}>
                    <View
                      style={[styles.inputInner, styles.inputParentLayout]}
                    />
                  </View>
                  <Text style={[styles.oct20236, styles.octTypo]}>
                    {endDate
                      ? `${endDate.getDate()} ${endDate.toLocaleString(
                          "default",
                          { month: "short" }
                        )} ${endDate.getFullYear()}`
                      : ""}
                  </Text>
                  <Text style={[styles.end, styles.endTypo]}>End</Text>
                </View>
              </View>
            </View>
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              style={{ marginTop: "65%" }}
            >
              {apiResponse.map((report) => (
                <ReportEntry
                  key={report.id}
                  date={
                    report.date
                      ? `${new Date(report.date).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}`
                      : ""
                  }
                  subject={report.subject.title}
                  topic={report.topic}
                  comment={report.comment}
                  score={report.score}
                  remark={report.problem}
                  file_comment={report.file_comment}
                  student_id={studentID}
                  start_date={startDate}
                  end_date={endDate}
                  post_data={postData}
                  selected_student_id={selectedStudentId}
                  selected_start_date={selectedStartDate}
                  selected_end_date={selectedEndDate}
                  student_name={studentName}
                  api_response={apiResponse}
                  selected_student_name={selectedStudentName}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  wrapperPosition: {
    height: 22,
    left: "50%",
    position: "absolute",
  },
  selectTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.bodyBodyXS_size,
    position: "absolute",
  },
  inputLayout: {
    height: 40,
    width: 285,
    position: "absolute",
  },
  inputPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 79,
    left: 0,
    top: 0,
  },
  allTypo: {
    height: 30,
    color: Color.colorGray_200,
    top: 8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    height: 40,
    position: "absolute",
  },
  frameShadowBox: {
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: "0%",
    right: "0%",
    height: "12.91%",
    position: "absolute",
    width: "100%",
  },
  ictwotoneArrowBack: {
    left: 18,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  ictwotoneArrowBackParent: {
    width: 340,
    height: 600,
  },
  oct2023Typo: {
    fontSize: FontSize.size_3xs,
    left: "3.13%",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_16xl,
    textAlign: "center",
    position: "absolute",
  },
  inputParentLayout: {
    width: 135,
    height: 40,
    top: 0,
    position: "absolute",
  },
  endTypo: {
    color: Color.colorSnow,
    textAlign: "center",
    fontSize: FontSize.bodyBodyXS_size,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  octTypo: {
    height: 15,
    width: 62,
    top: 21,
    color: Color.colorSnow,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  weeklyReport: {
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    color: Color.colorMidnightblue,
    width: 142,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    flex: 1,
  },
  weeklyReportWrapper: {
    marginLeft: -70.5,
    top: 0,
  },
  frameWrapper: {
    marginLeft: -28,
    width: 107,
    top: 2,
  },
  icon: {
    height: "100%",
  },
  ictwotoneArrowBack: {
    width: 24,
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  selectSubject: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorBlack,
    fontSize: FontSize.bodyBodyXS_size,
    left: 0,
    top: 0,
  },
  inputChild: {
    height: 40,
    width: 285,
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
    left: 0,
    top: 0,
  },
  inputWrapper: {
    top: 26,
    left: 6,
  },
  selectSubjectParent: {
    width: 291,
    height: 66,
    left: 10,
    top: 0,
    position: "absolute",
  },
  inputItem: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 79,
    left: 0,
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
    top: 27,
    left: 11,
  },
  selectRangeDate: {
    marginLeft: -148.5,
    top: "13%",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorBlack,
    fontSize: FontSize.bodyBodyXS_size,
    left: "46%",
  },
  cardShadowBox: {
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
    bottom: "0.33%",
    height: "99.67%",
    top: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  studentCanExplain: {
    top: "71.6%",
  },
  oct2023: {
    height: "18.52%",
    width: "19.53%",
    top: "8.64%",
  },
  mathematic: {
    top: "27.16%",
    left: "3.13%",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.bodyBodyXS_size,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  linearAndNonLinear: {
    top: "49.38%",
    left: "2.82%",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    fontSize: FontSize.bodyBodyXS_size,
  },
  text: {
    top: "0%",
    fontSize: FontSize.size_16xl,
    left: "0%",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  score: {
    top: "70.97%",
    left: "11.11%",
    color: Color.colorBlack,
    fontSize: FontSize.bodyBodyXS_size,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  parent: {
    height: "76.54%",
    width: "14.11%",
    top: "6.17%",
    right: "9.4%",
    bottom: "17.28%",
    left: "76.49%",
    position: "absolute",
  },
  text1: {
    top: "18.52%",
    left: "92.48%",
    color: Color.colorForestgreen_100,
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frame: {
    top: "28.45=%",
    bottom: "58.65%",
  },
  frame1: {
    top: "43.11%",
    bottom: "43.98%",
  },
  frame2: {
    top: "57.77%",
    bottom: "29.32%",
  },
  frame3: {
    top: "72.43%",
    bottom: "14.66%",
  },
  frame4: {
    top: "87.09%",
    bottom: "0%",
  },
  inputInner: {
    backgroundColor: Color.colorTomato_200,
    borderRadius: 79,
    width: 135,
    left: 0,
  },
  groupParent1: {
    left: 0,
  },
  start: {
    marginLeft: -18.51,
    width: 37,
    top: 2,
  },
  oct20235: {
    marginLeft: -31.51,
  },
  oct20236: {
    marginLeft: -31.16,
  },
  end: {
    marginLeft: -11.42,
    top: 3,
    width: 23,
  },
  inputParent: {
    left: 161,
  },
  groupContainer: {
    top: "17%",
    left: 10,
  },
  groupParent: {
    top: 60,
    left: "3%",
    width: "100%",
    height: 628,
    position: "absolute",
  },
  frameParent: {
    width: "100%",
    height: "100%",
  },
  listOfReport: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    height: 800,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_lg,
    flex: 1,
    width: "100%",
  },
});

export default ListOfReport;
