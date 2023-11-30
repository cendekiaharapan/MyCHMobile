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
  const handleCHDollarButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "PaymentCHDAccount", // change this with your screen name
    });
  };
  const handleReportCardButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "ReportCard", // change this with your screen name
    });
  };
  const handleExcuseButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "ChildPermissionAddPermis", // change this with your screen name
    });
  };
  const handleCommunicationButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "MessageToTeacherSendMes", // change this with your screen name
    });
  };
  const handleTermAssessmentButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "NewAssessment", // change this with your screen name
    });
  };
  const handleDailyScoreButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "Report", // change this with your screen name
    });
  };
  const handleAllPostButton = () => {
    navigation.navigate("Main App Stack", {
      screen: "AllPost", // change this with your screen name
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
                  source={require("../assets/images/callmychildicon.png")}
                  contentFit="cover"
                />
              </View>
              <Text style={styles.StyleText}>CALL MY CHILD</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDailyScoreButton}>
            <View style={styles.BoxContainer}>
              <View style={styles.ImageContainer}>
                <Image
                  style={styles.StyleImage}
                  source={require("../assets/images/DailyScoreIcon.png")}
                  contentFit="cover"
                />
              </View>
              <Text style={styles.StyleText}>DAILY SCORE</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity onPress={handleTermAssessmentButton}>
            <View style={styles.BoxContainer}>
              <Image
                style={{
                  overflow: "visible",
                  width: 70,
                  height: 103,
                }}
                source={require("../assets/images/TermAssessmentReportIcon.png")}
                contentFit="cover"
              />
              <Text style={styles.StyleText}>TERM ASSESSMENT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleReportCardButton}>
            <View style={styles.BoxContainer}>
              <Image
                style={styles.StyleImage}
                source={require("../assets/images/ReportCardIcon.png")}
                contentFit="cover"
              />
              <Text style={styles.StyleText}>REPORT CARD</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity onPress={handleExcuseButton}>
            <View style={styles.BoxContainer}>
              <Image
                style={{
                  overflow: "visible",
                  width: 70,
                  height: 103,
                }}
                source={require("../assets/images/PermissionIcon.png")}
                contentFit="cover"
              />
              <Text style={styles.StyleText}>PERMISSION</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCommunicationButton}>
            <View style={styles.BoxContainer}>
              <Image
                style={styles.StyleImage}
                source={require("../assets/images/CommunicationIcon.png")}
                contentFit="cover"
              />
              <Text style={styles.StyleText}>MESSAGE TO TEACHER</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.RowContainer}>
          <TouchableOpacity onPress={handlePaymentButton}>
            <View style={styles.BoxContainer}>
              <Image
                style={styles.StyleImage}
                source={require("../assets/images/InvoicesIcon.png")}
                contentFit="cover"
              />
              <Text style={styles.StyleText}>INVOICES</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCHDollarButton}>
            <View style={styles.BoxContainer}>
              <Image
                style={styles.StyleImage}
                source={require("../assets/images/CHDollarIcon.png")}
                contentFit="cover"
              />
              <Text style={styles.StyleText}>CH DOLLAR</Text>
            </View>
          </TouchableOpacity>
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
    paddingTop: '7%'
  },
  bodyContainer: {
    height: '100%',
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
    fontSize: 10,
    color: Color.colorMidnightblue,
    alignItems: "center",
  },
  StyleImage: {
    overflow: "visible",
    width: 100,
    height: 103,
  },
  ImageContainer: {
    width: 103,
    height: 103,
  },
});

export default AppsList;
