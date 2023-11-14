import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const AppsList = () => {
  const navigation = useNavigation();

  const handleCallMyChildButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "CallMyChild", // change this with your screen name
    });
  };
  const handlePaymentButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "PaymentInvoice", // change this with your screen name
    });
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.RowContainer}>
          <TouchableOpacity onPress={handleCallMyChildButton}>
            <View style={styles.BoxContainer}>
              <View style={styles.ImageContainer}>
                <Image
                  style={styles.StyleImage}
                  source={require("../assets/images/callMyChild.png")}
                  contentFit="cover"
                />
              </View>
              <Text style={styles.StyleText}>CALL MY CHILD</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.BoxContainer}>
            <View style={styles.ImageContainer}>
              <Image
                style={styles.StyleImage}
                source={require("../assets/images/DailyScoreReport.png")}
                contentFit="cover"
              />
            </View>
            <Text style={styles.StyleText}>DAILY SCORE REPORT</Text>
          </View>
        </View>
        <View style={styles.RowContainer}>
          <View style={styles.BoxContainer}>
            <Image
              style={styles.StyleImage}
              source={require("../assets/images/TermAssessmentReport.png")}
              contentFit="cover"
            />
            <Text style={styles.StyleText}>TERM ASSESSMENT REPORT</Text>
          </View>
          <View style={styles.BoxContainer}>
            <Image
              style={styles.StyleImage}
              source={require("../assets/images/ReportCard.png")}
              contentFit="cover"
            />
            <Text style={styles.StyleText}>REPORT CARD</Text>
          </View>
        </View>
        <View style={styles.RowContainer}>
          <View style={styles.BoxContainer}>
            <Image
              style={styles.StyleImage}
              source={require("../assets/images/excuse.png")}
              contentFit="cover"
            />
            <Text style={styles.StyleText}>EXCUSE</Text>
          </View>
          <View style={styles.BoxContainer}>
            <Image
              style={styles.StyleImage}
              source={require("../assets/images/Communication.png")}
              contentFit="cover"
            />
            <Text style={styles.StyleText}>COMMUNICATION</Text>
          </View>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity onPress={handlePaymentButton}>
            <View style={styles.BoxContainer}>
              <Image
                style={styles.StyleImage}
                source={require("../assets/images/Payment.png")}
                contentFit="cover"
              />
              <Text style={styles.StyleText}>PAYMENT</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.BoxContainer}>
            <Image
              style={styles.StyleImage}
              source={require("../assets/images/CHDollar.png")}
              contentFit="cover"
            />
            <Text style={styles.StyleText}>CH DOLLAR</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FCFCFC",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    height: 645,
    width: 336,
  },
  RowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  BoxContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    width: 153,
    height: 145.68,
    borderRadius: 11.87,
  },
  StyleText: {
    textAlign: "center",
    lineHeight: 13.96,
    fontFamily: FontFamily.poppinsBold,
    fontSize: 8.31,
    color: Color.colorMidnightblue,
    alignItems: "center",
  },
  StyleImage: {
    overflow: "hidden",
    width: 103,
    height: 103,
  },
  ImageContainer: {
    width: 103,
    height: 103,
  },
});

export default AppsList;
