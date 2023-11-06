import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import Config from "react-native-config";
import { APP_TOKEN, APP_SECRET } from "@env";
import * as SQLite from "expo-sqlite";

const SignIn = () => {
  const [childData, setChildData] = useState(null);
  const saveTokenToSecureStore = async (token) => {
    try {
      await SecureStore.setItemAsync("api_token", token);
      console.log("api_token Saved!");
    } catch (error) {
      console.error("Error saving token:", error);
    }
  };

  const getTokenFromSecureStore = async () => {
    try {
      return await SecureStore.getItemAsync("api_token");
    } catch (error) {
      console.error("Error retrieving token:", error);
      return null;
    }
  };

  const saveRespDataSecureStore = async (responseData) => {
    try {
      const responseDataString = JSON.stringify(responseData);
      await SecureStore.setItemAsync("resp_data", responseDataString);
      console.log("Response data saved!");
    } catch (error) {
      console.error("Error saving response data:", error);
    }
  };

  const getRespDataFromSecureStore = async () => {
    try {
      const responseDataString = await SecureStore.getItemAsync("resp_data");
      if (responseDataString) {
        const responseData = JSON.parse(responseDataString);
        return responseData;
      } else {
        console.log("No response data found in SecureStore.");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving response data:", error);
      return null;
    }
  };

  const saveChildDataSecureStore = async (responseData) => {
    try {
      const responseDataString = JSON.stringify(responseData);
      await SecureStore.setItemAsync("child_data", responseDataString);
      console.log("Child data saved!");
    } catch (error) {
      console.error("Error saving response data:", error);
    }
  };

  const getChildDataFromSecureStore = async () => {
    try {
      const responseDataString = await SecureStore.getItemAsync("child_data");
      if (responseDataString) {
        const responseData = JSON.parse(responseDataString);
        return responseData;
      } else {
        console.log("No response data found in SecureStore.");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving response data:", error);
      return null;
    }
  };

  const db = SQLite.openDatabase("login.db");

  const saveChildDataSQLite = (responseData) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS child_data (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT)",
          []
        );

        // Check if a record already exists in the table
        const existingData = fetchChildDataFromSQLite(); // Implement this function to fetch data

        if (existingData) {
          // If a record exists, update the existing record with the provided data
          tx.executeSql("UPDATE child_data SET data = ? WHERE id = 1", [
            JSON.stringify(responseData),
          ]);
        } else {
          // If no record exists, insert a new record
          tx.executeSql("INSERT INTO child_data (data) VALUES (?)", [
            JSON.stringify(responseData),
          ]);
        }
      });
      console.log("Child data saved to SQLite!");
    } catch (error) {
      console.error("Error saving response data:", error);
    }
  };

  const getChildDataFromSQLite = (callback) => {
    db.transaction((tx) => {
      tx.executeSql("SELECT data FROM child_data", [], (tx, results) => {
        const len = results.rows.length;
        if (len > 0) {
          const responseDataString = results.rows.item(0).data;
          const responseData = JSON.parse(responseDataString);
          callback(responseData);
        } else {
          console.log("No response data found in SQLite.");
          callback(null);
        }
      });
    });
  };

  const fetchChildDataFromSQLite = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql("SELECT data FROM child_data", [], (tx, results) => {
          const len = results.rows.length;
          if (len > 0) {
            const responseDataString = results.rows.item(0).data;
            const responseData = JSON.parse(responseDataString);
            resolve(responseData);
          } else {
            console.log("No response data found in SQLite.");
            resolve(null);
          }
        });
      });
    });
  };

  const sendLoginRequest = async () => {
    try {
      const response = await axios.post(
        "https://www.balichildrenshouse.com/myCHStaging/api/login",
        {
          email: email,
          password: password,
          app_secret: APP_SECRET,
          app_token: APP_TOKEN,

          // Additional data if required (app_token, app_secret, etc.)
        }
      );

      if (response.status === 200) {
        // Handle a successful login response here
        console.log("Login successful");

        const token = response.data.success.token;
        saveTokenToSecureStore(token);

        const response_data = response.data;
        saveRespDataSecureStore(response_data);

        resp = await getRespDataFromSecureStore();
        console.log("response data : ", resp);
        if (resp.user.role === "parent") {
          const parentId = response.data.user.id; // parent id

          const parentStudentsResponse = await axios.get(
            `https://www.balichildrenshouse.com/myCHStaging/api/parent-students/${parentId}`
          );

          if (parentStudentsResponse.status === 200) {
            // Handle the parent-students response data here
            saveChildDataSQLite(parentStudentsResponse.data);

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
        // Fetching the student id by parent id
        fetchChildDataFromSQLite()
          .then((data) => {
            if (data) {
              // Use the retrieved data
              const student_ids = data.map((item) => item.id);
              const student_name = data.map((item) => item.name);
              console.log("Student id : ", student_ids);
              console.log("Student Name : ", student_name);

              // Update your component state or data source with the new data
              // For example, if you're using state in a functional component:
              setChildData(data);
            } else {
              // Handle the case when no data is found
              console.log("No data found in SQLite.");
            }
          })
          .catch((error) => {
            console.error("Error fetching response data from SQLite:", error);
          });

        // You can navigate to another screen after successful login
        navigation.navigate("MessageToTeacherHistory");
      }
    } catch (error) {
      // Check if the error message contains information about invalid email or password
      if (error.response && error.response.status === 401) {
        if (error.response.data.error === "email not found") {
          console.error("Email not found");
          // Show an error message to the user that email is not found
        } else if (
          error.response.data.error === "email and password do not match"
        ) {
          console.error("Email and password do not match");
          // Show an error message to the user that email and password do not match
        } else {
          console.error("Login Error", error);
          // Show a generic error message
        }
      } else {
        console.error("Login Error", error);
        // Show a generic error message
      }
    }
  };

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 3: Define an onChangeText function
  const handlePasswordChange = (text) => {
    // Step 3: Update the state variable
    setPassword(text);
  };

  const handleButtonClick = () => {
    sendLoginRequest();
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  return (
    <View style={[styles.signIn, styles.signInFlexBox]}>
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
            placeholder="Type your password"
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
            <Text style={styles.forgetPassword}>{`Forget Password? `}</Text>
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
