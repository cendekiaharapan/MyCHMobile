import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, Padding } from "../GlobalStyles";

const DetailPost = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.detailPost}>
      <ImageBackground
        style={[styles.borocayScreenIcon, styles.titleFlexBox]}
        resizeMode="cover"
        source={require("../assets/images/screen.png")}
      >
        <View style={styles.titleFlexBox} />
        <View style={styles.bottomDrawer}>
          <View style={styles.bottomDrawerContent}>
            <View style={[styles.title, styles.titleFlexBox]}>
              <View style={styles.titleInner}>
                <View>
                  <Text style={[styles.loremIpsumDolor, styles.loremFlexBox]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eli
                  </Text>
                  <View style={styles.authortimestamp}>
                    <Image
                      style={styles.vectorIcon}
                      contentFit="cover"
                      source={require("../assets/images/vector.png")}
                    />
                    <Text style={styles.timestamp}>20/09/2023</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.overviewText}>
              <Text style={[styles.loremIpsumDolor1, styles.loremFlexBox]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore Lorem ipsum dolor sit amet, consectetur
                adipislllllll.
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Pressable
        style={styles.backicon}
        onPress={() => navigation.navigate("AllPost")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/images/backicon2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  loremFlexBox: {
    textAlign: "justify",
    lineHeight: 23,
    letterSpacing: 0,
  },
  loremIpsumDolor: {
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.black,
    width: 328,
  },
  vectorIcon: {
    height: 15,
    width: 15,
  },
  timestamp: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.grey,
    textAlign: "left",
    marginLeft: 10,
    letterSpacing: 0,
  },
  authortimestamp: {
    marginTop: 2,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  titleInner: {
    width: 328,
    flexDirection: "row",
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
  },
  loremIpsumDolor1: {
    top: "0%",
    left: "0%",
    fontSize: 14,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorMidnightblue,
    position: "absolute",
    width: "100%",
  },
  overviewText: {
    height: 254,
    marginTop: 24,
    alignSelf: "stretch",
  },
  bottomDrawerContent: {
    flex: 1,
  },
  bottomDrawer: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 24,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  borocayScreenIcon: {
    paddingTop: Padding.p_base,
    zIndex: 0,
    alignItems: "center",
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backicon: {
    left: 24,
    top: 50,
    height: 17,
    zIndex: 1,
    position: "absolute",
    width: 15,
  },
  detailPost: {
    height: 800,
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
});

export default DetailPost;
