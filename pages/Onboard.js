import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Onboard = ({ navigation }) => {
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimePassed(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!timePassed) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logoIcon}
          source={require("../assets/logo.png")}
        />
        <Text style={styles.welcomeText}>
          Welcome to MyCH!
        </Text>
      </View>
    );
  }

  navigation.navigate('SignIn');
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  logoIcon: {
    width: 100, // Customize the width
    height: 100, // Customize the height
    // Add your image styling here
  },
  welcomeText: {
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    marginTop: 20, // Customize the margin-top
    // Add your text styling here
  },
});

export default Onboard;
