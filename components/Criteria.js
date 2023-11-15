import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color } from "../GlobalStyles";

const Criteria = () => {
  return (
    <View style={styles.criteria}>
      <View style={styles.card} />
      <Text style={[styles.textCriteria, styles.textFlexBox]}>
        Text_criteria
      </Text>
      <View style={styles.inputWrapper}>
        <View style={styles.inputPosition}>
          <Image
            style={[styles.inputChild, styles.inputPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-41.png")}
          />
          <Text style={[styles.textNumber, styles.textFlexBox]}>
            text_number
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  inputPosition: {
    left: 0,
    top: 0,
    height: 35,
    width: 129,
    position: "absolute",
  },
  card: {
    height: "100%",
    marginLeft: -77.5,
    top: "0%",
    bottom: "0%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: 4.9,
    },
    shadowRadius: 29.56,
    elevation: 29.56,
    shadowOpacity: 1,
    left: "50%",
    position: "absolute",
    width: 155,
  },
  textCriteria: {
    top: "11.96%",
    left: "20.65%",
    fontSize: 14,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  inputChild: {
    borderRadius: 79,
  },
  textNumber: {
    marginLeft: -32.5,
    top: 10,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#5f5f5f",
    left: "50%",
  },
  inputWrapper: {
    top: 38,
    left: 13,
    height: 35,
    width: 129,
    position: "absolute",
  },
  criteria: {
    height: 92,
    width: 155,
  },
});

export default Criteria;
