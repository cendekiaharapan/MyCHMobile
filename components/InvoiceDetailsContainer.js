import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const InvoiceDetailsContainer = ({ onFramePressablePress }) => {
  return (
    <View style={styles.frame}>
      <View style={styles.herocontent}>
        <Pressable style={styles.vectorWrapper} onPress={onFramePressablePress}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={styles.invoiceDetailsWrapper}>
          <Text style={styles.invoiceDetails}>INVOICE DETAILS</Text>
        </View>
      </View>
      <View style={styles.studentNameParent}>
        <Text style={styles.studentName}>Student Name</Text>
        <Text style={styles.tifannyJanice}>TIFANNY JANICE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "relative",
    width: 16,
    height: 16,
  },
  vectorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Padding.p_3xs,
  },
  invoiceDetails: {
    position: "relative",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMidnightblue,
    textAlign: "left",
  },
  invoiceDetailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    marginLeft: 52,
  },
  herocontent: {
    backgroundColor: Color.colorWhite,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
  },
  studentName: {
    position: "relative",
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  tifannyJanice: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    marginTop: 5,
  },
  studentNameParent: {
    height: 35,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 241,
    marginTop: 20,
  },
  frame: {
    width: 390,
    height: 175,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  
});

export default InvoiceDetailsContainer;
