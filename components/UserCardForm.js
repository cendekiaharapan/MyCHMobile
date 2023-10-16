import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import FormContainer1 from "./FormContainer1";
import { Border } from "../GlobalStyles";

const UserCardForm = () => {
  return (
    <View style={styles.userCard}>
      <Image
        style={styles.userCardChild}
        contentFit="cover"
        source={require("../assets/group-481347.png")}
      />
      <FormContainer1 username="TIMOTHY JACOB" chdvalue="250 CHD" />
    </View>
  );
};

const styles = StyleSheet.create({
  userCardChild: {
    width: 350,
    height: 220,
    zIndex: 0,
  },
  userCard: {
    borderRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    alignItems: "center",
    marginTop: 15,
  },
});

export default UserCardForm;
