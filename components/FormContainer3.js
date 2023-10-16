import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const FormContainer3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.herocontent}>
        <Pressable
          style={styles.vectorWrapper}
          onPress={() => navigation.navigate("PaymentCHDAccount")}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <View style={styles.tiffanyJaniceWrapper}>
          <Text style={styles.tiffanyJanice}>TIFFANY JANICE</Text>
        </View>
      </View>
      <Text style={styles.currentBalance}>Current Balance:</Text>
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
  tiffanyJanice: {
    position: "relative",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMidnightblue,
    textAlign: "left",
  },
  tiffanyJaniceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
    marginLeft: 53,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
  },
  currentBalance: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
    height: 15,
    marginRight: 231,
    marginTop: 20,
  },
  frame: {
    width: 390,
    height: 155,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default FormContainer3;
