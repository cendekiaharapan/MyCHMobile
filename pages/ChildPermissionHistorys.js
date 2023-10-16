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

const ChildPermissionHistorys = () => {
  const navigation = useNavigation();
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
                  {/* History Content */}

                  <PermissionHistory
                    name="Patrick Lay"
                    type="Excused"
                    time="29 Maret 2023, 10:40 AM"
                  />
                  <PermissionHistory
                    name="Patrick Lay"
                    type="Excused"
                    time="29 Maret 2023, 10:40 AM"
                  />
                  <PermissionHistory
                    name="Patrick Lay"
                    type="Excused"
                    time="29 Maret 2023, 10:40 AM"
                  />
                  <PermissionHistory
                    name="Patrick Lay"
                    type="Excused"
                    time="29 Maret 2023, 10:40 AM"
                  />
                  <PermissionHistory
                    name="Patrick Lay"
                    type="Excused"
                    time="29 Maret 2023, 10:40 AM"
                  />
                  <PermissionHistory
                    name="Patrick Lay"
                    type="Excused"
                    time="29 Maret 2023, 10:40 AM"
                  />
                  <PermissionHistory
                    name="Patrick Lay"
                    type="Excused"
                    time="29 Maret 2023, 10:40 AM"
                  />
                  <PermissionHistory
                    name="Patrick Lay"
                    type="Excused"
                    time="29 Maret 2023, 10:40 AM"
                  />
                  <PermissionHistory
                    name="Patrick Lay"
                    type="Excused"
                    time="29 Maret 2023, 10:40 AM"
                  />

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
