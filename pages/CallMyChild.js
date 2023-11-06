import React, { forwardRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { FontFamily, Color } from "../GlobalStyles";
import { TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Import the Picker component
import Toast from "react-native-toast-message";
import axios from "axios"; // Import Axios
import { Button, NativeBaseProvider, Box, Select, Center } from 'native-base';

const CallMyChild = () => {
  const { width } = Dimensions.get("window");
  const isSmallScreen = width <= 375; 

const [selectedChild, setSelectedChild] = useState(null);


const handleChildSelection = (itemValue) => {
  setSelectedChild(itemValue);
  console.log('Selected Child:', itemValue);
};

  const [selectedLanguage, setSelectedLanguage] = React.useState("en" => "English");
  const [selectedPlace, setSelectedPlace] = React.useState("Jineng");
  const languages = [
    "af" => "Afrikaans",
        "ar" => "Arabic",
        "bg" => "Bulgarian",
        "bn" => "Bengali",
        "bs" => "Bosnian",
        "ca" => "Catalan",
        "cs" => "Czech",
        "da" => "Danish",
        "de" => "German",
        "el" => "Greek",
        "en" => "English",
        "es" => "Spanish",
        "et" => "Estonian",
        "fi" => "Finnish",
        "fr" => "French",
        "gu" => "Gujarati",
        "hi" => "Hindi",
        "hr" => "Croatian",
        "hu" => "Hungarian",
        "id" => "Indonesian",
        "is" => "Icelandic",
        "it" => "Italian",
        "iw" => "Hebrew",
        "ja" => "Japanese",
        "jw" => "Javanese",
        "km" => "Khmer",
        "kn" => "Kannada",
        "ko" => "Korean",
        "la" => "Latin",
        "lv" => "Latvian",
        "ml" => "Malayalam",
        "mr" => "Marathi",
        "ms" => "Malay",
        "my" => "Myanmar (Burmese)",
        "ne" => "Nepali",
        "nl" => "Dutch",
        "no" => "Norwegian",
        "pl" => "Polish",
        "pt" => "Portuguese",
        "ro" => "Romanian",
        "ru" => "Russian",
        "si" => "Sinhala",
        "sk" => "Slovak",
        "sq" => "Albanian",
        "sr" => "Serbian",
        "su" => "Sundanese",
        "sv" => "Swedish",
        "sw" => "Swahili",
        "ta" => "Tamil",
        "te" => "Telugu",
        "th" => "Thai",
        "tl" => "Filipino",
        "tr" => "Turkish",
        "uk" => "Ukrainian",
        "ur" => "Urdu",
        "vi" => "Vietnamese",
        "zh-CN" => "Chinese (Simplified)",
        "zh-TW" => "Chinese (Traditional)"
];
  const places = ["Jineng", "Parents Lounge", "Parking Lot"];

  const fetchApiData = async () => {
    console.log("Fetching API data");
    try {
      const response = await axios.get('https://www.balichildrenshouse.com/myCH/api/parent-students/1773', {
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
              onValueChange={handleChildSelection}
            >
              {students.map((student) => (
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
              <Select
                selectedValue={selectedLanguage}
                minWidth="275"
                accessibilityLabel="Choose your language"
                placeholder="Choose your language"
                onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
              >
                {languages.map((language, index) => (
                  <Select.Item key={index} label={language.name} value={language.code} />
                ))}
              </Select>
            </View>
            <View style={styles.titleSubtitleContainer}>
              <View style={[styles.titleSubtitle, styles.callMyChildFlexBox]}>
                <Text style={[styles.selectLanguage, styles.selectTypo]}>Select Place</Text>
              </View>
            </View>
            <View style={[styles.dropdown2, styles.dropdownShadowBox]}>
            <Select
              selectedValue={selectedPlace}
              minWidth="275"
              accessibilityLabel="Choose your place"
              placeholder="Choose your place"
              onValueChange={(itemValue) => setSelectedPlace(itemValue)}
            >
              {places.map((place, index) => (
                <Select.Item key={index} label={place} value={place} />
              ))}
            </Select>
            </View>
          </View>
        </View>
        <Button
          style={{
            ...styles.call, styles.callTypo
            backgroundColor: Color.colorTomato,
            width: 200,
            height: 40,
          }}
          onPress={}
          >
          <Text style={{ color: Color.colorWhite }}>Call</Text>
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