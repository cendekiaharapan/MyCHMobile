import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Alert,
  StyleSheet,
  View,
  Text,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { NativeBaseProvider, Input, FormControl, TextArea } from "native-base";
import Button from "../components/Button";
import HeroContent from "../components/MessageToTeacherViewHis/HeroContentMessageToTeacherViewHis";

const MessageToTeacherViewHis = ({ route, navigation }) => {
  const {
    message_id,
    message_file,
    note,
    teacher,
    student,
    timestamp,
    image,
    imageUrl,
  } = route.params;

  const [messageID, setMessageID] = useState(message_id);
  const [messagefile, setMessageFile] = useState(message_file);
  const [noteText, setNoteText] = useState(note);
  const [teacherName, setTeacherName] = useState(teacher);
  const [studentName, setStudentName] = useState(student);
  const [timestampDetail, setTimestampDetail] = useState(timestamp);
  const [teacherImage, setTeacherImage] = useState(image);
  const [imageUrlPath, setImageUrlPath] = useState(imageUrl);
  const [showFile, setShowFile] = useState(true);
  const [formattedTimestamp, setFormattedTimestamp] = useState("");

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return date.toLocaleDateString("en-GB", options); // Adjust locale according to your preference
  };

  useEffect(() => {
    console.log("Message ID get", messageID);
    console.log("File get", messagefile);
    console.log("Note get:", noteText);
    console.log("Teacher Name get:", teacherName);
    console.log("Student Name get:", studentName);
    console.log("Timestamp get:", timestampDetail);
    console.log("Teacher Image get:", teacherImage);
    console.log("Image Url get:", imageUrlPath);
    formattedTimestamp;
    console.log("Formatted timestamp:", formattedTimestamp);
    setFormattedTimestamp(formatTimestamp(timestampDetail));
    // Hide the file view if messageFile is null
    if (!messagefile) {
      setShowFile(false);
    }
  }, [
    messageID,
    messagefile,
    noteText,
    teacherName,
    studentName,
    timestampDetail,
    teacherImage,
    imageUrlPath,
  ]);

  const openFileUrl = async () => {
    try {
      if (messagefile) {
        const fileUrl = `https://www.balichildrenshouse.com/myCH/ev-assets/uploads/communications/${messagefile}`;
        await Linking.openURL(fileUrl);
      } else {
        console.error("File is not available.");
      }
    } catch (error) {
      console.error("Error opening file URL:", error);
    }
  };

  const handleBackButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "MessageToTeacherHistory", // change this with your screen name
    });
  };

  return (
    <NativeBaseProvider>
      <View style={styles.messageToTeacherViewHis}>
        <View style={styles.content}>
          <View style={styles.HeroContainer}>
            <TouchableOpacity onPress={handleBackButton}>
              <Image
                style={styles.buttonbackIcon}
                contentFit="cover"
                source={require("../assets/images/buttonback.png")}
              />
            </TouchableOpacity>
            <Text style={styles.titleStyles}>History Message</Text>
          </View>
          <View style={[styles.bodycontent, styles.bodycontentPosition]}>
            <View style={styles.timestampContainer}>
              <Text style={styles.timestampText}>
                Sent at: {formattedTimestamp}
              </Text>
            </View>
            <View style={styles.frameParent}>
              <Text style={[styles.child, styles.childTypo]}>Child</Text>
              <Input
                variant="rounded"
                placeholder={studentName}
                _light={{
                  placeholderTextColor: "#181818",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
                editable={false}
              />

              {showFile && (
                <View style={styles.fileOptionalParent}>
                  <Text style={[styles.child, styles.childTypo]}>File</Text>
                  <View
                    style={[
                      styles.labelAndContaierWrapper,
                      styles.inputFieldLayout,
                    ]}
                  >
                    <View style={styles.labelAndContaier}>
                      <View style={[styles.inputField, styles.inputBorder]}>
                        <View style={styles.icons}>
                          <View style={styles.text}>
                            <Image
                              style={styles.playIcon}
                              contentFit="cover"
                              source={require("../assets/play2.png")}
                            />
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
                            <View style={styles.cursor} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}

              <View style={styles.messageParent}>
                <Text style={[styles.child, styles.childTypo]}>Message</Text>
                <View style={[styles.textArea, styles.textAreaLayout]}>
                  <FormControl>
                    <TextArea h={40} placeholder={noteText} isReadOnly />
                  </FormControl>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  timestampContainer: {
    width: 285,
    height: 20, // Adjust height as needed
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
    marginTop: 24, // Adjust as needed
  },
  timestampText: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: "#a6a6a6",
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "center", // Center the text
    // Add additional styling as needed
  },
  inputRoundedText: {
    fontFamily: "Poppins-Regular",
    color: "#171717",
  },
  bodycontentPosition: {
    left: "50%",
    alignItems: "center",
    position: "absolute",
  },
  teacherLayout: {
    height: 17,
    textAlign: "left",
    color: Color.colorMidnightblue,
  },
  childTypo1: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  childTypo: {
    fontSize: FontSize.textRegularXs12_size,
    textAlign: "left",
  },
  textAreaLayout: {
    width: 285,
    marginTop: 6,
  },
  inputFieldLayout: {
    height: 40,
    width: 285,
  },
  inputBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  savebuttonPosition: {
    padding: Padding.p_3xs,
    width: 314,
    marginLeft: -153,
    justifyContent: "center",
    left: "50%",
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  deleteTypo: {
    textAlign: "center",
    fontSize: FontSize.textMediumSm14_size,
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
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
    width: 391,
    height: 120,
    zIndex: 0,
    backgroundColor: Color.singleToneWhite,
  },
  iconhistory: {
    height: "21.67%",
    width: "7.22%",
    top: "39.17%",
    right: "5.28%",
    bottom: "39.17%",
    left: "87.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  unsplashaoewueh7yasIcon: {
    width: 56,
    height: 58,
  },
  pakPatrick: {
    fontSize: FontSize.textRegularMd16_size,
    width: 100,
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorMidnightblue,
  },
  teacher: {
    fontSize: FontSize.size_3xs,
    width: 83,
    marginTop: 7,
    height: 17,
    textAlign: "left",
    color: Color.colorMidnightblue,
  },
  pakPatrickParent: {
    marginLeft: 8,
    justifyContent: "center",
  },
  unsplashaoewueh7yasParent: {
    marginTop: -28,
    marginLeft: -81.5,
    zIndex: 2,
    top: "50%",
    flexDirection: "row",
  },
  ictwotoneArrowBackIcon: {
    marginTop: -12,
    left: 18,
    width: 24,
    height: 24,
    zIndex: 3,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  herocontent: {
    top: 0,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  maret20231340: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorDarkgray_100,
    width: 154,
    height: 20,
  },
  child: {
    color: Color.colorBlack,
    alignSelf: "stretch",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  inputRounded: {
    marginTop: 6,
    borderRadius: Border.br_9980xl,
    backgroundColor: Color.singleToneWhite,
  },
  playIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  placeholder: {
    lineHeight: 18,
    fontFamily: FontFamily.textRegularSm14,
    color: Color.textText900,
    marginLeft: 8,
  },
  cursor: {
    backgroundColor: Color.primaryPrimary700,
    width: 1,
    height: 18,
    display: "none",
    marginLeft: 8,
  },
  text: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  icons: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  inputField: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_5xs,
    borderColor: Color.mutedMuted300,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    height: 40,
    width: 285,
    borderRadius: Border.br_9980xl,
    backgroundColor: Color.singleToneWhite,
    alignItems: "center",
  },
  labelAndContaier: {
    alignSelf: "stretch",
    flex: 1,
  },
  labelAndContaierWrapper: {
    marginTop: 6,
  },
  fileOptionalParent: {
    marginTop: 24,
  },
  defaultInputMaximum: {
    fontWeight: "500",
    fontFamily: FontFamily.textMediumSm14,
    color: Color.textLightSecondary,
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
    backgroundColor: Color.colorWhitesmoke,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_5xs,
    borderColor: Color.mutedMuted300,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  textArea: {
    height: 174,
    marginTop: 6,
  },
  messageParent: {
    height: 198,
    marginTop: 24,
  },
  frameParent: {
    marginTop: 42,
    alignItems: "center",
  },
  bodycontent: {
    marginLeft: -142,
    top: 181,
  },
  saveChanges: {
    color: Color.singleToneWhite,
  },
  savebutton: {
    top: 669,
    backgroundColor: Color.colorTomato,
  },
  delete: {
    color: Color.colorGray_200,
  },
  deletebutton: {
    top: 741,
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    borderStyle: "solid",
    padding: Padding.p_3xs,
    width: 314,
    marginLeft: -153,
    backgroundColor: Color.singleToneWhite,
  },
  content: {
    flex: 1,
  },
  messageToTeacherViewHis: {
    backgroundColor: Color.colorGray_100,
    // width: "100%",
    // height: 844,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    borderRadius: Border.br_xl,
  },
  HeroContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 40,
    width: "100%",
    height: 50,
  },
  buttonbackIcon: {
    width: 20,
    height: 20,
    right: 70,
  },
  titleStyles: {
    color: "#241856",
    fontFamily: FontFamily.poppinsBold,
    fontSize: 20,
  },
});

export default MessageToTeacherViewHis;
