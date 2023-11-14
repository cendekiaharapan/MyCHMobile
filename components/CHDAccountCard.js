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

const CHDCard = ({ student_name, chd_balance }) => {
  const navigation = useNavigation();

  const handleCHDBalance = () => {
    navigation.navigate("PaymentTopup", {
      student_name: student_name,
      chd_balance: chd_balance
    });
  };

  return (
    <Pressable
      style={styles.chdCard}
      onPress={handleCHDBalance}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/chdcard.png")}
      >
        <Text style={styles.textStudentName}>{student_name}</Text>
        <View style={styles.frame}>
          <Text style={styles.chdValueTypo}>{chd_balance} </Text>
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
