import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.signIn, styles.signInFlexBox]}>
      <View style={styles.signInFlexBox}>
        <Text style={styles.login}>LOGIN</Text>
        <Image
          style={styles.loginimgIcon}
          contentFit="cover"
          source={require("../assets/loginimg.png")}
        />
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
            keyboardType="email-address"/>
        </View>
        <View style={[styles.ifpassword, styles.ifemailShadowBox]}>
        <Image
          style={styles.emailimgIcon}
          contentFit="cover"
          source={require("../assets/pass.png")}
        />
        <TextInput
          style={[styles.passwordInput, styles.textTypo]}
          placeholder="Type your password" 
          placeholderTextColor="#888" 
          secureTextEntry={true} 
        />
        </View>
        <Pressable
          style={styles.forgetPasswordClickContainer}
          onPress={() => navigation.navigate("Password")}
        >
          <Text style={[styles.text1, styles.text1Typo]}>
            <Text style={styles.forgetPassword}>{`Forget Password? `}</Text>
            <Text style={styles.clickHere}>Click Here</Text>
          </Text>
        </Pressable>
        <Pressable
          style={styles.btnprimary}
          onPress={() => navigation.navigate("AllPost")}
        >
          <Text style={[styles.login1, styles.text1Typo]}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  textTypo: {
    marginLeft: 10,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  text1Typo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  login: {
    fontSize: FontSize.size_xl,
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  loginimgIcon: {
    width: 172,
    height: 206,
    marginTop: 44,
  },
  emailimgIcon: {
    width: 23,
    height: 23,
  },
  email: {
    width: 271,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  ifemail: {
    paddingLeft: Padding.p_mini,
  },
  text: {
    fontSize: FontSize.size_base,
    width: 209,
    height: 20,
  },
  ifpassword: {
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
  text1: {
    color: Color.colorDarkslateblue,
    textAlign: "center",
  },
  forgetPasswordClickContainer: {
    marginTop: 44,
  },
  login1: {
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  btnprimary: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorTomato,
    width: 320,
    height: 50,
    alignItems: "flex-end",
    paddingHorizontal: 137,
    paddingVertical: Padding.p_sm,
    marginTop: 44,
  },
  signIn: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 80,
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
