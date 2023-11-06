import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding,
} from "../../GlobalStyles";

const HeroContent = () => {
  return (
    <View style={styles.herocontent}>
      <View
        style={[
          styles.unsplashaoewueh7yasParent,
          styles.ictwotoneArrowBackIconPosition,
        ]}
      >
        <Image
          style={styles.unsplashaoewueh7yasIcon}
          contentFit="cover"
          source={require("../../assets/unsplashaoewueh7yas.png")}
        />
        <View style={styles.pakPatrickParent}>
          <Text style={[styles.pakPatrick, styles.teacherLayout]}>
            Pak Patrick
          </Text>
          <Text style={[styles.teacher, styles.teacherLayout]}>Teacher</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("MessageToTeacherSendMes")}
      >
        <View style={[styles.vectorWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../../assets/vector5.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vectorWrapper: {
    top: 42,
    left: 12,
  },
  ictwotoneArrowBackIconPosition: {
    top: "50%",
    position: "absolute",
  },
  teacherLayout: {
    height: 17,
    textAlign: "left",
    color: Color.colorMidnightblue,
  },
  rectangleui: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: "#fcfcfc",

    zIndex: 0,
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
    overflow: "hidden",
    position: "absolute",
  },
  unsplashaoewueh7yasIcon: {
    width: 56,
    height: 58,
  },
  pakPatrick: {
    fontSize: FontSize.textRegularMd16_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingMd20,
    width: 100,
  },
  teacher: {
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 83,
    marginTop: 7,
  },
  pakPatrickParent: {
    justifyContent: "center",
    marginLeft: 8,
  },
  unsplashaoewueh7yasParent: {
    marginTop: -28,
    marginLeft: -81.5,
    left: "50%",
    flexDirection: "row",
    zIndex: 2,
    alignItems: "center",
  },
  ictwotoneArrowBackIcon: {
    backgroundColor: "blue",
    marginTop: -12,
    left: 18,
    width: 24,
    height: 24,
    zIndex: 3,
    overflow: "hidden",
  },
  herocontent: {
    width: 391,
    height: 120,

    top: 20,
    alignItems: "center",
  },
});

export default HeroContent;
