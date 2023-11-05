import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const AddButton = () => {
  return (
    <View style={styles.frame}>
      <TouchableOpacity>
        <View style={styles.btnadd}>
          <Image
            style={styles.btnaddChild}
            contentFit="cover"
            source={require("../assets/frame-865.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    top: 680,
    alignItems: "flex-end",
    justifyContent: "center",
    left: 25,
    position: "absolute",
    width: 306,
    overflow: "hidden",
  },
  btnadd: {
    // backgroundColor: "cyan",
    alignItems: "center",
    flexDirection: "row",
  },
  btnaddChild: {
    borderRadius: 2,
    width: 45,
    height: 45,
  },
});
export default AddButton;
