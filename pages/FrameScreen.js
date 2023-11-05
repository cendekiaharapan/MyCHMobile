import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { Login } from "./Login";

const FrameScreen = ({ navigation }) => {
  const [timePassed, setTimePassed] = React.useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 3000);

  if (!timePassed) {
    return (
      <View style={styles.container}>
        <View style={styles.signIn}>
          <Image
            style={styles.chlogo1Icon}
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
  
  navigation.navigate('Login');
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
  },
  chlogo1Icon: {
    width: 321,
    height: 321,
  },
  welcomeTo: {
    color: Color.darkslateblue,
  },
  my: {
    color: "#005494",
  },
  ch: {
    color: Color.tomato,
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
  signIn: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FrameScreen;
