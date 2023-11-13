import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const PopUp = ({ onClose }) => {
  return (
    <View style={[styles.popUp, styles.popLayout]}>
      <Image
        style={[styles.popUpChild, styles.popLayout]}
        contentFit="cover"
        source={require("../assets/images/rectangle-365.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  popLayout: {
    height: 440,
    width: 268,
  },
  popUpChild: {
    position: "absolute",
    marginTop: -220,
    marginLeft: -134,
    top: "50%",
    left: "50%",
    borderRadius: 12,
  },
  popUp: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default PopUp;
