import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "./FormContainer1";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ContainerCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={styles.herocontent}>
        <View style={styles.wrapperFlexBox}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <View style={[styles.chdAccountWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.chdAccount}>CHD ACCOUNT</Text>
        </View>
      </View>
      <Pressable
        style={styles.userCard}
        onPress={() => navigation.navigate("PaymentTopup")}
      >
        <Image
          style={styles.userCardChild}
          contentFit="cover"
          source={require("../assets/group-481352.png")}
        />
        <FormContainer1 username="Tiffany janice" chdvalue="450 CHD" />
      </Pressable>
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
  chdAccount: {
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorMidnightblue,
    textAlign: "left",
  },
  chdAccountWrapper: {
    marginLeft: 61,
    justifyContent: "center",
  },
  herocontent: {
    backgroundColor: Color.singleToneWhite,
    shadowRadius: 1,
    elevation: 1,
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
    alignItems: "center",
    width: 390,
  },
  userCardChild: {
    width: 350,
    height: 219,
    zIndex: 0,
  },
  userCard: {
    borderRadius: Border.br_mini,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 13,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    height: 380,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    alignItems: "center",
    width: 390,
  },
});

export default ContainerCard;
