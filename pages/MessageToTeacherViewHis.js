import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, NativeBaseProvider, FormControl, TextArea } from "native-base";
import { Image } from "expo-image";

import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import HeroContent from "../components/MessageToTeacherViewHis/HeroContent";
const MessageToTeacherViewHis = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.messageToTeacherViewHis}>
        <View style={styles.content}>
          <HeroContent />
          <View style={[styles.bodycontent, styles.bodycontentPosition]}>
            <Text style={[styles.maret20231340, styles.childTypo]}>
              14 Maret 2023, 13:40 AM
            </Text>
            <View style={styles.frameParent}>
              <Text style={[styles.child, styles.childTypo]}>Child</Text>
              <Input
                variant="rounded"
                placeholder="Rufus Stewart"
                _light={{
                  placeholderTextColor: "#181818",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
                editable={false}
              />
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
                          <Text style={[styles.placeholder, styles.childTypo]}>
                            Download File
                          </Text>
                          <View style={styles.cursor} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.messageParent}>
                <Text style={[styles.child, styles.childTypo]}>Message</Text>
                <View style={[styles.textArea, styles.textAreaLayout]}>
                  <FormControl>
                    <TextArea h={40} placeholder="Leave a note" isReadOnly />
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
    width: 390,
    height: 789,
  },
  messageToTeacherViewHis: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    height: 844,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    borderRadius: Border.br_xl,
  },
});

export default MessageToTeacherViewHis;
