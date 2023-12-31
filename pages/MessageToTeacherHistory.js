import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { NativeBaseProvider, StatusBar, ScrollView } from "native-base";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import HeroContent from "../components/MessageToTeacherHistory/HeroContentMessageToTeacherHis";
import MessageHistory from "../components/MessageToTeacherHistory/MessageHistory";
import axios from "axios";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
} from "../database/database";
import { LoadingModal } from "react-native-loading-modal";

const MessageToTeacherHistory = () => {
  const navigation = useNavigation();
  const [responseData, setResponseData] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [studentName, setStudentName] = useState(null);
  const [parentId, setParentId] = useState(null);
  const [teacherNames, setTeacherNames] = useState({}); // State to store teacher names
  const [loading, setLoading] = useState(true);

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
    console.log("fetchdata = ", parentData);
    if (parentData) {
      const parent_id = parentData.user.id;
      console.log("parent_id = ", parent_id);
      // Define the API URL
      const apiUrl = `https://www.balichildrenshouse.com/myCH/api/history-communicate/${parent_id}`;

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
      console.log("setelah axios");
      retrieveItem("childData")
        .then((data) => {
          if (data) {
            // Use the retrieved data
            const student_ids = data.map((item) => item.id);
            const student_name = data.map((item) => item.name);

            // Update your component state or data source with the new data
            // For example, if you're using state in a functional component:
            setStudentId(student_ids);
            setStudentName(student_name);
          } else {
            // Handle the case when no data is found
            console.log("No data found in AsyncStorage.");
          }
        })
        .catch((error) => {
          console.error("Error fetching response data from SQLite:", error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBackButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "BottomNavbar", // change this with your screen name
    });
  };

  useEffect(() => {
    // Fetch teacher names for each message
    if (responseData) {
      const teacherIds = responseData.history_communication.map(
        (message) => message.teacher_id
      );
      const uniqueTeacherIds = [...new Set(teacherIds)]; // Get unique teacher IDs

      // Fetch teacher names for each unique teacher ID
      const fetchTeacherNames = async () => {
        const data = {};

        for (const teacherId of uniqueTeacherIds) {
          try {
            const response = await axios.get(
              `https://www.balichildrenshouse.com/myCH/api/get-teacher/${teacherId}`
            );

            const teacherName = response.data[0]?.name || "Unknown Teacher";
            const teacherImage =
              response.data[0]?.image || "default-image-url.jpg";

            data[teacherId] = {
              name: teacherName,
              image: teacherImage,
            };

            console.log(
              "Teacher data for teacher ID",
              teacherId,
              ":",
              data[teacherId]
            );
          } catch (error) {
            console.error("Error fetching teacher data:", error);
            data[teacherId] = {
              name: "Unknown Teacher",
              image: "default-image-url.jpg",
            };
          }
        }

        setTeacherNames(data);
      };

      fetchTeacherNames();
      setLoading(false);
    }
  }, [responseData]);

  if (loading) {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large" color="red" />
        <Text>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.messageToTeacherHistory}>
          <View style={[styles.content, styles.contentFlexBox]}>
            {/* <HeroContent /> */}
            {/* Main Content */}
            <View style={styles.HeroContainer}>
              <TouchableOpacity onPress={handleBackButton}>
                <Image
                  style={styles.buttonbackIcon}
                  contentFit="cover"
                  source={require("../assets/images/buttonback.png")}
                />
              </TouchableOpacity>
              <Text style={styles.titleStyles}>Message History</Text>
            </View>
            <View style={styles.maincontent}>
              <View style={styles.allHistoryWrapper}>
                <Text style={[styles.allHistory, styles.messageClr]}>
                  {/* All History */}
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
                      // console.log(
                      //   "Teacher Id : ",
                      //   teacherNames,
                      //   " index : ",
                      //   index
                      // );

                      return (
                        <MessageHistory
                          key={index}
                          message_id={message.id}
                          message_file={message.file}
                          note={message.message}
                          teacher={
                            teacherNames[message.teacher_id]
                              ? teacherNames[message.teacher_id].name
                              : "Other Teacher"
                          }
                          student={
                            studentId_index !== -1
                              ? studentName[studentId_index]
                              : "Other Student"
                          }
                          timestamp={message.created_at}
                          image={
                            teacherNames[message.teacher_id] &&
                            teacherNames[message.teacher_id].image
                              ? teacherNames[message.teacher_id].image
                              : "53613.png" // Provide a default image URL
                          }
                          imageUrl="https://www.balichildrenshouse.com/myCH/ev-assets/uploads/avatars/"
                        />
                      );
                    })
                  ) : (
                        {/* <LoadingModal modalVisible={true} color="red" /> */ }
                  )
                ) : (
                    {/* <LoadingModal modalVisible={true} color="red" /> */ }
                )}
              </ScrollView>
            </View>
            {/* End Main Content */}
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center', alignItems: 'center'
  },
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
  buttonbackIcon: {
    width: 20,
    height: 20,
  },
  titleStyles: {
    color: "#241856",
    fontFamily: FontFamily.poppinsBold,
    right: '120%',
    fontSize: 20,
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
  HeroContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginTop: '7%',
    width: '80%',
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
    width: '100%',
  },
  maincontent: {
    width: 330,
    height: '100%',
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
