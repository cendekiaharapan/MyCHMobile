import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CHDHistoryCard = ({ ChdCardHistoryType }) => {
  const isChdIn = ChdCardHistoryType === 1;

  return (
    <View style={isChdIn ? styles.cardChdIn : styles.cardChdOut}>
      <View style={styles.dateHistory}>
        <Text style={styles.textDateHistory}>Text_date_history</Text>
      </View>
      <View style={styles.history}>
        <Text style={[styles.historyDescription, styles.historyTypo]}>
          {isChdIn ? "Work as Policeman" : "Bought item(s) at the canteen"}
        </Text>
        <Text style={[styles.historyValue, styles.historyTypo]}>
          {isChdIn ? "+20 CHD" : "-20 CHD"}
        </Text>
        <Image
          style={isChdIn ? styles.chInIcon : styles.foodIcon}
          contentFit="cover"
          source={
            isChdIn
              ? require("../assets/ch-in-icon.png")
              : require("../assets/food-icon.png")
          }
        />
      </View>
    </View>
  );
};

// The rest of the styling and export remain the same


const styles = StyleSheet.create({
  textDateHistory: {
    fontSize: FontSize.size_sm,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  dateHistory: {
    height: 30,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: 0,
    width: 350,
  },
  cardChdIn: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorFloralwhite,
    height: 102,
    alignItems: "center",
    paddingBottom: Padding.p_mini,
    marginTop: 20,
    width: 350,
  },
  cardChdOut: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorFloralwhite,
    height: 102,
    alignItems: "center",
    paddingBottom: Padding.p_mini,
    marginTop: 20,
    width: 350,
  },
  historyTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 13,
    fontSize: FontSize.size_xs,
    left: 61,
    position: "absolute",
  },
  historyDescription: {
    top: 16,
  },
  historyValue: {
    top: 39,
  },
  chInIcon: {
    top: 15,
    left: 15,
    width: 38,
    height: 35,
    position: "absolute",
  },
  foodIcon: {
    top: 15,
    left: 24,
    width: 22,
    height: 40,
    position: "absolute",
  },
  history: {
    width: 350,
    height: 50,
  },
});

export default CHDHistoryCard;
