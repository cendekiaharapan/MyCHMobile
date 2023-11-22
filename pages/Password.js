import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { StyleSheet, View, Pressable, Text, TextInput, Image } from "react-native";
import Toast from "react-native-toast-message";
import { LoadingModal } from "react-native-loading-modal";
import axios from "axios";

const Password = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendRequestPassword = async () => {
    if (email.trim() === "") {
      setLoading(false);
      Toast.show({
        type: "error",
        position: "top",
        text1: "Please enter your email",
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }
  
    try {
      const response = await axios.post(
        "https://www.balichildrenshouse.com/myCH/api/request-reset",
        { email }
      );
    
      if (response.data.message) {
        // Password reset link sent successfully
        setLoading(false);
        Toast.show({
          type: "success",
          position: "top",
          text1: "Password reset link sent successfully",
          visibilityTime: 3000,
          autoHide: true,
        });
        navigation.navigate("SignIn");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setLoading(false);
        Toast.show({
          type: "error",
          position: "top",
          text1: "User not found",
          visibilityTime: 3000,
          autoHide: true,
        });
      } else {
        setLoading(false);
        Toast.show({
          type: "error",
          position: "top",
          text1: "Failed to send password reset link",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    }
    };


  const handleChangePass = async () => {
    setLoading(true);
    sendRequestPassword();
    };


  return (
    <View style={styles.password}>
      <LoadingModal modalVisible={loading} color="red" />
      <View style={styles.content}>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/images/vector5.png")}
          />
        </Pressable>
        <View style={styles.resetpassframe}>
          <Text style={styles.resetPassword}>Reset Password</Text>
          <Text
            style={[styles.forgotYourPassword]}
                      >{`Forgot your password? Please enter your email address. You will receive a link to create a new password via whatsapp.`}
          </Text>
          <View style={[styles.ifemail, styles.ifemailShadowBox]}>
            <Image
              style={styles.emailimgIcon}
              contentFit="cover"
              source={require("../assets/images/emailimg.png")}
            />
            <TextInput
              style={[styles.emailInput, styles.textTypo]}
              placeholder="Email "
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="#888"
              keyboardType="email-address"
            />
          </View>
          <Pressable style={styles.btnprimary} onPress={handleChangePass}>
            <Text style={[styles.reset, styles.resetTypo]}>RESET PASSWORD</Text>
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
  emailInput: {
    flex: 1,
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
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
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

    width: 280,
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
