import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { NativeBaseProvider, StatusBar, ScrollView } from "native-base";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import HeroContent from "../components/MessageToTeacherHistory/HeroContentMessageToTeacherHis";
import MessageHistory from "../components/MessageToTeacherHistory/MessageHistory";
import axios from "axios";
import { useFocusEffect } from '@react-navigation/native';
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import * as SecureStore from "expo-secure-store";

const MessageToTeacherHistory = () => {
  const [responseData, setResponseData] = useState(null);
  const db = SQLite.openDatabase("login.db");
  const [studentId, setStudentId] = useState(null);
  const [studentName, setStudentName] = useState(null);
  const [parentId, setParentId] = useState(null);
  const [teacherNames, setTeacherNames] = useState({}); // State to store teacher names

  const getRespDataFromSecureStore = async () => {
    try {
      const responseDataString = await SecureStore.getItemAsync("resp_data");
      if (responseDataString) {
        const responseData = JSON.parse(responseDataString);
        return responseData;
      } else {
        console.log("No response data found in SecureStore.");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving response data:", error);
      return null;
    }
  };

  const fetchData = async () => {
    const parentData = await getRespDataFromSecureStore();
    console.log("inside FetchData");
    console.log(parentData);
    if (parentData) {
      const parent_id = parentData.user.id;
      // Define the API URL
      const apiUrl = `https://www.balichildrenshouse.com/myCHStaging/api/history-communicate/${parent_id}`;

      // Make a GET request to the API
      axios
        .get(apiUrl)
        .then((response) => {
          // Handle the successful response here
          setResponseData(response.data);
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error("Error fetching data:", error);
        });

      fetchChildDataFromSQLite()
        .then((data) => {
          if (data) {
            // Use the retrieved data
            console.log("inside fetchChildData");
            const student_ids = data.map((item) => item.id);
            const student_name = data.map((item) => item.name);
            console.log("Student id : ", student_ids);
            console.log("Student Name : ", student_name);

            // Update your component state or data source with the new data
            // For example, if you're using state in a functional component:
            setStudentId(student_ids);
            setStudentName(student_name);
          } else {
            // Handle the case when no data is found
            console.log("No data found in SQLite.");
          }
        })
        .catch((error) => {
          console.error("Error fetching response data from SQLite:", error);
        });
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log("useFocuseEffect Actived!");
      fetchData();
      return () => {
        // Cleanup or unsubscribe logic if needed
      };
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      // Fetch teacher names for each message
      if (responseData) {
        const teacherIds = responseData.history_communication.map(
          (message) => message.teacher_id
        );
        const uniqueTeacherIds = [...new Set(teacherIds)]; // Get unique teacher IDs
  
        // Fetch teacher names for each unique teacher ID
        const fetchTeacherNames = async () => {
          const names = {};
          for (const teacherId of uniqueTeacherIds) {
            try {
              const response = await axios.get(
                `https://www.balichildrenshouse.com/myCHStaging/api/get-teacher/${teacherId}`
              );
              const teacherNameExtracted = response.data.map((item) => item.name);
              console.log(teacherNameExtracted);
              names[teacherId] = teacherNameExtracted;
              console.log("teacher names : ", names);
            } catch (error) {
              console.error("Error fetching teacher data:", error);
              names[teacherId] = "Unknown Teacher"; // Set a default name in case of an error
            }
          }
          setTeacherNames(names);
        };
  
        fetchTeacherNames();
      }
  
      // Cleanup logic, if needed
      return () => {
        // Add any cleanup logic here
      };
    }, [responseData])
  );

  const fetchChildDataFromSQLite = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql("SELECT data FROM child_data", [], (tx, results) => {
          const len = results.rows.length;
          if (len > 0) {
            const responseDataString = results.rows.item(0).data;
            const responseData = JSON.parse(responseDataString);
            resolve(responseData);
          } else {
            console.log("No response data found in SQLite.");
            resolve(null);
          }
        });
      });
    });
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.messageToTeacherHistory}>
          <View style={[styles.content, styles.contentFlexBox]}>
            <HeroContent />
            {/* Main Content */}
            <View style={styles.maincontent}>
              <View style={styles.allHistoryWrapper}>
                <Text style={[styles.allHistory, styles.messageClr]}>
                  All History
                </Text>
              </View>

              <ScrollView contentContainerStyle={styles.maincontent1}>
                {studentId !== null &&
                studentName !== null &&
                teacherNames !== null ? (
                  responseData ? (
                    responseData.history_communication.map((message, index) => {
                      const studentId_index = studentId.indexOf(
                        message.student_id
                      );
                      console.log(
                        "Teacher Id : ",
                        teacherNames,
                        " index : ",
                        index
                      );

                      return (
                        <MessageHistory
                          key={index}
                          note={message.message}
                          teacher={
                            teacherNames[message.teacher_id]
                              ? teacherNames[message.teacher_id][0] // Assuming you want the first name if available
                              : "Other Teacher"
                          }
                          student={
                            studentId_index !== -1
                              ? studentName[studentId_index]
                              : "Other Student"
                          }
                          timestamp={message.created_at}
                        />
                      );
                    })
                  ) : (
                    <Text>Loading...</Text> // Or any other loading indicator
                  )
                ) : (
                  <Text>Loading Student Data...</Text> // Or any other loading indicator
                )}
              </ScrollView>
            </View>
            {/* End Main Content */}
            <View style={styles.frame}>
              <View style={styles.addicon}>
                <Image
                  style={styles.addicon1}
                  contentFit="cover"
                  source={require("../assets/addicon.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  contentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  messageClr: {
    color: Color.colorBlack,
    fontSize: FontSize.textRegularXs12_size,
  },
  buSekarTypo: {
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "left",
  },
  messageTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  viewTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
  },
  allHistoryTypo: {
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
  },
  textLayout: {
    width: 212,
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 21,
    fontSize: FontSize.textMediumSm14_size,
  },
  viewLayout: {
    width: 66,
    borderRadius: Border.br_31xl,
    height: 25,
    backgroundColor: Color.colorTomato,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  vectorWrapper: {
    top: 42,
    left: 12,
  },
  chatHistory: {
    fontSize: FontSize.headingMd20_size,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.headingMd20,
    color: Color.colorMidnightblue,
    textAlign: "left",
  },
  chatHistoryWrapper: {
    marginLeft: -75,
    top: 39,
    left: "50%",
    justifyContent: "center",
  },
  herocontent: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.singleToneWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1.0568413734436035,
    },
    shadowRadius: 2.11,
    elevation: 2.11,
    shadowOpacity: 1,
    height: 120,
    alignSelf: "stretch",
  },
  allHistory: {
    textAlign: "center",
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
  },
  allHistoryWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  unsplashaoewueh7yasIcon: {
    width: 56,
    height: 58,
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  buSekar: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 87,
    height: 18,
    color: Color.colorGray_300,
  },
  frameChild: {
    borderColor: Color.colorDarkgray_100,
    borderTopWidth: 1,
    width: 243,
    height: 1,
    marginTop: 6,
    borderStyle: "solid",
  },
  maret20231240: {
    fontSize: FontSize.size_4xs,
    color: Color.colorDarkgray_100,
    width: 123,
    height: 11,
    textAlign: "left",
  },
  rufusStewart: {
    width: 88,
    height: 13,
    marginLeft: 30,
    textAlign: "right",
    color: Color.colorGray_300,
  },
  maret20231240AmParent: {
    marginTop: 6,
    flexDirection: "row",
  },
  buSekarParent: {
    marginLeft: 8,
  },
  message: {
    color: Color.colorBlack,
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "left",
    alignSelf: "stretch",
  },
  defaultInputMaximum: {
    color: Color.textText900,
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "left",
    flex: 1,
  },
  scroll: {
    borderRadius: Border.br_9980xl,
    backgroundColor: Color.textDarkSecondary,
    width: 8,
    height: 99,
    marginLeft: 4,
    display: "none",
  },
  defaultInputMaximumHeightParent: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.mutedMuted300,
    borderWidth: 1,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_5xs,
    borderStyle: "solid",
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  errorText: {
    color: Color.textDarkSecondary,
    textAlign: "left",
  },
  counterText: {
    color: Color.textLightSecondary,
    textAlign: "right",
  },
  helperText: {
    marginTop: 4,
    display: "none",
    flexDirection: "row",
  },
  frameContainer: {
    alignSelf: "stretch",
    flex: 1,
  },
  textArea: {
    height: 129,
    marginTop: 6,
    alignSelf: "stretch",
  },
  view: {
    color: Color.singleToneWhite,
    textAlign: "center",
  },
  viewWrapper: {
    height: 25,
    marginTop: 6,
  },
  messageParent: {
    width: 242,
  },
  frameParent: {
    alignItems: "flex-end",
  },
  unsplashaoewueh7yasContainer: {
    flexDirection: "row",
  },
  message1: {
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.textRegularXs12_size,
  },
  viewContainer: {
    marginTop: 7,
    height: 25,
  },
  frameView: {
    marginTop: 19,
    alignItems: "flex-end",
  },
  maincontent1: {
    width: 330,
  },
  maincontent: {
    paddingTop: 15,
    width: 330,
    height: 563,
  },
  addicon1: {
    width: 25,
    height: 25,
  },
  addicon: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorTomato,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frame: {
    width: 360,
    paddingHorizontal: 23,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  content: {
    paddingBottom: Padding.p_11xl,
    flex: 1,
  },
  messageToTeacherHistory: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    width: "100%",
    height: 844,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
});

export default MessageToTeacherHistory;
