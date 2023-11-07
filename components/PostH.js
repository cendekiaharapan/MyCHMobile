import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PostH = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.posth}>
      <Pressable
        style={styles.posthimg}
        onPress={() => navigation.navigate("DetailPost")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/images/posthimg1.png")}
        />
      </Pressable>
      <Text style={[styles.posthtime, styles.posthtimePosition]}>
        28, Sep 2023 at 12:21 pm
      </Text>
      <Text style={[styles.posthtittle, styles.posthtimePosition]}>
        Massa tortor nibh nulla condimentum imperdiet scelerisque...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  posthtimePosition: {
    textAlign: "left",
    color: Color.white,
    left: 12,
    position: "absolute",
  },
  icon: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  posthimg: {
    height: 200,
    zIndex: 0,
    width: "100%",
  },
  posthtime: {
    top: 169,
    fontSize: FontSize.size_5xs,
    lineHeight: 12,
    fontFamily: FontFamily.poppinsRegular,
    width: 126,
    zIndex: 1,
  },
  posthtittle: {
    top: 127,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 287,
    zIndex: 2,
  },
  posth: {
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostH;
