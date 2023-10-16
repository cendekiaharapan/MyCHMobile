import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import FormContainer3 from "../components/FormContainer3";
import FormContainer from "../components/FormContainer";
import FormContainer2 from "../components/FormContainer2";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import Toast from 'react-native-toast-message';
import { useState } from "react";


const PaymentTopup = () => {
  const navigation = useNavigation();
  const [sharedValue, setSharedValue] = useState(""); // State to hold the shared value
  const handleInputChange = (text) => {
    // Callback function to update the shared value
    setSharedValue(text);
  };
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Successfully TOP UP 50 CHD',
      text2: 'To Tiffany Janice',
      position: 'bottom',
      visibilityTime: 3000, // 3 seconds
      autoHide: true,
      topOffset: 30,
    });
  };
  

  return (
    <View style={styles.paymentTopup}>
      <FormContainer3 />
      <View style={styles.frame}>
        <Text style={styles.chd}>450 CHD</Text>
        <Text style={styles.topUpAmountChd}>Top-up Amount (CHD):</Text>
      </View>
      <FormContainer onInputChange={handleInputChange} />
      <FormContainer2 sharedValue={sharedValue} showToast={showToast}/>
      <Pressable
        style={styles.frame1}
        onPress={() => navigation.navigate("PaymentHistory")}
      >
        <View style={styles.historyButton}>
          <Text style={styles.history}>HISTORY</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  chd: {
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorBlack,
    textAlign: "left",
    height: 17,
    marginRight: 285,
  },
  topUpAmountChd: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
    height: 15,
    marginRight: 180,
    marginTop: 20,
  },
  frame: {
    width: 350,
    height: 52,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  history: {
    position: "relative",
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorTomato,
    textAlign: "center",
  },
  historyButton: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.singleToneWhite,
    borderStyle: "solid",
    borderColor: Color.colorTomato,
    borderWidth: 1,
    width: 349,
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame1: {
    width: 350,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  paymentTopup: {
    position: "relative",
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default PaymentTopup;
