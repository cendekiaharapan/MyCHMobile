import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Onboard = ({ navigation }) => {
  const [timePassed, setTimePassed] = React.useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 3000);

  if (!timePassed) {
    return (
      <View style={[styles.onboard, styles.onboardLayout]}>
        <View style={styles.content}>
          <Image
            style={[styles.logoIcon, styles.onboardLayout]}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
          <Text style={styles.welcomeToMychContainer}>
            <Text style={styles.welcomeTo}>Welcome to</Text>
            <Text style={styles.my}> My</Text>
            <Text style={styles.ch}>CH</Text>
            <Text style={styles.text}>!</Text>
          </Text>
        </View>
      </View>
    );
  }

  navigation.navigate("SignIn");
  return null;
};

const styles = StyleSheet.create({
  onboardLayout: {
    overflow: "hidden",
    width: "100%",
  },
  logoIcon: {
    maxWidth: "100%",
    height: 321,
    alignSelf: "stretch",
  },
  welcomeTo: {
    color: Color.colorDarkslateblue,
  },
  my: {
    color: "#005494",
  },
  ch: {
    color: Color.colorTomato,
  },
  text: {
    color: "#5eb743",
  },
  welcomeToMychContainer: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    marginTop: 21,
  },
  content: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  onboard: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: 189,
    alignItems: "center",
  },
});

export default Onboard;
