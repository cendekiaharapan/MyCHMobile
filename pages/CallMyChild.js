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


const CallMyChild = forwardRef(({ navigation }, ref) => {
  const { width } = Dimensions.get("window");
  const isSmallScreen = width <= 375; 

  const [selectedChild, setSelectedChild] = React.useState("Ezra Gunawan");
  const [selectedLanguage, setSelectedLanguage] = React.useState("English");
  const [selectedPlace, setSelectedPlace] = React.useState("Jineng");

  const children = ["Ezra Gunawan", "Andrew Zefanya", "Eveline Kurnia"];
  const languages = ["English", "Bahasa Indonesia"];
  const places = ["Jineng", "Parent Lounge", "Parking Lot"];

  return (
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
              <Picker
                selectedValue={selectedChild}
                onValueChange={(itemValue, itemIndex) => setSelectedChild(itemValue)}
              >
                {children.map((child, index) => (
                  <Picker.Item key={index} label={child} value={child} />
                ))}
              </Picker>
            </View>
            <View style={styles.titleSubtitleContainer}>
              <View style={[styles.titleSubtitle, styles.callMyChildFlexBox]}>
                <Text style={[styles.selectLanguage, styles.selectTypo]}>Select Language</Text>
              </View>
            </View>
            <View style={[styles.dropdown1, styles.dropdownShadowBox]}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
              >
                {languages.map((language, index) => (
                  <Picker.Item key={index} label={language} value={language} />
                ))}
              </Picker>
            </View>
            <View style={styles.titleSubtitleContainer}>
              <View style={[styles.titleSubtitle, styles.callMyChildFlexBox]}>
                <Text style={[styles.selectLanguage, styles.selectTypo]}>Select Place</Text>
              </View>
            </View>
            <View style={[styles.dropdown2, styles.dropdownShadowBox]}>
              <Picker
                selectedValue={selectedPlace}
                onValueChange={(itemValue, itemIndex) => setSelectedPlace(itemValue)}
              >
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
    Toast.show({
      type: "success",
      text1: "SUCCESS!",
      text2: "Successfully Called Your Child!",
      visibilityTime: 2000, // Waktu toast ditampilkan (ms)
      autoHide: true, // Otomatis sembunyikan toast setelah waktu tertentu
      topOffset: 30, // Jarak dari bagian atas layar (px)
      position: "top", // Posisi toast ("top" atau "bottom")
      backgroundColor: "green", // Warna latar belakang toast
      textStyle: { color: "white", fontSize: 15 }, // Gaya teks
      onShow: () => {
        // Callback ketika toast ditampilkan
        console.log("Toast shown");
      },
      onHide: () => {
        // Callback ketika toast disembunyikan
        console.log("Toast hidden");
      },
    });
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