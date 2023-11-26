import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, style }) => {
  return (
    <View style={[styles.newsFrameParent, style]}>
      <View style={styles.newsFrame}>
        <View style={styles.rectangleParent}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={{ uri: item.imgUrl }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.body}</Text>
            <View style={styles.dateContainer}>
              <Text style={styles.news}>{item.date}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsTypo: {
    opacity: 0.4,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 20, // Adjust the line height for better spacing
    fontSize: FontSize.size_3xs,
    color: Color.amberBlack,
  },
  frameChild: {
    borderRadius: 12,
    width: 100,
    height: "100%",
    position: "absolute",
  },
  textContainer: {
    flex: 1,
    marginLeft: 120, // Adjust the margin to place text orderly next to the left of the image
    justifyContent: "center",
  },
  title: {
    fontSize: FontSize.size_xs,
    lineHeight: 20, // Adjust the line height for better spacing
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.amberBlack,
  },
  text: {
    opacity: 0.6,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 20, // Adjust the line height for better spacing
    fontSize: FontSize.size_3xs,
    color: Color.amberBlack,
  },
  news: {
    width: "100%",
    fontSize: FontSize.size_3xs,
    color: Color.amberBlack,
  },
  dateContainer: {
    flexDirection: "row",
    marginTop: 5, // Adjust the margin for better alignment
  },
  rectangleParent: {
    flex: 1,
    alignSelf: "stretch",
  },
  newsFrame: {
    borderRadius: 12,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    height: 175,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  newsFrameParent: {
    width: 330,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CarouselCardItem;
