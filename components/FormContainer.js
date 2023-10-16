import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FormContainer = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState(""); // State to manage input value
  const [isFocused, setIsFocused] = useState(false); // State to manage input focus

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.frame}>
      <View style={styles.inputField}>
        <View style={styles.icons}>
          <View style={styles.text}>
            <TextInput
              style={styles.input}
              placeholder={isFocused ? "" : "0"}
              keyboardType="numeric"
              maxLength={10}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={(text) => {
                setInputValue(text);
                onInputChange(text); // Call the callback to update the shared value
              }}
              value={inputValue}
            />
          </View>
        </View>
      </View>
      <Text style={styles.idrEquivalent}>IDR Equivalent:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textText900,
    textAlign: "left",
  },
  cursor: {
    position: "relative",
    backgroundColor: Color.primaryPrimary700,
    width: 1,
    height: 18,
    display: "none",
    marginLeft: 8,
  },
  text: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icons: {
    flex: 1,
    width: 297,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputField: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.singleToneWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: 350,
    height: 34,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  idrEquivalent: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
    height: 15,
    marginRight: 240,
    marginTop: 20,
  },
  frame: {
    width: 350,
    height: 69,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
});

export default FormContainer;