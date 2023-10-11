import React, { useState, useCallback } from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import CaraouselOption2 from "./CaraouselOption2";
import CaraouselOption3 from "./CaraouselOption3";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Frame1 = ({ style }) => {
  const [newsFrameContainerVisible, setNewsFrameContainerVisible] =
    useState(false);
  const [newsFrameContainer1Visible, setNewsFrameContainer1Visible] =
    useState(false);

  const openNewsFrameContainer = useCallback(() => {
    setNewsFrameContainerVisible(true);
  }, []);

  const closeNewsFrameContainer = useCallback(() => {
    setNewsFrameContainerVisible(false);
  }, []);

  const openNewsFrameContainer1 = useCallback(() => {
    setNewsFrameContainer1Visible(true);
  }, []);

  const closeNewsFrameContainer1 = useCallback(() => {
    setNewsFrameContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.newsFrameParent, style]}>
        <Pressable
          style={[styles.newsFrame, styles.newsFrameShadowBox]}
          onPress={openNewsFrameContainer}
        >
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/images/rectangle-161.png")}
            />
            <Text style={styles.indonesiaRaya}>Indonesia Raya</Text>
            <Text style={styles.topAchieverOf}>
              Top Achiever of grade eleven online in the fourth week! Keep up
              the good work everyone! Stay tuned for next week's ranking
            </Text>
            <View style={styles.newsParent}>
              <Text style={[styles.news, styles.newsTypo]}>News</Text>
              <Text
                style={[styles.aug2023, styles.newsTypo]}
              >{`13, Aug 2023 `}</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={[styles.newsFrame1, styles.newsFrameShadowBox]}
          onPress={openNewsFrameContainer1}
        >
          <View style={styles.rectangleParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/images/rectangle-161.png")}
            />
            <Text style={styles.indonesiaRaya}>Merdeka!</Text>
            <Text style={styles.topAchieverOf}>
              Top Achiever of grade eleven online in the fourth week! Keep up
              the good work everyone! Stay tuned for next week's ranking
            </Text>
            <View style={styles.newsParent}>
              <Text style={[styles.news, styles.newsTypo]}>News</Text>
              <Text
                style={[styles.aug2023, styles.newsTypo]}
              >{`13, Aug 2023 `}</Text>
            </View>
          </View>
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={newsFrameContainerVisible}
      >
        <View style={styles.newsFrameContainerOverlay}>
          <Pressable
            style={styles.newsFrameContainerBg}
            onPress={closeNewsFrameContainer}
          />
          <CaraouselOption2 onClose={closeNewsFrameContainer} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={newsFrameContainer1Visible}
      >
        <View style={styles.newsFrameContainer1Overlay}>
          <Pressable
            style={styles.newsFrameContainer1Bg}
            onPress={closeNewsFrameContainer1}
          />
          <CaraouselOption3 onClose={closeNewsFrameContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  newsFrameShadowBox: {
    justifyContent: "center",
    width: 157,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    height: 173,
  },
  newsTypo: {
    opacity: 0.4,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 10,
    color: Color.amberBlack,
  },
  newsFrameContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  newsFrameContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameChild: {
    left: 81,
    borderRadius: 3,
    height: 89,
    width: 61,
    top: 31,
    position: "absolute",
  },
  indonesiaRaya: {
    left: 24,
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    display: "flex",
    width: 106,
    height: 26,
    textAlign: "center",
    color: Color.amberBlack,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  topAchieverOf: {
    left: 6,
    fontSize: FontSize.size_4xs,
    width: 75,
    height: 88,
    opacity: 0.6,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 10,
    textAlign: "center",
    color: Color.amberBlack,
    top: 31,
    position: "absolute",
  },
  news: {
    width: 22,
  },
  aug2023: {
    marginLeft: 4,
    width: 61,
  },
  newsParent: {
    top: 131,
    left: 38,
    width: 87,
    height: 11,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  newsFrame: {
    left: 0,
  },
  newsFrameContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  newsFrameContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  newsFrame1: {
    left: 171,
  },
  newsFrameParent: {
    width: 328,
    height: 173,
  },
});

export default Frame1;
