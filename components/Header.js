import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Header = ({
  invoiceTitle,
  backButtonPosition,
  backButtonTop,
  backButtonLeft,
  iNVOICESAlignItems,
  iNVOICESWidth,
  onBackButtonPress,
}) => {
  const headerStyle = useMemo(() => {
    return {
      ...getStyleValue("position", backButtonPosition),
      ...getStyleValue("top", backButtonTop),
      ...getStyleValue("left", backButtonLeft),
    };
  }, [backButtonPosition, backButtonTop, backButtonLeft]);

  const pageTitleStyle = useMemo(() => {
    return {
      ...getStyleValue("alignItems", iNVOICESAlignItems),
      ...getStyleValue("width", iNVOICESWidth),
    };
  }, [iNVOICESAlignItems, iNVOICESWidth]);

  return (
    <View style={[styles.header, headerStyle]}>
      <Pressable style={styles.backButton} onPress={onBackButtonPress}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back-button.png")}
        />
      </Pressable>
      <View style={[styles.pageTitle, pageTitleStyle]}>
        <Text style={styles.invoices}>{invoiceTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    top: 10,
    width: 36,
    height: 36,
  },
  invoices: {
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
  },
  pageTitle: {
    top: 10,
    height: 42,
    justifyContent: "center",
  },
  header: {
    backgroundColor: Color.singleToneWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 20,
    shadowOpacity: 1,
    width: '100%',
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
  },
});

export default Header;
