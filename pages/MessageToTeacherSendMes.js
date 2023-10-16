import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import HeroContent from "../components/MessageToTeacherSendMes/heroContent";
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
const MessageToTeacherSendMes = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.messageToTeacherSendMes}>
          <View style={styles.content}>
            <HeroContent />
            {/* Main Content */}
            <View style={styles.maincontent}>
              {/* Child Form */}
              <DropDown label="Child" />
              {/* End Child Form */}

              {/* Document Picker */}
              <View style={styles.inputfield2}>
                <FormControl>
                  <FormControl.Label>Letter (Optional)</FormControl.Label>
                  <DocumentPick />
                </FormControl>
              </View>
              {/* End Document Picker */}

              {/* Message Form */}
              <FormControl mb="3">
                <FormControl.Label>Note</FormControl.Label>
                <TextArea h={40} placeholder="Leave a note" />
              </FormControl>
              {/* End Message Form */}
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("MessageToTeacherHistory")}
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
    marginTop: -7.5,
    width: "4.44%",
    top: "50%",
    right: "89.44%",
    left: "6.11%",
    zIndex: 3,
    maxWidth: "100%",
    position: "absolute",
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
    height: 375,
    marginTop: 71,
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
