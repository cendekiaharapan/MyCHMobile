import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const ContactList = ({ name = "Patrick Lay" }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.frameChildLayout}>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={styles.rectangleGroup}>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../../assets/rectangle-5.png")}
        />
        <View style={styles.ibuSekarParent}>
          <Text style={styles.ibuSekar}>{name}</Text>
          <Text style={styles.grade1Mat}>
            Grade 1 Mat, AKM Computing, AKM Math
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("MessageToTeacherSendMes")}
          >
            <Image
              style={styles.bxsmessageIcon}
              contentFit="cover"
              source={require("../../assets/bxsmessage.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    marginBottom: 15,
    height: 114,
    width: 336,
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2.34,
    elevation: 2.34,
    shadowOpacity: 1,
    borderColor: "d5d5d5",
    borderRadius: 5,
    position: "absolute",
  },
  frameItem: {
    width: 88,
    height: 102,
    borderRadius: 5,
  },
  ibuSekar: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: FontFamily.headingMd20,
    color: Color.colorDarkslategray_100,
    width: 213,
    textAlign: "left",
  },
  grade1Mat: {
    fontSize: 9,
    fontWeight: "500",
    fontFamily: FontFamily.textMediumSm14,
    color: Color.colorGray_500,
    marginTop: 10,
    textAlign: "left",
  },
  bxsmessageIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginTop: 10,
  },
  ibuSekarParent: {
    marginLeft: 24,
  },
  rectangleGroup: {
    top: 9,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
});

export default ContactList;
