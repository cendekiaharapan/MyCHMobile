import * as React from "react";
import { Box, Button, FormControl, Stack, Input, WarningOutlineIcon, ScrollView, Text, Divider, NativeBaseButton } from "native-base";

import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

// Define your custom styles here
const styles = {
  submitbutton: {
    backgroundColor: Color.colorTomato,
    height: 41,
    padding: Padding.p_3xs,
    minWidth: 220,
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  submit: {
    color: Color.singleToneWhite,
    textAlign: "center",
    fontSize: FontSize.textMediumSm14_size,
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
    flex: 1,
  },
};

const Example = () => {
  return (
    <ScrollView w="100%">
      {/* Existing code */}
      
      {/* Replace your existing button with a Native Base Button */}
      <NativeBaseButton
        onPress={() => console.log("Button clicked")}
        bg={Color.colorTomato} // Set the background color
        borderRadius={Border.br_xl} // Set the border radius
        mt={30} // Set the margin top
        justifyContent="center" // Align the text horizontally
        alignItems="center" // Align the text vertically
        alignSelf="stretch" // Stretch the button to full width
        height={41} // Set the button height
        px={Padding.p_3xs} // Set horizontal padding
        minWidth={220} // Set minimum width
        flexDirection="row" // Display text and icon in a row
        style={styles.submitbutton} // Apply custom styles
      >
        <Text style={styles.submit}>Submit</Text>
      </NativeBaseButton>
    </ScrollView>
  );
};

export default Example;
