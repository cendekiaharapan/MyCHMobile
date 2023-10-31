import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { NativeBaseProvider, StatusBar, ScrollView } from "native-base";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import HeroContent from "../components/MessageToTeacherHistory/HeroContentMessageToTeacherHis";
import MessageHistory from "../components/MessageToTeacherHistory/MessageHistory";
const MessageToTeacherHistory = () => {
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
                <MessageHistory />
                <MessageHistory />
                <MessageHistory />
                <MessageHistory />
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
