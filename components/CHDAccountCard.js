import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CHDCard = ({ studentName, chdBalance }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.chdCard}
      onPress={() => navigation.navigate("PaymentTopup")}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/chdcard.png")}
      >
        <Text style={styles.textStudentName}>{studentName}</Text>
        <View style={styles.frame}>
          <Text style={styles.chdValueTypo}>{chdBalance} </Text>
          <Text style={[styles.currrentBalance, styles.chdValueTypo]}>
            CHD  | Current Balance
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chdValueTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    textAlign: "left",
    textTransform: "uppercase",
  },
  textStudentName: {
    fontSize: FontSize.size_mini,
    letterSpacing: -0.1,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    textTransform: "uppercase",
  },
  currrentBalance: {
    marginLeft: 10,
  },
  frame: {
    width: 300,
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 37,
  },
  icon: {
    borderRadius: Border.br_3xs,
    width: 350,
    height: 220,
    paddingHorizontal: Padding.p_16xl,
    paddingVertical: Padding.p_31xl,
  },
  chdCard: {
    marginTop: 20,
  },
});

export default CHDCard;