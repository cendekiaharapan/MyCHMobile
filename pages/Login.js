import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { Home } from "./Home";

const Login = ({ navigation }) => {
  return (
    <View style={styles.signIn}>
      <Text style={styles.login}>LOGIN</Text>
      <Image
        style={styles.transistorManRunsOutTheDoIcon}
        contentFit="cover"
        source={require("../assets/images/login.png")}
      />
      <View style={[styles.email, styles.emailShadowBox]}>
        <Image
          style={styles.userMaleIcon}
          contentFit="cover"
          source={require("../assets/images/user-male1.png")}
        />
        <Text style={[styles.email1, styles.textTypo]}>Email</Text>
      </View>
      <View style={[styles.password, styles.emailShadowBox]}>
        <Image
          style={styles.userMaleIcon}
          contentFit="cover"
          source={require("../assets/images/key.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>**********</Text>
      </View>
      <TouchableOpacity
        style={styles.forgetPasswordClickContainer}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Password")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.forgetPassword}>{`Forget Password? `}</Text>
          <Text style={styles.clickHere}>Click Here</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnprimary}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("HomeParent")}
      >
        <Text style={[styles.login1, styles.textTypo]}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  emailShadowBox: {
    flexDirection: "row",
    height: 45,
    width: 319,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: Border.br_69xl,
    marginTop: 44,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  textTypo: {
    marginLeft: 10,
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  login1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  login: {
    fontSize: FontSize.size_xl,
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.darkslateblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  transistorManRunsOutTheDoIcon: {
    width: 172,
    height: 206,
    marginTop: 44,
  },
  userMaleIcon: {
    width: 23,
    height: 23,
  },
  email1: {
    width: 271,
    fontSize: FontSize.size_sm,
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  email: {
    paddingLeft: Padding.p_mini,
  },
  text: {
    fontSize: FontSize.size_base,
    width: 209,
    height: 20,
  },
  password: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
  },
  forgetPassword: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
  },
  clickHere: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  forgetPasswordClickContainer: {
    marginTop: 44,
    color: Color.darkslateblue,
    textAlign: "center",
  },
  login1: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  btnprimary: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.tomato,
    width: 320,
    height: 50,
    paddingHorizontal: 137,
    paddingVertical: Padding.p_sm,
    alignItems: "flex-end",
    marginTop: 44,
  },
  signIn: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default Login;
