import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import HeroContent from "../components/MessageToTeacherSendMes/heroContentMessageToTeacherSend";
import {
  Button,
  NativeBaseProvider,
  FormControl,
  Input,
  TextArea,
} from "native-base";
import DocumentPick from "../components/DocumentPick";
import { useNavigation } from "@react-navigation/native";
import DropDown from "../components/DropDown";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
  saveTokenToSecureStore,
  getTokenFromSecureStore,
  saveRespDataSecureStore,
  getRespDataFromSecureStore,
  clearTokenFromSecureStore,
  clearResponseDataFromSecureStore,
} from "../database/database";
import { useEffect } from "react";
import { LoadingModal } from "react-native-loading-modal";
import Toast from "react-native-toast-message";

const MessageToTeacherSendMes = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const { parentId } = route.params;
  const [parentId, setParentId] = React.useState("");
  const [selectedChild, setSelectedChild] = React.useState("");
  const [note, setNote] = React.useState("");
  const [studentId, setStudentId] = React.useState("");
  const [studentName, setStudentName] = React.useState("");
  const [childData, setChildData] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  const showToastSuccess = () => {
    Toast.show({
      text1: "Successfully, send message!",
      text1Style: { fontSize: 15 },
      text2Style: { fontSize: 13 },
      type: "success",
    });
  };

  const showToastErrorRequired = (message) => {
    Toast.show({
      text1: message,
      text1Style: { fontSize: 15 },
      text2Style: { fontSize: 13 },
      type: "error",
    });
  };

  useEffect(() => {
    setLoading(true);
    getRespDataFromSecureStore().then((data) => {
      if (data) {
        setParentId(data.user.id);
      } else {
        console.log("no response data in secure store");
      }
    });
    retrieveItem("childData")
      .then((data) => {
        if (data) {
          // Use the retrieved data
          const student_ids = data.map((item) => item.id);
          const student_name = data.map((item) => item.name);

          // Update your component state or data source with the new data
          // For example, if you're using state in a functional component:
          fetchChildData(student_ids, student_name);
          setStudentId(student_ids);
          setStudentName(student_name);
          console.log("set finished!");
        } else {
          // Handle the case when no data is found
          console.log("No data found in AsyncStorage.");
        }
      })
      .catch((error) => {
        console.error("Error fetching response data from SQLite:", error);
      });
    console.log("use effect finished!");
    setTimeout(() => {
            setLoading(false);
          }, 100);
  }, []);

  const fetchChildData = (studentId, studentName) => {
    const childData = studentId.map((id, index) => ({
      id,
      name: studentName[index],
    }));

    setChildData(childData);
  };

  const handleBackButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "BottomNavbar", // change this with your screen name
    });
  };

  const handleHistoryButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "MessageToTeacherHistory", // change this with your screen name
    });
  };

  const handleSubmitButton = () => {
    setLoading(true);
    console.log("submitted button student id : ", studentId);
    console.log("Selected child:", selectedChild);
    if (!selectedChild) {
      showToastErrorRequired("Please select your child!");
      setTimeout(() => {
            setLoading(false);
          }, 100);
      return;
    }

    const selectedChildData = childData.find(
      (child) => child.name === selectedChild
    );

    if (selectedChildData) {
      const data = {
        student_id: selectedChildData.id,
        sender_id: parentId,
        message: note,
      };
      
      console.log("Data", data);

      axios
        .post(
          "https://www.balichildrenshouse.com/myCH/api/parent-communicate",
          data
        )
        .then((response) => {
          setTimeout(() => {
            setLoading(false);
          }, 100);
          showToastSuccess();
          navigation.navigate("MessageToTeacherHistory");
        })
        .catch((error) => {
          if (error.response) {
            setTimeout(() => {
            setLoading(false);
          }, 100);
            showToastErrorRequired("Please make sure note field is filled!");
            console.error("API response error:", error.response.data);
          } else {
            setTimeout(() => {
            setLoading(false);
          }, 100);
            showToastErrorRequired(error.message);
            console.error("API request error:", error.message);
          }
        });
    } else {
      alert("Selected child not found in the data.");
    }
  };

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
      {/* <LoadingModal modalVisible={loading} color="red" /> */}
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.messageToTeacherSendMes}>
          <View style={styles.content}>
            {/* <HeroContent /> */}
            <View style={styles.HeroContent}>
              <TouchableOpacity onPress={handleBackButton}>
                <Image
                  style={styles.buttonbackIcon}
                  contentFit="cover"
                  source={require("../assets/images/buttonback.png")}
                />
              </TouchableOpacity>
              <Text style={styles.titleStyles}>Message to Teacher</Text>
              <TouchableOpacity onPress={handleHistoryButton}>
                <Image
                  style={styles.historyicon}
                  contentFit="cover"
                  source={require("../assets/images/historyicon.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.maincontent}>
              <DropDown
                label="Choose Your Child"
                data={childData}
                selected={selectedChild}
                setSelected={setSelectedChild}
                isReadOnly
              />

              {/* <View style={styles.inputfield2}>
                <FormControl>
                  <FormControl.Label>Letter (Optional)</FormControl.Label>
                  <DocumentPick />
                </FormControl>
              </View> */}
              <FormControl mb="3">
                <FormControl.Label>Message</FormControl.Label>
                <TextArea
                  h={40}
                  placeholder="Leave a message"
                  onChangeText={(text) => setNote(text)}
                  value={note}
                />
              </FormControl>
            </View>
            <TouchableOpacity
              onPress={handleSubmitButton}
              style={styles.buttonsend}
            >
              <View>
                <Text style={styles.sendMessage}>Send Message</Text>
              </View>
            </TouchableOpacity>
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
  helperTextFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  iconLayout1: {
    maxWidth: "100%",
    position: "absolute",
  },
  buSekarLayout: {
    height: 17,
    width: 73,
    textAlign: "center",
    color: Color.colorMidnightblue,
  },
  childTypo1: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  iconLayout: {
    height: 16,
    overflow: "hidden",
  },
  childTypo: {
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "left",
  },
  textAreaSpaceBlock: {
    marginTop: 6,
    width: 285,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: Color.mutedMuted300,
    borderStyle: "solid",
    flexDirection: "row",
  },
  placeholderTypo: {
    color: Color.textText900,
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.textRegularXs12_size,
  },
  textLayout: {
    width: 212,
    lineHeight: 21,
    fontSize: FontSize.textMediumSm14_size,
    fontFamily: FontFamily.textRegularSm14,
  },
  rectangleui: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1.0568413734436035,
    },
    shadowRadius: 2.11,
    elevation: 2.11,
    shadowOpacity: 1,
    zIndex: 0,
    backgroundColor: Color.singleToneWhite,
    height: 125,
    flex: 1,
  },
  buttonhistoryIcon: {
    width: "7.22%",
    top: 50,
    right: "5.28%",
    left: "87.5%",
    height: 26,
    zIndex: 1,
    overflow: "hidden",
  },
  historyicon: {
    width: 26,
    height: 26,
  },
  profilepictIcon: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  buSekar: {
    fontSize: FontSize.textRegularMd16_size,
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
    height: 17,
    width: 73,
    textAlign: "center",
    color: Color.colorMidnightblue,
  },
  mathTeacher: {
    fontSize: FontSize.size_3xs,
    marginTop: 5,
    height: 17,
    width: 73,
    textAlign: "center",
    color: Color.colorMidnightblue,
  },
  buSekarParent: {
    marginLeft: 13,
  },
  profileteacher: {
    marginLeft: -68,
    top: 38,
    left: "50%",
    zIndex: 2,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonbackIcon: {
    width: 20,
    height: 20,
  },
  herocontent: {
    height: 125,
    justifyContent: "space-between",
  },
  child: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    alignSelf: "stretch",
  },
  cursor: {
    backgroundColor: Color.primaryPrimary700,
    width: 1,
    height: 18,
    marginLeft: 8,
    display: "none",
  },
  text: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  icons: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  inputField: {
    top: 0,
    left: 0,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    height: 40,
    borderRadius: Border.br_9980xl,
    width: 285,
    borderWidth: 1,
    borderColor: Color.mutedMuted300,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.singleToneWhite,
    alignItems: "center",
  },
  labelAndContaier: {
    alignSelf: "stretch",
    flex: 1,
  },
  inputRounded: {
    height: 40,
    borderRadius: Border.br_9980xl,
  },
  playIcon: {
    width: 16,
  },
  placeholder1: {
    marginLeft: 8,
  },
  inputfield2: {
    marginTop: 0,
  },
  defaultInputMaximum: {
    fontWeight: "500",
    fontFamily: FontFamily.textMediumSm14,
    color: Color.textLightSecondary,
    textAlign: "left",
    flex: 1,
  },
  scroll: {
    backgroundColor: Color.textDarkSecondary,
    width: 8,
    height: 99,
    marginLeft: 4,
    borderRadius: Border.br_9980xl,
  },
  defaultInputMaximumHeightParent: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.textText50,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_5xs,
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  errorText: {
    color: Color.textDarkSecondary,
    textAlign: "left",
  },
  counterText: {
    textAlign: "right",
    color: Color.textLightSecondary,
  },
  helperText: {
    marginTop: 4,
    display: "none",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  textArea: {
    height: 174,
  },
  maincontent: {
    width: 285,
    height: '40%',
    marginTop: '30%',
  },
  HeroContent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    top: 30,
    width: 300,
    height: 50,
  },
  sendMessage: {
    color: Color.singleToneWhite,
    fontSize: FontSize.textMediumSm14_size,
    textAlign: "center",
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
  },
  buttonsend: {
    borderRadius: Border.br_31xl,
    backgroundColor: "yellow",
    backgroundColor: Color.colorTomato,
    width: 320,
    justifyContent: "center",
    padding: Padding.p_3xs,
    marginTop: 71,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
  },
  content: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  titleStyles: {
    color: "#241856",
    fontFamily: FontFamily.poppinsBold,
    fontSize: 20,
  },
  messageToTeacherSendMes: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    width: "100%",
    height: 844,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
});

export default MessageToTeacherSendMes;
