import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Onboard = ({ navigation }) => {
  const [timePassed, setTimePassed] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(function () {
      setTimePassed(true);
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  React.useEffect(() => {
    if (timePassed) {
      navigation.navigate("ReportCard");
    }
  }, [timePassed, navigation]);

  if (!timePassed) {
    return (
      <View style={[styles.onboard, styles.onboardLayout]}>
        <View style={styles.content}>
          <Image
            style={[styles.logoIcon, styles.onboardLayout]}
            contentFit="cover"
            source={require("../assets/images/logo.png")}
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

  // You can remove the navigation.navigate("SignIn") here, as it's handled in the useEffect.
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
