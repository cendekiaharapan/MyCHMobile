import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  NativeBaseProvider,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";
import * as Svg from "react-native-svg";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
  saveTokenToSecureStore,
  getTokenFromSecureStore,
  saveRespDataSecureStore,
  getRespDataFromSecureStore,
  clearTokenFromSecureStore,
  clearResponseDataFromSecureStore,
} from "../database/database";
import { useFocusEffect } from "@react-navigation/native";
const AllPost = () => {
  const navigation = useNavigation();
  const [hasFocus, setHasFocus] = useState(false);
  const [imageProfile, setImageProfile] = useState(null);
  const [emailProfile, setEmailProfile] = useState(null);
  const [nameProfile, setNameProfile] = useState(null);
  const [addressProfile, setAddressProfile] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      if (hasFocus) {
        // Run your focus effect code here
        console.log("This is inside focus effect!");
        fetchData();
      }
    }, [hasFocus])
  );

  useEffect(() => {
    // This code will run when the component mounts
    console.log("Image Profile : ", imageProfile);
    console.log("Name Profile : ", nameProfile);
    console.log("Email Profile : ", emailProfile);
    console.log("Address Profile : ", addressProfile);

    setHasFocus(true);
  }, []);

  const fetchData = async () => {
    try {
      const response_data = await getRespDataFromSecureStore();
      console.log(
        "ini isi dari response_data pada page profile : ",
        response_data
      );
      const imageFileName = response_data.user.image;
      const imageUrl = `https://www.balichildrenshouse.com/myCH/ev-assets/uploads/avatars/${imageFileName}`;
      console.log(imageUrl);
      console.log("this is the response in profile page: ", response_data);
      console.log("this is in profile page (image):", response_data.user.image);
      setImageProfile(imageUrl);
      setEmailProfile(response_data.user.email);
      setNameProfile(response_data.user.name);
      setAddressProfile(response_data.user.address);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  // Empty dependency array to run the effect once
  const handleLogout = async () => {
    try {
      // Clear the user tokenr
      await clearTokenFromSecureStore();
      await clearResponseDataFromSecureStore();
      console.log("User token cleared from SecureStore.");

      // Clear any other data you want to remove
      // Example: await SecureStore.deleteItemAsync("some_other_key");

      // Other logout-related actions

      // Navigate to your login screen or perform any other actions as needed
      navigation.navigate("Login Stack", { screen: "SignIn" }); // Replace "LoginStack" with the actual name of your login screen
      Toast.show({
        type: "success",
        position: "top",
        text1: "Logout Success",
        visibilityTime: 3000,
        autoHide: true,
      });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleTemporaryButton = () => {
    console.log('TemporaryButtonRest')
    navigation.navigate("Main App Stack", {
      screen: "AssessmentDetail", // change this with your screen name
    });
  };
  // const handleLogout = () => {
  //   clearTokenFromSecureStore();
  //   clearResponseDataFromSecureStore();
  //   navigation.navigate("Login Stack", { screen: "SignIn" });
  //   // You may also navigate the user back to the login page or perform any other necessary actions.
  // };

  const defaultImageUrl =
    "https://www.balichildrenshouse.com/myCH/ev-assets/uploads/avatars/default.png";

  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        {imageProfile != null ? (
          <View style={styles.TitleContainer}>
            <Text style={styles.TitleStyle}>Profile</Text>
            <View style={styles.ImageContainer}>
              <Image
                style={styles.ProfileStyle}
                source={{ uri: imageProfile || defaultImageUrl }}
                contentFit="cover"
              />
            </View>
          </View>
        ) : (
          <Text>Loading....</Text>
        )}
      </View>
      <View style={styles.BodyContainer}>
        <View style={styles.ContentContainer}>
          <View style={styles.inputContainer}>
            {nameProfile != null ||
            emailProfile != null ||
            addressProfile != null ? (
              <View>
                <Text style={styles.FormTitle}>Name</Text>
                <TextInput
                  style={styles.InputField}
                  placeholder={nameProfile}
                  editable={false}
                />
                <Text style={styles.FormTitle}>Email</Text>
                <TextInput
                  style={styles.InputField}
                  placeholder={emailProfile}
                  editable={false}
                />
                <Text style={styles.FormTitle}>Address</Text>
                <TextInput
                  style={styles.InputField}
                  placeholder={addressProfile}
                  editable={false}
                />
              </View>
            ) : (
              <Text>Loading....</Text>
            )}
          </View>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.Button1}>
              <Text style={styles.ButtonText} onPress={handleTemporaryButton}>
                Temporary Button
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button2} onPress={handleLogout}>
              <Text style={styles.ButtonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.NavigateContainer}>
        <View style={styles.ProductivityButtonContainer}>
          <Image
            style={styles.ProductivityLogo}
            contentFit="cover"
            source={require("../assets/images/homeButton.png")}
          />
        </View>
        <View style={styles.ProductivityButtonContainer}>
          <Image
            style={styles.ProductivityLogo}
            contentFit="cover"
            source={require("../assets/images/childLogo.png")}
          />
        </View>
        <View style={styles.ProductivityButtonContainer}>
          <Image
            style={styles.ProductivityLogo}
            contentFit="cover"
            source={require("../assets/images/contactLogo.png")}
          />
        </View>
        <View style={styles.ProductivityButtonContainer}>
          <Image
            style={styles.ProductivityLogo}
            contentFit="cover"
            source={require("../assets/images/ProductivityLogo.png")}
          />
        </View>
        <View style={styles.ProfileButtonContainer}>
          <Image
            style={styles.ProductivityLogo}
            contentFit="cover"
            source={require("../assets/images/profileImageLogo.png")}
          />
          <Text style={styles.profileStyle}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#FCFCFC",
    flex: 1,
  },
  HeaderContainer: {
    flex: 0.9,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  BodyContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  NavigateContainer: {
    backgroundColor: "#FFFFFF",
    flex: 0.3,
    flexDirection: "row", // Arrange the images horizontally
    justifyContent: "space-between", // Distribute space evenly between images
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  TitleStyle: {
    textAlign: "center",
    lineHeight: 40,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: 20,
    color: Color.colorMidnightblue,
    alignItems: "center",
  },
  ProfileStyle: {
    backgroundColor: "red",
    overflow: "hidden",
    width: 120,
    height: 120,
    borderRadius: 300,
    borderColor: "black",
    borderWidth: 2,
  },
  ImageContainer: {
    top: 10,
    width: 80,
    height: 80,
    alignItems: "center",
  },
  ContentContainer: {
    justifyContent: "center",
    width: 288,
    height: 330,
    alignItems: "center",
  },
  FormTitle: {
    textAlign: "left",
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 5,
    color: "#000", // You can change the text color
  },
  InputField: {
    width: 285,
    height: 40.2,
    backgroundColor: "#F6F6F6",
    borderRadius: 20.1, // Half of the height to make it rounded
    padding: 10,
    borderColor: "black",
    borderWidth: 0.2,
  },

  ButtonContainer: {
    marginTop: 30,
    flexDirection: "column", // Vertically align the buttons
    alignItems: "center",
  },
  Button1: {
    width: 320,
    height: 50,
    backgroundColor: "#2F4CB1",
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
    marginBottom: 10, // Add some margin between the buttons
    borderRadius: 25, // Make the button round
  },
  Button2: {
    width: 320,
    height: 50,
    backgroundColor: "#FC4B41",
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
    borderRadius: 25, // Make the button round
  },
  ButtonText: {
    color: "#fff", // Text color
    fontWeight: "bold", // Make the text bold
    fontFamily: FontFamily.poppinsBold,
  },
  ProfileButtonContainer: {
    backgroundColor: "#efefef",
    justifyContent: "space-between",
    flexDirection: "row",
    width: 120,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  ProductivityButtonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  ProductivityLogo: {
    width: 30,
    height: 30,
  },
  profileStyle: {
    color: "#FC4B41",
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 700,
    fontFamily: FontFamily.poppinsBold,
  },
});

export default AllPost;
