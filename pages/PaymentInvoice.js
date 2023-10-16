import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import TuitionFormContainer from "../components/TuitionFormContainer";
import AcademicYearForm from "../components/AcademicYearForm";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, FontSize, Border } from "../GlobalStyles";

const PaymentInvoice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentInvoice}>
      <View style={styles.herocontent}>
        <View style={styles.vectorWrapper}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={styles.invoicesWrapper}>
          <Text style={[styles.invoices, styles.historyTypo]}>INVOICES</Text>
        </View>
      </View>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <TuitionFormContainer />
          <AcademicYearForm />
        </View>
        <View style={[styles.herocontent1, styles.herocontent1ShadowBox]}>
          <Pressable
            style={[styles.historyButton, styles.herocontent1ShadowBox]}
            onPress={() => navigation.navigate("PaymentInvoiceHistory")}
          >
            <Text style={[styles.history, styles.historyTypo]}>HISTORY</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  herocontent1ShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  vectorWrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  invoices: {
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    color: Color.colorMidnightblue,
    textAlign: "left",
  },
  invoicesWrapper: {
    marginLeft: 88,
    justifyContent: "center",
    padding: Padding.p_3xs,
    flexDirection: "row",
    alignItems: "center",
  },
  herocontent: {
    shadowRadius: 1,
    elevation: 10,
    height: 120,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 390,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  frame1: {
    width: 350,
    height: 534,
    alignItems: "center",
  },
  history: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    color: Color.colorTomato_200,
    textAlign: "center",
  },
  historyButton: {
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.colorTomato_200,
    borderWidth: 1,
    width: 349,
    height: 50,
  },
  herocontent1: {
    height: 130,
    marginTop: 0,
    width: 390,
  },
  frame: {
    height: 704,
    overflow: "hidden",
    marginTop: 20,
    width: 390,
    alignItems: "center",
  },
  paymentInvoice: {
    flex: 1,
    width: "100%",
    height: 844,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default PaymentInvoice;
