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
} from "react-native";
import { Button, NativeBaseProvider } from "native-base";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import PermissionHistory from "../components/PermissionHistory";
import { useNavigation } from "@react-navigation/native";
import AddButton from "../components/AddButton";
import axios from "axios";
import { useEffect, useState } from "react";

const ChildPermissionHistorys = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log("use Effect actived!");
    fetchMultipleStudentsData();
  }, []);

  const fetchChildPermissionData = async (studentId) => {
    try {
      const response = await axios.get(
        `https://www.balichildrenshouse.com/myCHStaging/api/get-leave-by-student-id/${studentId}`
      );

      // Handle the response data
      const data = response.data;
      console.log(`Data for student ${studentId}:`, data);

      return data; // Return the data for this student
    } catch (error) {
      // Handle errors
      console.error(`Error for student ${studentId}:`, error);
      return null; // Return null for this student's data
    }
  };

  const fetchMultipleStudentsData = async () => {
    const studentIds = [1029, 1396]; // Replace with the IDs of the students you want to fetch data for
    const studentName = ["Timothy Jacob", "Tiffany Janice"];
    try {
      // Use Promise.all to fetch data for multiple students concurrently
      const studentDataPromises = studentIds.map((studentId) =>
        fetchChildPermissionData(studentId)
      );
      const studentData = await Promise.all(studentDataPromises);

      const flattenedLeaves = studentData.reduce((accumulator, student) => {
        return accumulator.concat(student.leaves);
      }, []);

      console.log("Flattened Before Sorted : ", flattenedLeaves);

      flattenedLeaves.sort((leaveA, leaveB) => {
        const dateA = new Date(leaveA.created_at);
        const dateB = new Date(leaveB.created_at);

        return dateB - dateA;
      });

      console.log("Flattened After Sorted : ", flattenedLeaves);

      setStudentData(flattenedLeaves);

      // // Now you have an array of data for multiple students
      // console.log("All Student Data:", studentData);

      // studentData.forEach((student) => {
      //   // 'student' represents data for one student
      //   const leaves = student.leaves; // Access the array of leaves for the student

      //   // You can iterate through the leaves for this student
      //   leaves.forEach((leave, index) => {
      //     const applyType = leave.apply_type; // Access apply_type
      //     const createdAt = leave.created_at; // Access created_at

      //     if (leave.student_id === 1029) {
      //       const child_name = studentName[0];
      //       console.log(`Student ${child_name}, History ${index}:`);
      //     } else {
      //       const child_name = studentName[1];
      //       console.log(`Student ${child_name}, History ${index}:`);
      //     }

      //     // Now, you can use 'applyType' and 'createdAt' to do whatever you need with this leave data

      //     console.log(`Apply Type: ${applyType}`);
      //     console.log(`Created At: ${createdAt}`);
      //     console.log("------------------");
      //   });
      // });

      // You can set the data to your state or do any necessary processing
    } catch (error) {
      // Handle errors if any of the requests fail
      console.error("Error:", error);
    }
  };

  const [studentData, setStudentData] = useState([]);
  const [studentName, setStudentName] = useState([
    "Timothy Jacob",
    "Tiffany Janice",
  ]);

  return (
    <NativeBaseProvider>
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
          <AddButton style={styles.addbuttonstyle} />
          {/* End Add Button */}
          <View style={styles.content}>
            <View style={[styles.frameGroup, styles.frameGroupLayout]}>
              <View style={[styles.bodycontainer, styles.herocontainerLayout]}>
                <ScrollView contentContainerStyle={styles.bodycontainerInner}>
                  {studentData.map((leave, index) => {
                    const studentName = ["Timothy Jacob", "Tiffany Janice"];
                    const studentIds = [1029, 1396];
                    const studentId_index = studentIds.indexOf(
                      leave.student_id
                    );

                    return (
                      <PermissionHistory
                        name={studentName[studentId_index]}
                        type={
                          leave.apply_type === "sick_leave" ? "Sick" : "Excused"
                        }
                        time={leave.created_at}
                      />
                    );
                  })}

                  {/* EndHistory Content */}
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
    left: 0,
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
    height: 18,
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

    fontSize: FontSize.headingMd20_size,
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
    height: 543,
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
    backgroundColor: Color.colorGray_100,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_11xl,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    height: 844,
    width: "100%",
  },

  Text: { fontFamily: FontFamily.headingMd20 },
});

export default ChildPermissionHistorys;