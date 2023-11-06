import React, { forwardRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { FontFamily, Color } from "../GlobalStyles";
import { Button, NativeBaseProvider, Box, Select, Center } from 'native-base';
import Toast from "react-native-toast-message";
import axios from "axios"; // Import Axios
import { NativeBaseProvider, Select } from 'native-base';
import { Picker as RNPicker } from "@react-native-picker/picker"; // Rename to avoid conflict

const CallMyChild = () => {
  console.log("Inside CallMyChild component");

  const { width } = Dimensions.get("window");
  const isSmallScreen = width <= 375;

  const [students, setStudents] = React.useState([]);
  const [languageCodes, setLanguageCodes] = React.useState([]);
  const [locations, setLocations] = React.useState(["Parents Lounge", "Jineng", "Parking Lot"]);
  const [selectedChild, setSelectedChild] = React.useState(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState(null);
  const [selectedPlace, setSelectedPlace] = React.useState(null);

  const sendPostRequest = async () => {
    console.log("Sending post request");
    
    if (!selectedChild || !selectedLanguage) {
      console.log("Validation failed: Please select a child and language.");
      Toast.show({
        type: "error",
        text1: "ERROR!",
        text2: "Please select a child and language.",
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        position: "top",
        backgroundColor: "red",
        textStyle: { color: "white", fontSize: 15 },
        onShow: () => {
          console.log("Toast shown");
        },
        onHide: () => {
          console.log("Toast hidden");
        },
      });
      return;
    }

    try {
      const response = await axios.post('https://www.balichildrenshouse.com/myCH/api/call-my-child', {
        student_id: selectedChild,
        call_to: selectedPlace,
        lang: selectedLanguage,
      });
      console.log("Post request response:", response);

      if (response.data.success) {
        console.log("Call successful: Successfully Called Your Child!");
        Toast.show({
          type: "success",
          text1: "SUCCESS!",
          text2: "Successfully Called Your Child!",
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 30,
          position: "top",
          backgroundColor: "green",
          textStyle: { color: "white", fontSize: 15 },
          onShow: () => {
            console.log("Toast shown");
          },
          onHide: () => {
            console.log("Toast hidden");
          },
        });
      } else {
        console.log("Call failed: ", response.data.error);
        Toast.show({
          type: "error",
          text1: "ERROR!",
          text2: response.data.error,
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 30,
          position: "top",
          backgroundColor: "red",
          textStyle: { color: "white", fontSize: 15 },
          onShow: () => {
            console.log("Toast shown");
          },
          onHide: () => {
            console.log("Toast hidden");
          },
        });
      }
    } catch (error) {
      console.log("Error during post request:", error);
      Toast.show({
        type: "error",
        text1: "ERROR!",
        text2: "Failed to call child. Please try again.",
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        position: "top",
        backgroundColor: "red",
        textStyle: { color: "white", fontSize: 15 },
        onShow: () => {
          console.log("Toast shown");
        },
        onHide: () => {
          console.log("Toast hidden");
        },
      });
    }
  };

  const fetchApiData = async () => {
    console.log("Fetching API data");
    try {
      const response = await axios.get('https://www.balichildrenshouse.com/myCH/api/view-call', {
        params: {
          parent_id: 1420, // Replace with the actual parent ID
        },
      });
      console.log("API data response:", response);
      const { students, languageCodes } = response.data;
      console.log("Students data:", students);
      console.log("Language codes data:", languageCodes);
      setStudents(students);
      setLanguageCodes(languageCodes);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Call the API data fetching function when the component mounts
  React.useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <NativeBaseProvider>
      <View style={[styles.callMyChild, styles.callMyChildFlexBox, styles.container]}>
        <View style={styles.ictwotoneArrowBackParent}>
          <Image
            style={styles.ictwotoneArrowBackIcon}
            contentFit="cover"
            source={require("../assets/ictwotonearrowback1.png")}
          />
          <Text style={[styles.callMyChild1, styles.callTypo]}>CALL MY CHILD</Text>
        </View>
        <Image
          style={styles.image3Icon}
          contentFit="cover"
          source={require("../assets/image-31.png")}
        />
        <View style={styles.basicPlan}>
          <View style={[styles.basecards, styles.basecardsFlexBox]}>
            <View style={[styles.basecardsbody, styles.basecardsFlexBox]}>
              <View style={styles.titleSubtitleWrapper}>
                <View style={[styles.titleSubtitle, styles.callMyChildFlexBox]}>
                  <Text style={[styles.selectChild, styles.selectTypo]}>Select Child</Text>
                </View>
              </View>
              <View style={[styles.dropdown, styles.dropdownShadowBox]}>
                <Select
                      selectedValue={selectedChild}
                      minWidth="275"
                      accessibilityLabel="Choose your child to call"
                      placeholder="Choose your child to call"
                      onValueChange={(itemValue) => {setSelectedChild(itemValue)
                      console.log('Selected Child:', itemValue);}}
                      
                    >
                      {academicSessions.map(session => (
                        <Select.Item key={student.id} label={student.name} value={student.id} />
                  ))}
                </Select>
              </View>
              <View style={styles.titleSubtitleContainer}>
                <View style={[styles.titleSubtitle, styles.callMyChildFlexBox]}>
                  <Text style={[styles.selectLanguage, styles.selectTypo]}>Select Language</Text>
                </View>
              </View>
              <View style={[styles.dropdown1, styles.dropdownShadowBox]}>
                <Item picker>
                  <RNPicker
                    mode="dropdown"
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                  >
                    {Object.entries(languageCodes).map(([code, lang]) => (
                      <RNPicker.Item key={code} label={lang} value={code} />
                    ))}
                  </RNPicker>
                </Item>
              </View>
              <View style={styles.titleSubtitleContainer}>
                <View style={[styles.titleSubtitle, styles.callMyChildFlexBox]}>
                  <Text style={[styles.selectLanguage, styles.selectTypo]}>Select Place</Text>
                </View>
              </View>
              <View style={[styles.dropdown2, styles.dropdownShadowBox]}>
                <Item picker>
                  <RNPicker
                    mode="dropdown"
                    selectedValue={selectedPlace}
                    onValueChange={(itemValue) => setSelectedPlace(itemValue)}
                  >
                    {locations.map((place, index) => (
                      <RNPicker.Item key={index} label={place} value={place} />
                    ))}
                  </RNPicker>
                </Item>
              </View>
            </View>
          </View>
          <Button
            style={styles.btnprimary}
            onPress={sendPostRequest}
          >
            <Text style={[styles.call, styles.callTypo]}>CALL</Text>
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
    callMyChildFlexBox: {
      alignItems: "center",
      overflow: "hidden",
    },
    callTypo: {
      fontFamily: FontFamily.poppinsBold,
      fontWeight: "700",
    },
    basecardsFlexBox: {
      alignSelf: "stretch",
      backgroundColor: Color.global09White,
    },
    selectTypo: {
      display: "flex",
      color: Color.text01Body,
      fontFamily: FontFamily.robotoMedium,
      fontWeight: "500",
      lineHeight: 16,
      fontSize: 15,
      textAlign: "left",
      alignItems: "center",
    },
    // dropdownShadowBox: {
    //   minWidth: 162.5,
    //   paddingVertical: 11,
    //   paddingHorizontal: 17,
    //   borderWidth: 1.1,
    //   borderColor: Color.colorWhitesmoke,
    //   borderStyle: "solid",
    //   elevation: 4.33,
    //   shadowRadius: 4.33,
    //   shadowColor: "rgba(0, 0, 0, 0.25)",
    //   backgroundColor: Color.colorsLight,
    //   marginTop: 13,
    //   borderRadius: 54,
    //   shadowOpacity: 1,
    //   shadowOffset: {
    //     width: 0,
    //     height: 0,
    //   },
    //   flexDirection: "row",
    //   alignItems: "center",
    // },
  
    dropdownShadowBox: {
      minWidth: 162.5,
      shadowOpacity: 1,
      shadowOffset: {
             width: 0,
             height: 0,
           },
      paddingVertical: 0,
      paddingHorizontal: 12,
      borderWidth: 1.1,
      borderColor: Color.colorWhitesmoke,
      borderStyle: "solid",
      elevation: 4.33,
      shadowRadius: 4.33,
      marginTop: 13,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      backgroundColor: Color.colorsLight,
      borderRadius: 54, // Ubah sesuai kebutuhan Anda
    },
    
  
    ictwotoneArrowBackIcon: {
      width: 26,
      height: 26,
      marginTop:20,
      overflow: "hidden",
    },
    callMyChild1: {
      marginTop:20,
      fontSize: 22,
      textTransform: "uppercase",
      color: Color.colorDarkslateblue,
      marginLeft: 60,
      textAlign: "left",
    },
    ictwotoneArrowBackParent: {
      width: 347,
      flexDirection: "row",
      alignItems: "center",
    },
    image3Icon: {
      width: 217,
      height: 217,
      marginTop: 21.67,
    },
    selectChild: {
      width: 90,
    },
    titleSubtitle: {
      top: 0,
      left: 0,
      position: "absolute",
    },
    titleSubtitleWrapper: {
      height: 17,
      width: 90,
    },
    selectItem: {
      fontFamily: FontFamily.robotoRegular,
      color: Color.colorsDark,
      fontSize: 15,
      textAlign: "left",
      flex: 1,
    },
    icon: {
      width: 10,
      height: 9,
    },
    dropdown: {
      marginTop: 13,
      width: 272,
      minWidth: 162.5,
      paddingVertical: 11,
      paddingHorizontal: 17,
      borderWidth: 1.1,
      borderColor: Color.colorWhitesmoke,
      borderStyle: "solid",
      elevation: 4.33,
      shadowRadius: 4.33,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      backgroundColor: Color.colorsLight,
    },
    selectLanguage: {
      width: 127,
    },
    titleSubtitleContainer: {
      width: 127,
      marginTop: 13,
      height: 17,
    },
    dropdown1: {
      marginTop: 13,
      width: 272,
      minWidth: 162.5,
      paddingVertical: 11,
      paddingHorizontal: 17,
      borderWidth: 1.1,
      borderColor: Color.colorWhitesmoke,
      borderStyle: "solid",
      elevation: 4.33,
      shadowRadius: 4.33,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      backgroundColor: Color.colorsLight,
    },
    dropdown2: {
      width: 273,
      marginTop: 13,
      minWidth: 162.5,
      paddingVertical: 11,
      paddingHorizontal: 17,
      borderWidth: 1.1,
      borderColor: Color.colorWhitesmoke,
      borderStyle: "solid",
      elevation: 4.33,
      shadowRadius: 4.33,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      backgroundColor: Color.colorsLight,
    },
    basecardsbody: {
      padding: 22,
    },
    basecards: {
      borderRadius: 4,
      height: 350,
      overflow: "hidden",
    },
    call: {
      top: 15,
      left: 50,
      color: Color.global09White,
      textAlign: "center",
      width: 202,
      fontSize: 15,
      position: "absolute",
    },
    btnprimary: {
      backgroundColor: Color.colorTomato_100,
      height: 53,
      marginTop: 0,
      borderRadius: 54,
      width: 316,
    },
    basicPlan: {
      shadowColor: "rgba(0, 0, 0, 0.04)",
      shadowRadius: 17.33,
      elevation: 17.33,
      height: 512,
      width: 316,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      marginTop: 21.67,
    },
    callMyChild: {
      width: "100%",
      height: 1000,
      paddingHorizontal: 22,
      paddingVertical: 37,
      flex: 1,
      backgroundColor: Color.global09White,
      alignItems: "center",
    },
    smallScreenButton: {
      width: "80%", // Adjust the width for small screens
    },
});

export default CallMyChild;