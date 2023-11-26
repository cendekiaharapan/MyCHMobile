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
import { useNavigation } from "@react-navigation/native";
const HeroContent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.herocontent}>
      <View style={styles.rectangleuiParent}>
        <View style={styles.profileteacher}>
          <View style={styles.buSekarParent}>
            <Text style={[styles.buSekar, styles.buSekarLayout]}>
              Communication
            </Text>
            <Text style={[styles.mathTeacher, styles.buSekarLayout]}>
              Math Teacher
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonbackWrapper}
          onPress={() => navigation.navigate("ContactDashboard")}
        >
          <View>
            <Image
              style={styles.buttonbackIcon}
              contentFit="cover"
              source={require("../../assets/buttonback.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buSekarLayout: {
    height: 17,
    width: 73,
    textAlign: "center",
    color: Color.colorMidnightblue,
  },
  rectangleui: {
    alignSelf: "stretch",
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1.0568413734436035,
    },
    shadowRadius: 2.11,
    elevation: 2.11,
    shadowOpacity: 1,
    zIndex: 0,
    height: 125,
  },
  profilepictIcon: {
    borderRadius: Border.br_81xl,
    width: 50,
    height: 50,
  },
  buSekar: {
    fontSize: FontSize.textRegularMd16_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingMd20,
  },
  mathTeacher: {
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    marginTop: 5,
  },
  buSekarParent: {
    marginLeft: 13,
  },
  profileteacher: {
    marginLeft: -68,
    top: 38,
    left: "50%",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    flexDirection: "row",
  },
  buttonbackIcon: {
    width: 17,
    height: 16,
  },
  buttonbackWrapper: {
    top: 55,
    left: 24,
    zIndex: 2,
    height: 16,
    position: "absolute",
    justifyContent: "space-between",
  },
  rectangleuiParent: {
    flex: 1,
    justifyContent: "space-between",
    height: 125,
    backgroundColor: "#fcfcfc",
  },
  herocontent: {
    top: -1,
    width: 398,
    justifyContent: "space-between",
    flexDirection: "row",
    height: 125,
  },
});

export default HeroContent;
