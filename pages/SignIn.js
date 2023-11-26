import * as React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import Config from "react-native-config";
import { APP_TOKEN, APP_SECRET } from "@env";
import * as SQLite from "expo-sqlite";
import {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
  saveTokenToSecureStore,
  getTokenFromSecureStore,
  saveRespDataSecureStore,
  getRespDataFromSecureStore,
} from "../database/database";
import Toast from "react-native-toast-message";
import { LoadingModal } from "react-native-loading-modal";
import BottomNavbar, { homeName } from "../BottomNavbar";

const SignIn = () => {
  const [childData, setChildData] = useState(null);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const sendLoginRequest = async () => {
    console.log("this is inside send login request function");
    try {
      const response = await axios.post(
        "https://www.balichildrenshouse.com/myCH/api/login",
        {
          email: email,
          password: password,
          app_secret: APP_SECRET,
          app_token: APP_TOKEN,

          // Additional data if required (app_token, app_secret, etc.)
        }
      );

      if (response.status === 200) {
        console.log("inside response 200 (send Login Request)");
        // Handle a successful login response here
        console.log("Login successful");
        console.log("(send login Request) response data : ", response.data);
        const token = response.data.success.token;
        await saveTokenToSecureStore(token);

        const response_data = response.data;
        await saveRespDataSecureStore(response_data);

        resp = await getRespDataFromSecureStore();

        if (resp.user.role === "parent") {
          const parentId = response.data.user.id; // parent id

          const parentStudentsResponse = await axios.get(
            `https://www.balichildrenshouse.com/myCH/api/parent-students/${parentId}`
          );

          if (parentStudentsResponse.status === 200) {
            console.log("parent savechild data");
            // Handle the parent-students response data here
            console.log(
              "parent student response data = ",
              parentStudentsResponse.data
            );
            storeItem("childData", parentStudentsResponse.data);
            // You can navigate to another screen after successful login
          } else {
            // Handle cases where there is no student data
            if (parentStudentsResponse.status === 401) {
              console.log("No student found");
              // You can take additional actions or show a message to the user as needed
            } else {
              console.error("Error while fetching parent-students data");
              // Handle other errors
            }
          }
        }
        // You can navigate to another screen after successful login
        // After a successful login
        navigation.navigate("Main App Stack", { BottomNavbar });

        setLoading(false);
        Toast.show({
          type: "success",
          position: "top",
          text1: "Login Success",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    } catch (error) {
      // Check if the error message contains information about invalid email or password
      if (error.response && error.response.status === 401) {
        if (error.response.data.error === "email not found") {
          setLoading(false);
          Toast.show({
            type: "error",
            position: "top",
            text1: "Email not found",
            visibilityTime: 3000,
            autoHide: true,
          });
          // console.error("Email not found");
          // Show an error message to the user that email is not found
        } else if (
          error.response.data.error === "email and password do not match"
        ) {
          setLoading(false);
          Toast.show({
            type: "error",
            position: "top",
            text1: "Email and password do not match",
            visibilityTime: 3000,
            autoHide: true,
          });
          // console.error("Email and password do not match");
          // Show an error message to the user that email and password do not match
        } else {
          setLoading(false);
          Toast.show({
            type: "error",
            position: "top",
            text1: "Please enter your email and password",
            visibilityTime: 3000,
            autoHide: true,
          });
          // Show a generic error message
        }
      } else {
        setLoading(false);
        console.error("Login Error", error);
        // Show a generic error message
      }
    }
  };

  // Step 3: Define an onChangeText function
  const handlePasswordChange = (text) => {
    // Step 3: Update the state variable
    setPassword(text);
  };

  const handleButtonClick = () => {
    sendLoginRequest();
    setLoading(true);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  return (
    <View style={[styles.signIn, styles.signInFlexBox]}>
      <LoadingModal modalVisible={loading} color="red" />
      <View style={styles.signInFlexBox}>
        <Text style={styles.login}>LOGIN</Text>
        <Image
          style={styles.loginimgIcon}
          contentFit="cover"
          source={require("../assets/images/loginimg.png")}
        />
        <View style={[styles.ifemail, styles.ifemailShadowBox]}>
          <Image
            style={styles.emailimgIcon}
            contentFit="cover"
            source={require("../assets/images/emailimg.png")}
          />
          <TextInput
            style={[styles.emailInput, styles.textTypo]}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        <View style={[styles.ifpassword, styles.ifemailShadowBox]}>
          <Image
            style={styles.emailimgIcon}
            contentFit="cover"
            source={require("../assets/images/pass.png")}
          />
          <TextInput
            style={[styles.passwordInput, styles.textTypo]}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>
        <Pressable
          style={styles.forgetPasswordClickContainer}
          onPress={() => navigation.navigate("Password")}
        >
          <Text style={[styles.text1, styles.text1Typo]}>
            <Text style={styles.forgetPassword}>{`Forgot Password? `}</Text>
            <Text style={styles.clickHere}>Click Here</Text>
          </Text>
        </Pressable>
        <Pressable style={styles.btnprimary} onPress={handleButtonClick}>
          <Text style={[styles.login1, styles.text1Typo]}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordInput: {
    flex: 1,
  },
  emailInput: {
    flex: 1,
  },
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
