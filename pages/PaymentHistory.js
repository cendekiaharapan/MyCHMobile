import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateFilterContainer from "../components/DateFilterContainer";
import FormContainer4 from "../components/FormContainer4";
import { Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

const PaymentHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentHistory}>
      <View style={styles.herocontent}>
        <Pressable
          style={styles.wrapperFlexBox}
          onPress={() => navigation.navigate("PaymentTopup")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={[styles.transactionHistoryWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.transactionHistory}>TRANSACTION HISTORY</Text>
        </View>
      </View>
      <DateFilterContainer />
      <Text style={styles.thursday05Oct}>Thursday, 05 Oct 2023</Text>
      <View style={styles.topupConParent}>
        <Image
          style={styles.topupConIcon}
          contentFit="cover"
          source={require("../assets/topup-con.png")}
        />
        <Text style={[styles.workedAsTutor, styles.chdTypo]}>
          Worked as Tutor Sebaya
        </Text>
        <Text style={[styles.chd, styles.chdTypo]}>+15 CHD</Text>
      </View>
      <FormContainer4 temperatureChange="-10 CHD" propTop={333} propLeft={40} />
      <View style={styles.history2}>
        <Image
          style={styles.group21}
          contentFit="cover"
          source={require("../assets/group-2-1.png")}
        />
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={[styles.frame1, styles.frameLayout]}>
            <Text style={styles.chdTypo}>Bought item(s) at the canteen</Text>
            <View style={styles.frameChild} />
          </View>
          <Text style={[styles.chd1, styles.chdTypo]}>-2 CHD</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  chdTypo: {
    lineHeight: 13,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameLayout: {
    height: 42,
    width: 300,
    overflow: "hidden",
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  transactionHistory: {
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
  },
  transactionHistoryWrapper: {
    justifyContent: "center",
    marginLeft: 18,
  },
  herocontent: {
    backgroundColor: Color.singleToneWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    width: 390,
    height: 120,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  thursday05Oct: {
    top: 303,
    left: 25,
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  topupConIcon: {
    top: 1,
    width: 42,
    height: 39,
    left: 0,
    position: "absolute",
  },
  workedAsTutor: {
    left: 47,
    fontSize: FontSize.size_xs,
    position: "absolute",
    top: 0,
  },
  chd: {
    top: 23,
    left: 47,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  topupConParent: {
    top: 454,
    left: 30,
    width: 195,
    height: 40,
    position: "absolute",
  },
  group21: {
    width: 22,
    height: 39,
  },
  frameChild: {
    backgroundColor: Color.colorGainsboro,
    height: 1,
    marginTop: 28,
    width: 300,
  },
  frame1: {
    paddingLeft: 2,
  },
  chd1: {
    marginTop: -19,
  },
  frame: {
    justifyContent: "flex-end",
    marginLeft: 13,
  },
  history2: {
    top: 396,
    left: 40,
    width: 335,
    height: 43,
    flexDirection: "row",
    position: "absolute",
  },
  paymentHistory: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PaymentHistory;
