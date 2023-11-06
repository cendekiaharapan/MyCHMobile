import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Password = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.password}>
      <View style={styles.content}>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/backicon1.png")}
          />
        </Pressable>
        <View style={styles.resetpassframe}>
          <Text style={styles.resetPassword}>Reset Password</Text>
          <Text
            style={[styles.forgotYourPassword, styles.resetTypo]}
          >{`Forgot your password?
Please enter your email address.
You will receive a link to create a new
password via email.`}</Text>
          <View style={[styles.ifemail, styles.ifemailShadowBox]}>
            <Image
              style={styles.emailimgIcon}
              contentFit="cover"
              source={require("../assets/emailimg.png")}
            />
            <TextInput
              style={[styles.emailInput, styles.textTypo]}
              placeholder="Emaill"
              placeholderTextColor="#888"
              keyboardType="email-address"
            />
          </View>
          <Pressable
            style={styles.btnprimary}
            onPress={() => navigation.navigate("AllPost")}
          >
            <Text style={[styles.reset, styles.resetTypo]}>RESET</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resetTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  ifemailShadowBox: {
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
    backgroundColor: Color.colorWhite,
  },
  ifemail: {
    paddingLeft: Padding.p_mini,
  },
  emailimgIcon: {
    width: 23,
    height: 23,
  },
  textTypo: {
    marginLeft: 10,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  back: {
    padding: 4,
    flexDirection: "row",
    overflow: "hidden",
  },
  resetPassword: {
    fontSize: FontSize.size_xl,
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  forgotYourPassword: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    marginTop: 30,
    color: Color.colorDarkslateblue,
    textAlign: "center",
  },
  if: {
    borderRadius: Border.br_69xl,
    width: 319,
    height: 45,
    zIndex: 0,
    backgroundColor: Color.colorWhite,
  },
  email1: {
    top: 12,
    left: 48,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    width: 271,
    zIndex: 1,
    position: "absolute",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  email: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    marginTop: 30,
    alignItems: "center",
  },
  reset: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  btnprimary: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorTomato,
    paddingHorizontal: 109,
    paddingVertical: Padding.p_sm,
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  resetpassframe: {
    marginTop: 97,
    alignItems: "center",
  },
  content: {
    alignSelf: "stretch",
  },
  password: {
    flex: 1,
    width: "100%",
    height: 800,
    paddingHorizontal: 20,
    paddingVertical: 92,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Password;
