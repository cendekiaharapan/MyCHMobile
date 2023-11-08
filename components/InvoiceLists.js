// InvoiceLists.js
import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const InvoiceLists = ({ InvoiceListType, onPressNavigation, studentName, description, paidDate, dueDate, totalRate }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.invoiceList}
      onPress={() => navigation.navigate(onPressNavigation)}
    >
      {InvoiceListType === 1 && (
        <>
          <View style={[styles.textStudentNameWrapper, styles.dueWrapperSpaceBlock]}>
            <Text style={styles.textStudentName}>{studentName}</Text>
          </View>
          <View style={[styles.textDescriptionWrapper, styles.dueWrapperSpaceBlock]}>
            <Text style={[styles.textDescription, styles.dueClr]}>{description}</Text>
          </View>
          <View style={[styles.dueTextDueDateWrapper, styles.dueWrapperSpaceBlock]}>
            <Text style={[styles.dueTextDueDate, styles.SmallsizeText]}>{paidDate}</Text>
          </View>
          <View style={[styles.paidIcon, styles.paidIconLayout]}>
            <View style={[styles.paidIconChild, styles.paidIconLayout]} />
            <Text style={[styles.paid, styles.SmallsizeText]}>PAID</Text>
          </View>
        </>
      )}
      {InvoiceListType === 2 && (
        <>
          <View style={[styles.textStudentNameWrapper, styles.dueWrapperSpaceBlock]}>
            <Text style={[styles.textStudentName, styles.unpaidTypo]}>{studentName}</Text>
          </View>
          <View style={[styles.textDescriptionWrapper, styles.dueWrapperSpaceBlock]}>
            <Text style={[styles.textDescription, styles.dueClr]}>{description}</Text>
          </View>
          <View style={[styles.dueTextDueDateWrapper, styles.dueWrapperSpaceBlock]}>
            <Text style={[styles.dueTextDueDate, styles.dueLayout]}>{dueDate}</Text>
          </View>
          <View style={[styles.totalRateIconParent, styles.dueWrapperSpaceBlock]}>
            <View style={[styles.totalRateIcon, styles.iconLayout]}>
              <Text style={[styles.rpTotalRate, styles.dueLayout]}>Rp. {totalRate}</Text>
            </View>
            <View style={[styles.unpaidIcon, styles.iconLayout]}>
              <Text style={[styles.unpaid, styles.unpaidText]}>UNPAID</Text>
            </View>
          </View>
        </>
      )}
    </Pressable>
  );
};



const styles = StyleSheet.create({
    dueWrapperSpaceBlock: {
      paddingVertical: 0,
      paddingHorizontal: Padding.p_xl,
      justifyContent: "center",
      width: 350,
    },
    dueClr: {
      color: Color.colorGray_300,
      textAlign: "left",
    },
    SmallsizeText: {
      top: 10,
      lineHeight: 13,
      fontSize: FontSize.size_xs,
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: "500",
    },
    paidIconLayout: {
      width: 310,
      borderRadius: Border.br_smi,
    },
    textStudentName: {
      color: Color.colorDarkslategray,
      textAlign: "left",
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: "500",
      lineHeight: 17,
      fontSize: FontSize.size_mini,
    },
    textStudentNameWrapper: {
      height: 47,
    },
    textDescription: {
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: "500",
      lineHeight: 17,
      fontSize: FontSize.size_mini,
      color: Color.colorGray_300,
    },
    textDescriptionWrapper: {
      height: 33,
    },
    dueTextDueDate: {
      color: Color.colorGray_300,
      textAlign: "left",
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: "500",
    },
    dueTextDueDateWrapper: {
      height: 18,
    },
    paidIconChild: {
      backgroundColor: Color.colorLimegreen,
      height: 32,
    },
    paid: {
      color: Color.singleToneWhite,
      textAlign: "center",
      display: "flex",
      width: 28,
      marginTop: -32,
      height: 32,
      justifyContent: "center",
      fontSize: FontSize.size_xs,
      alignItems: "center",
    },
    paidIcon: {
      height: 45,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    invoiceList: {
      borderRadius: Border.br_3xs,
      backgroundColor: Color.colorWhitesmoke,
      height: 160,
      paddingBottom: Padding.p_xs,
      marginTop: 20,
      alignItems: "center",
      width: 350,
    },
    unpaidTypo: {
      fontFamily: FontFamily.poppinsMedium,
      fontWeight: "500",
    },
    unpaidText: {
      color:"#ffffff",
      lineHeight: 13,
      fontSize: FontSize.size_xs,
      fontWeight: "500",
    },
    dueLayout: {
      lineHeight: 13,
      fontSize: FontSize.size_xs,
    },
    iconLayout: {
      height: 32,
      borderRadius: Border.br_smi,
    },
    unpaidIcon: {
      backgroundColor: Color.colorTomato_100,
      width: 114,
      paddingHorizontal: 0,
      paddingVertical: Padding.p_4xs,
      marginLeft: 20,
      alignItems: "center",
    },
    totalRateIconParent: {
      height: 50,
      flexDirection: "row",
      paddingVertical: 0,
      alignItems: "center",
    },
    rpTotalRate: {
      fontFamily: FontFamily.poppinsRegular,
      color: Color.colorTomato_100,
      textAlign: "left",
    },
    totalRateIcon: {
      backgroundColor: Color.singleToneWhite,
      borderStyle: "solid",
      borderColor: Color.colorTomato_100,
      borderWidth: 1,
      width: 167,
      paddingHorizontal: Padding.p_mini,
      paddingVertical: 0,
      justifyContent: "center",
    },
  });
export default InvoiceLists;
