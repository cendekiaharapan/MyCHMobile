import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FormControl, TextArea } from "native-base";
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding,
} from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const MessageHistory = ({
  note,
  teacher = "Bu Sekar",
  student = "Rufus Stewart",
  timestamp = "25 Maret 2023, 12:40 AM",
  image,
  imageUrl,
}) => {
  const navigation = useNavigation();
  const concatenatedImageUrl = `${imageUrl}${image}`;
  return (
    <View style={styles.messagehistory}>
      <View style={styles.helperTextFlexBox}>
        <View style={styles.helperTextFlexBox}>
          <Image
            style={styles.unsplashaoewueh7yasIcon}
            contentFit="cover"
            source={{
              uri: concatenatedImageUrl,
            }}
          />
        </View>
        <View style={styles.buSekarParent}>
          <Text style={styles.buSekar}>{teacher}</Text>
          <View style={styles.frameChild} />
          <View style={styles.maret20231240AmParent}>
            <Text style={[styles.maret20231240, styles.messageTypo]}>
              {timestamp}
            </Text>
            <Text style={[styles.rufusStewart, styles.viewTypo]}>
              {student}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.messageParent}>
        <Text style={[styles.message, styles.messageTypo]}>Message</Text>
        <FormControl>
          <TextArea
            readOnly
            h={20}
            placeholder="Message History"
            value={note}
          />
        </FormControl>
        <TouchableOpacity
          onPress={() => navigation.navigate("MessageToTeacherViewHis")}
        >
          <View style={[styles.viewWrapper, styles.helperTextFlexBox]}>
            <Text style={[styles.view, styles.viewTypo]}>View</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
  },
  viewTypo: {
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
  },
  helperTextFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textLayout: {
    width: 212,
    fontFamily: FontFamily.textRegularSm14,
    lineHeight: 21,
    fontSize: FontSize.textRegularSm14_size,
  },
  unsplashaoewueh7yasIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
  },
  buSekar: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 250,
    height: 18,
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.textRegularXs12_size,
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
  },
  rufusStewart: {
    width: 88,
    height: 13,
    marginLeft: 30,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
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
    alignSelf: "stretch",
    fontSize: FontSize.textRegularXs12_size,
  },
  defaultInputMaximum: {
    color: Color.textText900,
    flex: 1,
    textAlign: "left",
    fontSize: FontSize.textRegularXs12_size,
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
    overflow: "hidden",
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_9xs,
    paddingBottom: Padding.p_5xs,
    flex: 1,
    alignSelf: "stretch",
    borderStyle: "solid",
    flexDirection: "row",
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
    justifyContent: "space-between",
    marginTop: 4,
    display: "none",
    alignSelf: "stretch",
  },
  frameGroup: {
    flex: 1,
    alignSelf: "stretch",
  },
  textArea: {
    height: 129,
    alignSelf: "stretch",
    marginTop: 6,
  },
  view: {
    color: Color.singleToneWhite,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    height: 30,
  },
  viewWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorTomato,
    width: 66,
    height: 25,
    justifyContent: "center",
    padding: Padding.p_3xs,
    paddingTop: 22,
    marginTop: 6,
  },
  messageParent: {
    width: 242,
  },
  messagehistory: {
    marginTop: 10,
    alignItems: "flex-end",
  },
});

export default MessageHistory;
