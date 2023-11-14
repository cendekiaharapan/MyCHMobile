import React, { forwardRef, useEffect } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";
import { TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Import the Picker component
import {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
} from "../database/database";
import Toast from "react-native-toast-message";

const CallMyChild = forwardRef(({ navigation }, ref) => {
  const { width } = Dimensions.get("window");
  const isSmallScreen = width <= 375;

  // const [children, setChildren] = React.useState(null);
  const [studentName, setStudentName] = React.useState("");
  const [studentId, setStudentId] = React.useState("");
  const [selectedChild, setSelectedChild] = React.useState("");
  const [selectedLanguage, setSelectedLanguage] = React.useState(null);
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  useEffect(() => {
    // This code will run after the component renders
    retrieveItem("childData")
      .then((data) => {
        if (data) {
          // Use the retrieved data
          const student_ids = data.map((item) => item.id);
          const student_name = data.map((item) => item.name);

          setStudentId(student_ids);
          setStudentName(student_name);
          // Update your component state or data source with the new data
          // For example, if you're using state in a functional component:
        } else {
          // Handle the case when no data is found
          console.log("No data found in AsyncStorage.");
        }
      })
      .catch((error) => {
        console.error("Error fetching response data from SQLite:", error);
      });
  }, []);
  // const studentId = [1774, 2065];
  // const studentName = ["Student A", "Tester 2"];

  // const children = ["Ezra Gunawan", "Andrew Zefanya", "Eveline Kurnia"];
  const languages = {
    en: "English",
    af: "Afrikaans",
    ar: "Arabic",
    bg: "Bulgarian",
    bn: "Bengali",
    bs: "Bosnian",
    ca: "Catalan",
    cs: "Czech",
    da: "Danish",
    de: "German",
    el: "Greek",
    es: "Spanish",
    et: "Estonian",
    fi: "Finnish",
    fr: "French",
    gu: "Gujarati",
    hi: "Hindi",
    hr: "Croatian",
    hu: "Hungarian",
    id: "Indonesian",
    is: "Icelandic",
    it: "Italian",
    iw: "Hebrew",
    ja: "Japanese",
    jw: "Javanese",
    km: "Khmer",
    kn: "Kannada",
    ko: "Korean",
    la: "Latin",
    lv: "Latvian",
    ml: "Malayalam",
    mr: "Marathi",
    ms: "Malay",
    my: "Myanmar (Burmese)",
    ne: "Nepali",
    nl: "Dutch",
    no: "Norwegian",
    pl: "Polish",
    pt: "Portuguese",
    ro: "Romanian",
    ru: "Russian",
    si: "Sinhala",
    sk: "Slovak",
    sq: "Albanian",
    sr: "Serbian",
    su: "Sundanese",
    sv: "Swedish",
    sw: "Swahili",
    ta: "Tamil",
    te: "Telugu",
    th: "Thai",
    tl: "Filipino",
    tr: "Turkish",
    uk: "Ukrainian",
    ur: "Urdu",
    vi: "Vietnamese",
    "zh-CN": "Chinese (Simplified)",
    "zh-TW": "Chinese (Traditional)",
  };

  const places = ["Jineng", "Parent Lounge", "Parking Lot"];
  const showToastErrorRequired = () => {
    Toast.show({
      text1: "Please select all required fields!",
      text1Style: { fontSize: 15 },
      text2Style: { fontSize: 13 },
      type: "error",
    });
  };
  const callMyChildAPI = () => {
    if (!selectedChild || !selectedPlace || !selectedLanguage) {
      // Handle error, show a message to the user, or prevent the request.
      showToastErrorRequired();
      return;
    }
    const apiUrl =
      "https://www.balichildrenshouse.com/myCHStaging/api/call-my-child";
    const requestData = {
      student_id: selectedChild,
      call_to: selectedPlace,
      lang: selectedLanguage,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status === 200) {
          showToastSuccess(); // Show success toast
        } else {
          showToastError(); // Show error toast for non-200 status
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data as needed.
        console.log("API Response: ", data);
        // You can navigate to another screen or perform other actions based on the response.
      })
      .catch((error) => {
        showToastError(); // Show error toast for network or other errors
        console.error("Error making the API request: ", error);
        // Handle the error, show a message to the user, or take appropriate action.
      });
  };
  const showToastSuccess = () => {
    Toast.show({
      text1: "Successfully, call your child!",
      text1Style: { fontSize: 15 },
      text2Style: { fontSize: 13 },
      type: "success",
    });
  };
  const showToastError = () => {
    Toast.show({
      text1: "Failed, call your child!",
      text1Style: { fontSize: 15 },
      text2Style: { fontSize: 13 },
      type: "error",
    });
  };

  const handleBackButtonClick = () => {
    navigation.navigate("Main App Stack", {
      screen: "BottomNavbar", // change this with your screen name
    });
  };
  return (
    <View
      style={[styles.callMyChild, styles.callMyChildFlexBox, styles.container]}
    >
      <View style={styles.ictwotoneArrowBackParent}>
        <TouchableOpacity onPress={handleBackButtonClick}>
          <Image
            style={styles.ictwotoneArrowBackIcon}
            contentFit="cover"
            source={require("../assets/ictwotonearrowback1.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.callMyChild1, styles.callTypo]}>
          CALL MY CHILD
        </Text>
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
                <Text style={[styles.selectChild, styles.selectTypo]}>
                  Select Child
                </Text>
              </View>
            </View>
            <View style={[styles.dropdown, styles.dropdownShadowBox]}>
              {studentId && studentName && studentName.length > 0 && (
                <Picker
                  selectedValue={selectedChild}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedChild(itemValue)
                  }
                >
                  <Picker.Item label="Select your child" value="" />
                  {studentName.map((name, index) => (
                    <Picker.Item
                      key={studentId[index]}
                      label={name}
                      value={studentId[index]}
                    />
                  ))}
                </Picker>
              )}
            </View>

            <View style={styles.titleSubtitleContainer}>
              <View style={[styles.titleSubtitle, styles.callMyChildFlexBox]}>
                <Text style={[styles.selectLanguage, styles.selectTypo]}>
                  Select Language
                </Text>
              </View>
            </View>
            <View style={[styles.dropdown1, styles.dropdownShadowBox]}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }
              >
                <Picker.Item label="Select Language" value="" />
                {Object.entries(languages).map(
                  ([languageCode, languageName]) => (
                    <Picker.Item
                      key={languageCode}
                      label={languageName}
                      value={languageCode}
                    />
                  )
                )}
              </Picker>
            </View>
            <View style={styles.titleSubtitleContainer}>
              <View style={[styles.titleSubtitle, styles.callMyChildFlexBox]}>
                <Text style={[styles.selectLanguage, styles.selectTypo]}>
                  Select Place
                </Text>
              </View>
            </View>
            <View style={[styles.dropdown2, styles.dropdownShadowBox]}>
              <Picker
                selectedValue={selectedPlace}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedPlace(itemValue)
                }
              >
                <Picker.Item label="Select Place" value="" />
                {places.map((place, index) => (
                  <Picker.Item key={index} label={place} value={place} />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <TouchableOpacity
          ref={ref}
          style={styles.btnprimary}
          onPress={() => {
            // Tampilkan toast di sini
            console.log("selected child : ", selectedChild);
            console.log("selected language : ", selectedLanguage);
            console.log("selected place : ", selectedPlace);
            callMyChildAPI();
            console.log("API Triggered!");
          }}
        >
          <Text style={[styles.call, styles.callTypo]}>CALL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

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
    marginTop: 20,
    overflow: "hidden",
  },
  callMyChild1: {
    marginTop: 20,
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
    borderRadius: 50,
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
    color: "white",
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
