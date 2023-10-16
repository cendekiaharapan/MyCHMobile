import React, { useState } from "react";
import { TouchableOpacity, Text, Alert, StyleSheet } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { FontFamily, FontSize } from "../GlobalStyles"; // Import your global styles

const DocumentPickerButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();

      if (result.type === "success") {
        // Handle the picked document here
        console.log("Document picked:", result.name, result.uri);
        setSelectedFile(result.name); // Set the selected file name
      } else {
        // Handle user cancel or other errors
        console.log("Document picker canceled or failed:", result.type);
      }
    } catch (err) {
      // Handle any errors
      Alert.alert("Error", "Could not pick the document.");
    }
  };

  return (
    <TouchableOpacity style={styles.newinputform} onPress={pickDocument}>
      <Text
        style={{
          fontFamily: FontFamily.poppinsLight,
          fontWeight: "300",
          color: "#a6a6a6",
          fontSize: FontSize.textRegularXs12_size,
        }}
      >
        {selectedFile ? selectedFile : "Upload File"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newinputform: {
    borderWidth: 1,
    borderColor: "#d9d9d9",
    height: 40,
    borderRadius: 99999999,
    justifyContent: "center",
    paddingLeft: 10,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.textRegularXs12_size,
  },
});

export default DocumentPickerButton;
