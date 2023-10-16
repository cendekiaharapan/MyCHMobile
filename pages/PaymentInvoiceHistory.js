import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AcademicYearForm1 from "../components/AcademicYearForm1";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const PaymentInvoiceHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentInvoiceHistory}>
      <View style={styles.herocontent}>
        <Pressable
          style={styles.wrapperFlexBox}
          onPress={() => navigation.navigate("PaymentInvoice")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={[styles.invoiceHistoryWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.invoiceHistory}>INVOICE HISTORY</Text>
        </View>
      </View>
      <AcademicYearForm1 />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  invoiceHistory: {
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
  },
  invoiceHistoryWrapper: {
    justifyContent: "center",
    marginLeft: 49,
  },
  herocontent: {
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
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  paymentInvoiceHistory: {
    flex: 1,
    width: "100%",
    height: 844,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default PaymentInvoiceHistory;
