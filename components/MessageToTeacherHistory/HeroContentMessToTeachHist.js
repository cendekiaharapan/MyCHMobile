import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import {
  Padding,
  FontSize,
  FontFamily,
  Color,
  Border,
} from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const HeroContent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.herocontent}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MessageToTeacherSendMes")}
      >
        <View style={[styles.vectorWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../../assets/vector5.png")}
          />
        </View>
      </TouchableOpacity>
      <View style={[styles.chatHistoryWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.chatHistory}>Chat History</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  vectorWrapper: {
    top: 42,
    left: 12,
  },
  chatHistory: {
    left: 15,
    fontSize: FontSize.headingMd20_size,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.headingMd20,
    color: Color.colorMidnightblue,
    textAlign: "left",
  },
  chatHistoryWrapper: {
    marginLeft: -75,
    top: 39,
    left: "50%",
    justifyContent: "center",
  },
  herocontent: {
    top: 20,
    backgroundColor: "#fcfcfc",
    width: 390,
    height: 120,
  },
});

export default HeroContent;
