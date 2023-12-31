import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Button, NativeBaseProvider } from "native-base";
import { Color, Padding, FontFamily, FontSize, Border, LoadingIndicator } from "../GlobalStyles";
import PermissionHistory from "../components/PermissionHistory";
import { useNavigation, useFocusEffect } from "@react-navigation/native"; // Updated import
import AddButton from "../components/AddButton";
import axios from "axios";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
} from "../database/database";
import { LoadingModal } from "react-native-loading-modal";

const ChildPermissionHistorys = () => {
  const navigation = useNavigation();
  const db = SQLite.openDatabase("login.db");
  const [studentId, setStudentId] = useState(null);
  const [childId, setChildId] = useState(null);
  const [studentName, setStudentName] = useState(null);
  const [studentData, setStudentData] = useState(null);
  const [studentImg, setStudentImg] = useState(null);
  const [studentGet, setStudentGet] = useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchChildData = async () => {
    try {
      setLoading(true);

      const data = await retrieveItem("childData");

      if (data) {
        const student_ids = data.map((item) => item.id);
        const student_name = data.map((item) => item.name);
        const student_image = data.map((item) => item.image);

        setStudentGet(data);
        setChildId(student_ids);
        setStudentName(student_name);
        setStudentImg(student_image);
        fetchMultipleStudentsData(student_ids);
        // setLoading(false);
      } else {
        console.log("No data found in SQLite.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching response data from SQLite:", error);
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log("use Focus Effect activated!");
      fetchChildData();
    }, [navigation])
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

  const fetchChildPermissionData = async (studentId) => {
    try {
      const response = await axios.get(
        `https://www.balichildrenshouse.com/myCH/api/get-leave-by-student-id/${studentId}`
      );

      // Handle the response data
      const data = response.data;
      // console.log(`Data for student ${studentId}:`, data);

      return data; // Return the data for this student
    } catch (error) {
      // Handle errors
      console.error(`Error for student ${studentId}:`, error);
      return null; // Return null for this student's data
    }
  };

  const fetchMultipleStudentsData = async (student_ids) => {
    console.log("inside fetch multiple 2:");
    console.log("student id : ", childId);
    console.log("student name :", studentName);
    const studentIds = student_ids; // Replace with the IDs of the students you want to fetch data for

    try {
      // Use Promise.all to fetch data for multiple students concurrently
      const studentDataPromises = await studentIds.map((studentId) =>
        fetchChildPermissionData(studentId)
      );
      const studentData = await Promise.all(studentDataPromises);

      const flattenedLeaves = studentData.reduce((accumulator, student) => {
        return accumulator.concat(student.leaves);
      }, []);

      // console.log("Flattened Before Sorted : ", flattenedLeaves);

      flattenedLeaves.sort((leaveA, leaveB) => {
        const dateA = new Date(leaveA.created_at);
        const dateB = new Date(leaveB.created_at);

        return dateB - dateA;
      });

      setStudentData(flattenedLeaves);
      setLoading(false);
      // You can set the data to your state or do any necessary processing
    } catch (error) {
      // Handle errors if any of the requests fail
      setLoading(false);
      console.error("Error:", error);
    }
  };

  function formatDateTime(dateTimeString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-GB', options);
  }

  const imageUrl = `https://www.balichildrenshouse.com/myCH/ev-assets/uploads/avatars/`;

  if (loading) {
    return (
      <View style={LoadingIndicator}>
        <ActivityIndicator size="large" color="red" />
        <Text>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <NativeBaseProvider>
      {/* <LoadingModal modalVisible={loading} color="red" /> */}
      <View style={styles.contact}>
        <View style={[styles.herocontainerParent, styles.herocontainerLayout]}>
          <View style={[styles.herocontainer, styles.herocontainerLayout]}>
            <View style={[styles.backiconParent, styles.backiconPosition]}>
              {/* Start Hero Content*/}
              <TouchableOpacity
                onPress={() => navigation.navigate("ChildPermissionAddPermis")}
              >
                <Image
                  style={[styles.backicon, styles.backiconPosition]}
                  contentFit="cover"
                  source={require("../assets/ictwotonearrowback.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.permissionHistory}>Permission History</Text>
          </View>

          <View style={[styles.line, styles.lineBorder]} />

          {/* End Hero Content */}

          {/* Main Content */}

          {/* End Main Content */}

          {/* Add Button */}
          {/* <AddButton style={styles.addbuttonstyle} /> */}
          {/* End Add Button */}
          <View style={styles.content}>
            <View style={[styles.frameGroup, styles.frameGroupLayout]}>
              <View style={[styles.bodycontainer, styles.herocontainerLayout]}>
                <ScrollView contentContainerStyle={styles.bodycontainerInner}>
                  {childId && studentName && studentImg ? (
                    studentData ? (
                      studentData.map((leave, index) => {
                        const studentIds = childId;
                        const studentId_index = studentIds.indexOf(
                          leave.student_id
                        );

                        return (
                          <PermissionHistory
                            imageUri={studentImg[studentId_index]}
                            imageUrl={imageUrl}
                            studentGet={studentGet}
                            childId={childId[studentId_index]}
                            name={studentName[studentId_index]}
                            type={
                              leave.apply_type === "sick_leave"
                                ? "Sick"
                                : "Excused"
                            }
                            time={formatDateTime(leave.created_at)}
                            leave={leave}
                          />
                        );
                      })
                    ) : (
                      console.log("Still loading")
                      // <LoadingModal modalVisible={true} color="red" />
                    )
                  ) : (
                    console.log("Still loading")
                    // <LoadingModal modalVisible={true} color="red" />
                  )}
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  addbuttonstyle: {
    top: 150,
    left: 100,
    position: "absolute",
  },

  herocontainer: {
    height: 30,
  },
  herocontainerLayout: {
    top: 20,
    alignItems: "center",
    width: "100%",
  },
  herocontainerParent: {
    height: 844,
  },

  ScrollViewcontainer: {
    backgroundColor: "blue",

    flex: 1,
  },
  ScrollView: {
    flex: 1,
  },
  Container: { marginTop: 25 },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backiconPosition: {
    height: 24,
    width: 20,
    left: 10,
    top: 0,
    position: "absolute",
  },
  lineBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
  },
  frameGroupLayout: {},
  btnprimaryFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  viewTypo: {
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
  },
  excusedTypo: {
    marginTop: 4,
    color: Color.colorDarkgray_100,
    height: 21,
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "left",
  },
  backicon: {
    width: 24,
    overflow: "hidden",
  },
  permissionHistory: {
    top: 1,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.headingMd20,
    color: Color.colorMidnightblue,
    width: 195,
    height: 26,
    textAlign: "center",
  },
  backiconParent: {
    width: 322,
  },
  line: {
    top: 46,
    left: 2,
    width: 315,
  },
  frameParent: {
    // backgroundColor: "purple",
    left: 15,
    height: 46,
    width: 322,
    top: 0,
  },
  allHistory: {
    color: Color.colorBlack,
    fontSize: FontSize.textMediumSm14_size,
    fontWeight: "700",
    textAlign: "left",
    flex: 1,
  },
  allHistoryWrapper: {
    flex: 0.1,
    height: 38,
    width: 306,
  },
  profilepicIcon: {
    width: 56,
    height: 58,
  },
  rufusStewart: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_300,
    height: 18,
    width: 87,
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "left",
  },
  excused: {
    width: 51,
  },
  line1: {
    width: 240,
    marginTop: 5,
  },
  maret20231040: {
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 123,
    height: 11,
    color: Color.colorDarkgray_100,
    textAlign: "left",
  },
  view: {
    fontSize: FontSize.size_3xs,
    color: Color.singleToneWhite,
    textAlign: "center",
  },
  btnprimary: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorTomato,
    width: 66,
    height: 35,
    marginLeft: 52,
    justifyContent: "center",
  },
  maret20231040AmParent: {
    marginTop: 5,
    flexDirection: "row",
  },
  frameWrapper: {
    marginLeft: 8,
  },
  profilepicParent: {
    flexDirection: "row",
  },
  history1: {
    top: 39,
    left: 0,
    position: "absolute",
  },
  sickLeave: {
    width: 87,
    marginTop: 4,
  },
  history2: {
    top: 143,
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    top: 50,
  },
  btnaddChild: {
    borderRadius: 2,
    width: 45,
    height: 45,
  },
  btnadd: {
    // backgroundColor: "cyan",
    alignItems: "center",
    flexDirection: "row",
  },
  frame: {
    // backgroundColor: "yellow",
    top: 600,
    alignItems: "flex-end",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    width: 352,
  },
  content: {
    top: 5,
    height: '100%',
    width: 352,
  },
  childPermissionHistory: {
    backgroundColor: Color.colorGray_100,
    // backgroundColor: "blue",
    width: 100,
    height: 500,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_11xl,
    flexDirection: "row",

    flex: 1,
  },

  contact: {
    top: 10,
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_11xl,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    height: '100%',
    width: "100%",
  },

  Text: { fontFamily: FontFamily.headingMd20 },
});

export default ChildPermissionHistorys;
