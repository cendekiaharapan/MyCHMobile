import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Linking,
  ScrollView
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DetailReports = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    date,
    subject,
    topic,
    comment,
    score,
    remark,
    file_comment,
    student_id,
    start_date,
    end_date,
    post_data,
    selected_student_id,
    selected_start_date,
    selected_end_date,
    student_name,
    api_response,
    selected_student_name,
    report
  } = route.params;

  console.log("REPORTTT DATA", report);

  const [dateData, setDateData] = useState(date);
  const [subjectData, setSubjectData] = useState(subject);
  const [topicData, setTopicData] = useState(topic);
  const [commentData, setCommentData] = useState(comment);
  const [scoreData, setScoreData] = useState(score);
  const [remarkData, setRemarkData] = useState(remark);
  const [messagefile, setMessageFile] = useState(file_comment);

  const [studentId, setStudentID] = useState(student_id);
  const [startDate, setStartDate] = useState(start_date);
  const [endDate, setEndDate] = useState(end_date);

  const [postData, setPostData] = useState(post_data);
  const [selectedStudentId, setSelectedStudentId] =
    useState(selected_student_id);
  const [selectedStartDate, setSelectedStartDate] =
    useState(selected_start_date);
  const [selectedEndDate, setSelectedEndDate] = useState(selected_end_date);
  const [studentName, setStudentName] = useState(student_name);
  const [apiResponse, setApiResponse] = useState(api_response);
  const [selectedStudentName, setSelectedStudentName] = useState(
    selected_student_name
  );

  const [inputText, setInputText] = useState("");
  const [showFile, setShowFile] = useState(true);

  useEffect(() => {
    if (!messagefile) {
      setShowFile(false);
    }
    console.log("Data DATAAAAAAA ===== HELLO DATA", date,
      subject,
      topic,
      comment,
      score,
      remark,
      file_comment,
      student_id,
      start_date,
      end_date,
      post_data,
      selected_student_id,
      selected_start_date,
      selected_end_date,
      student_name,
      api_response,
      selected_student_name);
    // fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.balichildrenshouse.com/myCH/api/student/scores",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            student_id: studentId,
            start_date: startDate,
            end_date: endDate,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (data && data.length > 0) {
        setScoreData(data[0]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleListOfReport = () => {
    navigation.navigate("ListOfReport", {
      postData: postData,
      selectedStudentId: selectedStudentId,
      selectedStartDate: selectedStartDate,
      selectedEndDate: selectedEndDate,
      studentName: studentName,
      apiResponse: apiResponse,
      selectedStudentName: selectedStudentName,
    });
  };

  const openFileUrl = async () => {
    try {
      if (messagefile) {
        const fileUrl = `https://www.balichildrenshouse.com/myCH/ev-assets/uploads/student-score/${messagefile}`;
        await Linking.openURL(fileUrl);
      } else {
        console.error("File is not available.");
      }
    } catch (error) {
      console.error("Error opening file URL:", error);
    }
  };

  return (
    // Header
    <View style={[styles.detailNew, styles.iconLayout]}>
      <View style={styles.ictwotoneArrowBackParent}>
        <Pressable
          style={styles.ictwotoneArrowBack}
          onPress={handleListOfReport}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ictwotonearrowback.png")}
          />
        </Pressable>
        <View style={[styles.frameWrapper, styles.wrapperPosition]}>
          <View style={[styles.weeklyReportWrapper, styles.wrapperPosition]}>
            <Text style={styles.weeklyReport}>Daily Score</Text>
          </View>
        </View>

        {/* Hero */}
        <View style={styles.mathematicParent}>
          <Text style={[styles.mathematic, styles.score90Typo]}>
            {subject}
          </Text>
          <Text style={[styles.oct2023, styles.oct2023Typo]}>{date}</Text>
          {report.is_category ? (
            <>
              <Text style={[styles.categoryScore, {
                color: Color.colorBlack,
                textAlign: "left",
                fontFamily: FontFamily.poppinsBold,
                fontWeight: "700",
                position: "absolute",
              }]}>
                Score:
              </Text>
            <Text style={[styles.categoryScore, styles.score90Typo]}>
              {report.is_category ? report.category : score}
              </Text>
            </>
          ) : (
              <Text style={[styles.score90, styles.score90Typo]}>
                Score: {report.is_category ? report.category : score}
              </Text>
          )}
        </View>

        {/* Body */}
        <View style={styles.inputContainer1}>
          
          <Text style={styles.FormTitle}>Topic</Text>
          {/* <ScrollView> */}
            <Text style={styles.dataText}>{topic}</Text>
          {/* </ScrollView> */}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.FormTitle}>Remark</Text>
          {remark ? (
            <Text style={styles.dataText}>{remark}</Text>
          ) : (
            <Text style={styles.placeholderText}>N/A</Text>
          )}
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.FormTitle}>Comment</Text>
          {comment ? (
            <Text style={styles.dataText}>{comment}</Text>
          ) : (
            <Text style={styles.placeholderText}>N/A</Text>
          )}
        </View>
        
        {messagefile !== null && messagefile !== "" ? (
          <View style={styles.inputContainer}>
            <Text style={styles.FormTitle}>File</Text>
            {/* Use Button component here */}
            <TouchableOpacity onPress={openFileUrl}>
              <Text
                style={{
                  fontFamily: FontFamily.poppinsLight,
                  fontWeight: "300",
                  color: "#a6a6a6",
                  fontSize: FontSize.textRegularXs12_size,
                  marginLeft: 75,
                }}
              >
                Download File
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <Text style={styles.FormTitle}>File</Text>
            <Text style={styles.dataText}>N/A</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer1: {
    marginTop: 180,
  },
  inputContainer: {
    marginTop: 10,
  },
  FormTitle: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
  placeholderText: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    borderWidth: 1,
    borderColor: Color.colorGrey,
    borderRadius: Border.br_xs,
    padding: Padding.p_sm,
    marginTop: 5,
  },
  dataText: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    borderWidth: 1,
    borderColor: Color.colorGrey,
    borderRadius: Border.br_xs,
    padding: Padding.p_sm,
    marginTop: 5,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  wrapperPosition: {
    height: 22,
    left: "50%",
    position: "absolute",
    textAlign: "center",
  },
  score90Typo: {
    color: Color.colorBlack,
    top: "3.66%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  oct2023Typo: {
    fontSize: FontSize.bodyBodyXS_size,
    position: "absolute",
  },
  fileTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    width: 98,
    position: "absolute",
  },
  groupLayout1: {
    height: 18,
    backgroundColor: Color.colorForestgreen_100,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  yesTypo: {
    color: Color.colorWhite,
    lineHeight: 24,
    height: 21,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "left",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  frameShadowBox: {
    width: 319,
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    marginLeft: -153,
    left: "50%",
    position: "absolute",
  },
  cardShadowBox: {
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  loremTypo: {
    left: "2.82%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyBodyXS_size,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  proquirmentPosition: {
    left: 0,
    top: 0,
  },
  frameViewLayout: {
    width: 115,
    height: 18,
    position: "absolute",
  },
  groupLayout: {
    width: 65,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  ictwotoneArrowBack: {
    width: 24,
    height: 24,
    top: '1%',
    position: "absolute",
  },
  weeklyReport: {
    lineHeight: 22,
    color: Color.colorMidnightblue,
    width: 142,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    flex: 1,
  },
  weeklyReportWrapper: {
    marginLeft: '-85%',
    top: '10%',
    textAlign: "center",
  },
  frameWrapper: {
    marginLeft: "-11%",
    top: '1%',
    width: '33%',
  },
  mathematic: {
    // textAlign: "left",
    // left: "5%",
    fontSize: FontSize.size_xl,
    top: "3.66%",
    width: "60%",
  },
  oct2023: {
    height: "3.23%",
    width: "50%",
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    top: "0%",
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "left",
    color: Color.colorBlack,
    left: "0%",
  },
  score90: {
    left: "72.94%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  categoryScore: {
    left: "70%",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  topic: {
    top: "20.86%",
    textAlign: "center",
    left: "5%",
  },
  remark: {
    top: "36.99%",
    textAlign: "center",
    left: "5%",
  },
  comment: {
    top: "52.69%",
    textAlign: "center",
    left: "5%",
  },
  dailyQuizStatus: {
    width: "52.65%",
    top: "76.13%",
    left: "5.29%",
    textAlign: "left",
  },
  file: {
    top: "72%",
    left: "5.59%",
    textAlign: "center",
  },
  groupChild: {
    top: 3,
    width: 98,
    position: "absolute",
  },
  download: {
    marginLeft: -32.18,
    width: 63,
  },
  rectangleParent: {
    top: 438,
    left: 242,
    height: 21,
  },
  card: {
    bottom: "2.44%",
    height: "97.56%",
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
  },
  linearAndNonLinear: {
    width: "83.07%",
    top: "29.27%",
    height: "41.46%",
    left: "2.82%",
  },
  frame: {
    top: "26.67%",
    bottom: "64.52%",
    height: "8.82%",
    width: 319,
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    marginLeft: -153,
  },
  card1: {
    bottom: "2.44%",
    height: "97.56%",
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
  },
  linearAndNonLinear1: {
    width: "76.8%",
    top: "29.27%",
    height: "41.46%",
    left: "2.82%",
  },
  frame1: {
    top: "42.58%",
    bottom: "48.6%",
    height: "8.82%",
    width: 319,
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    marginLeft: -153,
  },
  card2: {
    bottom: "0%",
    height: "100%",
  },
  frameChild: {
    borderRadius: 3,
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  frameContainer: {
    position: "absolute",
    flexDirection: "row",
  },
  proquirmentTcdoc: {
    lineHeight: 18,
    fontFamily: FontFamily.bodyBodyXS,
    color: Color.blackL2,
    fontSize: FontSize.bodyBodyXS_size,
    position: "absolute",
    textAlign: "left",
    top: "72%",
  },
  proquirmentTcdocWrapper: {
    left: 0,
    top: 0,
  },
  frameView: {
    top: 9,
    left: 45,
  },
  frameParent: {
    left: 12,
    width: 160,
    height: 36,
    top: 2,
    position: "absolute",
  },
  cardParent: {
    height: "8.6%",
    width: "54.12%",
    top: "91.4%",
    right: "40.88%",
    left: "5%",
    bottom: "0%",
    position: "absolute",
  },
  card3: {
    bottom: "2.44%",
    height: "97.56%",
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
  },
  loremIpsumLorem: {
    height: "58.62%",
    width: "94.36%",
    top: "18.97%",
  },
  frame2: {
    height: "12.47%",
    top: "58.49%",
    bottom: "29.03%",
  },
  groupItem: {
    top: 2,
    height: 18,
    backgroundColor: Color.colorForestgreen_100,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  yes: {
    marginLeft: -10.5,
    width: 21,
  },
  rectangleGroup: {
    top: 354,
    left: 271,
    height: 21,
  },
  mathematicParent: {
    height: "85.79%",
    top: "14.21%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  ictwotoneArrowBackParent: {
    width: 340,
    height: 542,
  },
  detailNew: {
    justifyContent: "center",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    height: '100%',
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_26xl,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },
});

export default DetailReports;
