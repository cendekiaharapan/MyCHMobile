import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import InvoiceContainer1 from "./InvoiceContainer1";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const AcademicYearForm = () => {
  return (
    <View style={styles.timothyJacobParent}>
      <Text style={styles.timothyJacob}>TIMOTHY JACOB</Text>
      <InvoiceContainer1
        tuitionDescription="New Academic year 2025 2026"
        tuitionAmount="Rp. 23,860,000"
        propWidth={233}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timothyJacob: {
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray,
    textAlign: "left",
  },
  timothyJacobParent: {
    width: 350,
    height: 177,
    paddingLeft: Padding.p_11xs,
    marginTop: 20,
  },
});

export default AcademicYearForm;
