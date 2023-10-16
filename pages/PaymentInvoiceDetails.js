import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PaymentInvoiceDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentInvoiceDetails}>
      <View style={styles.frame}>
        <View style={styles.herocontent}>
          <Pressable
            style={styles.vectorWrapper}
            onPress={() => navigation.navigate("PaymentInvoice")}
          >
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
      <View style={styles.frame1}>
        <View style={styles.descriptionParent}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.newAcademicYear}>
            New Academic Year 2025 2026
          </Text>
        </View>
        <View style={styles.dateParent}>
          <Text style={styles.description}>Date</Text>
          <Text style={styles.newAcademicYear}>28-08-2023</Text>
        </View>
      </View>
      <View style={styles.frame2}>
        <View style={styles.frame3}>
          <View style={styles.frame4}>
            <View style={styles.frame5}>
              <View style={styles.dueDateParent}>
                <Text style={styles.description}>Due Date</Text>
                <Text style={styles.newAcademicYear}>30-09-2023</Text>
              </View>
            </View>
            <View style={styles.itemnameList}>
              <View style={styles.frame6}>
                <View style={styles.itemnameTitle}>
                  <Text style={styles.studentName}>Items Name</Text>
                  <View style={styles.frame7}>
                    <Text style={styles.studentName}>Qty</Text>
                    <Text style={styles.rateRp}>Rate (Rp)</Text>
                  </View>
                </View>
                <View style={styles.item1}>
                  <Text style={styles.registrationFee}>Registration Fee</Text>
                  <View style={styles.frame8}>
                    <Text style={styles.text3}>1</Text>
                    <Text style={styles.text4}>1,500,000</Text>
                  </View>
                </View>
              </View>
              <View style={styles.frame9}>
                <View style={styles.item2}>
                  <View style={styles.frame10}>
                    <Text style={styles.registrationFee}>
                      Initatiion Fee Secondary
                    </Text>
                    <Text style={styles.text5}>1</Text>
                  </View>
                  <Text style={styles.text6}>24,000,000</Text>
                </View>
                <View style={styles.item3}>
                  <View style={styles.frame10}>
                    <Text style={styles.registrationFee}>
                      Earlu bird Rebate 20%
                    </Text>
                    <Text style={styles.text7}>1</Text>
                  </View>
                  <Text style={styles.text6}>-4,400,000</Text>
                </View>
              </View>
              <View style={styles.frame12}>
                <View style={styles.item2}>
                  <Text style={styles.registrationFee}>Loyalty Rebate 20%</Text>
                  <View style={styles.frame13}>
                    <Text style={styles.text3}>1</Text>
                    <Text style={styles.text10}>-3,840,000</Text>
                  </View>
                </View>
                <View style={styles.item5}>
                  <View style={styles.frame14}>
                    <Text style={styles.tuitionOfflineClass}>
                      Tuition Offline Class Full Year Payment 2025/2026
                    </Text>
                    <Text style={styles.text11}>1</Text>
                  </View>
                  
                  <Text style={styles.text12}>45,000,000</Text>
                </View>
                <View style={styles.item3}>
                  <Text style={styles.registrationFee}>
                    Early bird Rebate 40%
                  </Text>
                  <Text style={styles.text7}>1</Text>
                  <Text style={styles.text14}>-18,000,000</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.totalamount}>
            <Text style={styles.description}>Total Amount</Text>
            <Text style={styles.rp43860000}>Rp. 43,860,000</Text>
          </View>
        </View>
        <View style={styles.herocontent1}>
          <View style={styles.paynowButton}>
            <Text style={styles.payNow}>PAY NOW</Text>
          </View>
        </View>
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
    elevation: 20,
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
  description: {
    position: "relative",
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 109,
    height: 18,
  },
  newAcademicYear: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    marginTop: 4,
    width:200
  },
  descriptionParent: {
    width: 186,
    height: 45,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 164,
  },
  dateParent: {
    width: 109,
    height: 35,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 241,
    marginTop: 5,
  },
  frame1: {
    width: 350,
    height: 85,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15,
  },
  dueDateParent: {
    width: 109,
    height: 35,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dueDateGroup: {
    width: 109,
    height: 35,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: -35,
  },
  frame5: {
    width: 109,
    height: 35,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight: 241,
  },
  rateRp: {
    position: "relative",
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
    marginLeft: 52,
  },
  frame7: {
    width: 157,
    height: 17,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 100,
  },
  itemnameTitle: {
    width: 350,
    height: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  registrationFee: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  text3: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "center",
    width: 3,
    height: 13,
    marginLeft:1
  },
  text4: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "right",
    marginLeft: 80,
  },
  frame8: {
    width: 146,
    height: 13,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 108,
  },
  item1: {
    width: 350,
    height: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  frame6: {
    width: 350,
    height: 40,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text5: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "center",
    width: 3,
    height: 13,
    marginLeft: 59,
  },
  frame10: {
    width: 215,
    height: 13,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft:0
  },
  text6: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "right",
    marginLeft: 65,
  },
  item2: {
    width: 350,
    height: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text7: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "center",
    width: 3,
    height: 13,
    marginLeft: 75,
  },
  item3: {
    width: 350,
    height: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  frame9: {
    width: 350,
    height: 46,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  text10: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "right",
    marginLeft: 70,
  },
  frame13: {
    width: 150,
    height: 13,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 89,
  },
  tuitionOfflineClass: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    width: 150,
    marginRight:54,
  },
  text11: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "center",
    width: 3,
    height: 13,
    marginLeft: 3,
  },
  frame14: {
    width: 210,
    height: 26,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginRight:70,
  },
  text12: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    marginRight:5,
  },
  item5: {
    width: 350,
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  text14: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
    textAlign: "right",
    marginLeft: 65,
  },
  frame12: {
    width: 350,
    height: 92,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  itemnameList: {
    width: 350,
    height: 218,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 25,
    
  },
  frame4: {
    width: 350,
    height: 283,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rp43860000: {
    position: "relative",
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray,
    textAlign: "right",
    marginLeft: 120,
  },
  totalamount: {
    width: 350,
    height: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 101,
  },
  frame3: {
    width: 350,
    height: 402,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  payNow: {
    position: "relative",
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  paynowButton: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorTomato_200,
    width: 349,
    height: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  herocontent1: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 390,
    height: 130,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  frame2: {
    width: 390,
    height: 554,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15,
  },
  paymentInvoiceDetails: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default PaymentInvoiceDetails;
