import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const PermissionHistory = ({ name, type, time, imageUri, imageUrl, leave, childId, studentGet}) => {
  const navigation = useNavigation();

  const handleViewHisto = () => {
    navigation.navigate("ChildPermissionViewHisto", {
      studentGet: studentGet,
      leave: leave,
      imageUri: imageUri,
      imageUrl: imageUrl,
      name: name,
      childId: childId
    });
  };

  const fullImageUrl = `${imageUrl}${imageUri}`;

  return (
    <View style={styles.history1}>
      <View style={styles.profilepicParent}>
        <Image
          style={styles.profilepicIcon}
          contentFit="cover"
          source={
            imageUri
              ? { uri: fullImageUrl }
              : require("../assets/profilepic.png") // Default image source
          }
        />
        <View style={styles.frameWrapper}>
          <View>
            <View>
              <Text style={styles.rufusStewart}>{name}</Text>
              <Text style={[styles.excused, styles.excusedTypo]}>{type}</Text>
            </View>
            <View style={[styles.line1, styles.lineBorder]} />
            <View style={styles.maret20231040AmParent}>
              <Text style={styles.maret20231040}>{time}</Text>
              <Button onPress={handleViewHisto} style={[styles.btnprimary]}>
                <Text style={[styles.view, styles.viewTypo]}>View</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: { marginTop: 25 },
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
  frameGroupLayout: {
    width: 306,
    position: "absolute",
  },
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
    marginLeft: -98,
    top: 1,
    left: "50%",
    fontSize: FontSize.headingMd20_size,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.headingMd20,
    color: Color.colorMidnightblue,
    width: 195,
    height: 22,
    textAlign: "center",
  },
  backiconParent: {
    width: 322,
  },
  line: {
    top: 46,
    left: 2,
    width: 315,
    position: "absolute",
  },
  frameParent: {
    left: 15,
    height: 46,
    width: 322,
    top: 0,
    position: "absolute",
  },
  allHistory: {
    color: Color.colorBlack,
    fontSize: FontSize.textMediumSm14_size,
    fontWeight: "700",
    textAlign: "left",
    flex: 1,
  },
  allHistoryWrapper: {
    height: 38,
    width: 306,
    position: "absolute",
    left: 0,
    top: 0,
  },
  profilepicIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
  },
  rufusStewart: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_300,
    height: 18,
    width: 240,
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
    marginBottom: 5,
    flex: 1,
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
    top: 76,
    alignSelf: "center",
    height: 218,
  },
  btnaddChild: {
    borderRadius: Border.br_11xl,
    width: 45,
    height: 45,
  },
  btnadd: {
    alignItems: "center",
    flexDirection: "row",
  },
  frame: {
    top: 727,
    alignItems: "flex-end",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    width: 352,
    overflow: "hidden",
  },
  content: {
    height: 772,
    width: 352,
  },
  childPermissionHistory: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    height: 844,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_11xl,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  Text: { fontFamily: FontFamily.headingMd20 },
});
export default PermissionHistory;
