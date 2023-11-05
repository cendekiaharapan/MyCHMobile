import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Post1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.post1}
      onPress={() => navigation.navigate("DetailPost")}
    >
      <Text style={styles.post1time}>28, Sep 2023 at 12:21 pm</Text>
      <Text style={[styles.post1tittle, styles.post1tittlePosition]}>
        News Title Lorem Ipsum Dolor Sit Amet
      </Text>
      <Image
        style={[styles.post1imgIcon, styles.post1tittlePosition]}
        contentFit="cover"
        source={require("../assets/images/post1img1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  post1tittlePosition: {
    left: 0,
    position: "absolute",
    width: 143,
  },
  post1time: {
    top: 177,
    left: 1,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black20,
    width: 85,
    textAlign: "left",
    position: "absolute",
  },
  post1tittle: {
    top: 104,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMidnightblue,
    textAlign: "left",
  },
  post1imgIcon: {
    top: 0,
    borderRadius: Border.br_5xs,
    height: 96,
  },
  post1: {
    height: 194,
    width: 143,
  },
});

export default Post1;
