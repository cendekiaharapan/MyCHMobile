import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message"; 

// ...
const FormContainer2 = ({ sharedValue, showToast }) => {
  // Format the sharedValue with commas as thousands separators
  const formattedValue = sharedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  // Convert formattedValue back to a number and then multiply it by 1200
  const numericValue = parseFloat(formattedValue.replace(/,/g, ''));
  const calculatedValue = isNaN(numericValue) ? 0 : numericValue * 1200;
  
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={styles.inputField}>
        <View style={[styles.icons, styles.textFlexBox]}>
          <View style={styles.textFlexBox}>
            <Text style={styles.placeholder}>Rp. {calculatedValue.toLocaleString()}</Text>
            <View style={styles.cursor} />
          </View>
        </View>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <TouchableOpacity
          style={styles.topupButton}
          onPress={() => {
            // Show the toast with the shared value
            showToast();
          }}
        >
          <Text style={[styles.topUp]}>TOP UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// ...


const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignItems: "center",
    width: 350,
  },
  textFlexBox: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  placeholder: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textText900,
    textAlign: "left",
    flex: 1,
  },
  cursor: {
    backgroundColor: Color.primaryPrimary700,
    width: 1,
    height: 18,
    display: "none",
    marginLeft: 8,
  },
  icons: {
    width: 297,
  },
  inputField: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    height: 34,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    justifyContent: "center",
    width: 350,
  },
  topUp: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.singleToneWhite,
    textAlign: "center",
  },
  topupButton: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorTomato,
    width: 349,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  frame1: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    height: 104,
    marginTop: 10,
    alignItems: "center",
  },
});

export default FormContainer2;
