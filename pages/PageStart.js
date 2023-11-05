import * as React from "react";
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Pressable, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { Color } from "../GlobalStyles";

const PageStart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pageStart}>
      <Header
        invoiceTitle="PAYMENT"
        backButtonPosition="unset"
        backButtonTop="unset"
        backButtonLeft="unset"
        invoicesAlignItems="center"
        invoicesWidth={96}
        onBackButtonPress={() => navigation.navigate("PageStart")}
      />
      <View style={styles.frame}>
        <Pressable
          style={styles.groupLayout}
          onPress={() => navigation.navigate("PaymentCHDAccount")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-481370-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.group4813711, styles.groupLayout]}
          onPress={() => navigation.navigate("PaymentInvoice")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-481371-1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 110,
    height: 80,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  group4813711: {
    marginLeft: 20,
  },
  frame: {
    width: 350,
    overflow: "hidden",
    flexDirection: "row",
    marginTop: 20,
    height: 80,
    alignItems: "center",
  },
  pageStart: {
    backgroundColor: Color.singleToneWhite,
    flex: 1,
    height: 844,
    alignItems: "center",
    width: "100%",
  },
});

export default PageStart;
