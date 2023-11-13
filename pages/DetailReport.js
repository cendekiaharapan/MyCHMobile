import * as React from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const DetailReport = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.detailNew, styles.iconLayout]}>
      <View style={styles.ictwotoneArrowBackParent}>
        <Pressable
          style={styles.ictwotoneArrowBack}
          onPress={() => navigation.navigate("ListOfReport")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ictwotonearrowback.png")}
          />
        </Pressable>
        <View style={[styles.frameWrapper, styles.wrapperPosition]}>
          <View style={[styles.weeklyReportWrapper, styles.wrapperPosition]}>
            <Text style={styles.weeklyReport}>Score Board</Text>
          </View>
        </View>
        <View style={styles.mathematicParent}>
          <Text style={[styles.mathematic, styles.score90Typo]}>
            Mathematic
          </Text>
          <Text style={[styles.oct2023, styles.oct2023Typo]}>03 Oct 2023</Text>
          <Text
            style={[styles.score90, styles.score90Typo]}
          >{`Score : 90 `}</Text>
          <Text style={[styles.topic, styles.fileTypo]}>{`Topic `}</Text>
          <Text style={[styles.remark, styles.fileTypo]}>Remark</Text>
          <Text style={[styles.comment, styles.fileTypo]}>{`Comment `}</Text>
          <Text
            style={[styles.dailyQuizStatus, styles.fileTypo]}
          >{`Daily Quiz Status `}</Text>
          <Text style={[styles.file, styles.fileTypo]}>{`File  `}</Text>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupLayout1]} />
            <Text style={[styles.download, styles.yesTypo]}>Download</Text>
          </View>
          <View style={[styles.frame, styles.frameShadowBox]}>
            <View style={[styles.card, styles.cardShadowBox]} />
            <Text style={[styles.linearAndNonLinear, styles.loremTypo]}>
              Linear and Non-Linear Function
            </Text>
          </View>
          <View style={[styles.frame1, styles.frameShadowBox]}>
            <View style={[styles.card1, styles.cardShadowBox]} />
            <Text style={[styles.linearAndNonLinear1, styles.loremTypo]}>
              Linear and Non-Linear Function
            </Text>
          </View>
          <View style={styles.cardParent}>
            <View style={[styles.card2, styles.cardShadowBox]} />
            <View style={styles.frameParent}>
              <View style={[styles.frameContainer, styles.proquirmentPosition]}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/frame-14.png")}
                />
              </View>
              <View style={[styles.frameView, styles.frameViewLayout]}>
                <View
                  style={[
                    styles.proquirmentTcdocWrapper,
                    styles.frameViewLayout,
                  ]}
                >
                  <Text
                    style={[
                      styles.proquirmentTcdoc,
                      styles.proquirmentPosition,
                    ]}
                  >
                    proquirment_tc.doc
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frame2, styles.frameShadowBox]}>
            <View style={[styles.card3, styles.cardShadowBox]} />
            <Text style={[styles.loremIpsumLorem, styles.loremTypo]}>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum
            </Text>
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.yes, styles.yesTypo]}>Yes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  wrapperPosition: {
    height: 22,
    left: "50%",
    position: "absolute",
  },
  score90Typo: {
    color: Color.colorBlack,
    top: "3.66%",
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  oct2023Typo: {
    fontSize: FontSize.bodyBodyXS_size,
    position: "absolute",
  },
  fileTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    width: 98,
    position: "absolute",
  },
  groupLayout1: {
    height: 18,
    backgroundColor: Color.colorForestgreen_100,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  yesTypo: {
    color: Color.colorWhite,
    lineHeight: 24,
    height: 21,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "left",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  frameShadowBox: {
    width: 319,
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    marginLeft: -153,
    left: "50%",
    position: "absolute",
  },
  cardShadowBox: {
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  loremTypo: {
    left: "2.82%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.bodyBodyXS_size,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  proquirmentPosition: {
    left: 0,
    top: 0,
  },
  frameViewLayout: {
    width: 115,
    height: 18,
    position: "absolute",
  },
  groupLayout: {
    width: 65,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  ictwotoneArrowBack: {
    left: 18,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  weeklyReport: {
    lineHeight: 22,
    color: Color.colorMidnightblue,
    width: 142,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    flex: 1,
  },
  weeklyReportWrapper: {
    marginLeft: -70.5,
    top: 0,
  },
  frameWrapper: {
    marginLeft: -35,
    top: 1,
    width: 107,
  },
  mathematic: {
    textAlign: "center",
    left: "5%",
    fontSize: FontSize.size_xl,
    top: "3.66%",
  },
  oct2023: {
    height: "3.23%",
    width: "31.47%",
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    top: "0%",
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "center",
    color: Color.colorBlack,
    left: "0%",
  },
  score90: {
    left: "72.94%",
    fontSize: 17,
    textAlign: "center",
  },
  topic: {
    top: "20.86%",
    textAlign: "center",
    left: "5%",
  },
  remark: {
    top: "36.99%",
    textAlign: "center",
    left: "5%",
  },
  comment: {
    top: "52.69%",
    textAlign: "center",
    left: "5%",
  },
  dailyQuizStatus: {
    width: "52.65%",
    top: "76.13%",
    left: "5.29%",
    textAlign: "left",
  },
  file: {
    top: "85.81%",
    left: "5.59%",
    textAlign: "center",
  },
  groupChild: {
    top: 3,
    width: 98,
    position: "absolute",
  },
  download: {
    marginLeft: -32.18,
    width: 63,
  },
  rectangleParent: {
    top: 438,
    left: 242,
    height: 21,
  },
  card: {
    bottom: "2.44%",
    height: "97.56%",
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
  },
  linearAndNonLinear: {
    width: "83.07%",
    top: "29.27%",
    height: "41.46%",
    left: "2.82%",
  },
  frame: {
    top: "26.67%",
    bottom: "64.52%",
    height: "8.82%",
    width: 319,
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    marginLeft: -153,
  },
  card1: {
    bottom: "2.44%",
    height: "97.56%",
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
  },
  linearAndNonLinear1: {
    width: "76.8%",
    top: "29.27%",
    height: "41.46%",
    left: "2.82%",
  },
  frame1: {
    top: "42.58%",
    bottom: "48.6%",
    height: "8.82%",
    width: 319,
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    marginLeft: -153,
  },
  card2: {
    bottom: "0%",
    height: "100%",
  },
  frameChild: {
    borderRadius: 3,
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  frameContainer: {
    position: "absolute",
    flexDirection: "row",
  },
  proquirmentTcdoc: {
    lineHeight: 18,
    fontFamily: FontFamily.bodyBodyXS,
    color: Color.blackL2,
    fontSize: FontSize.bodyBodyXS_size,
    position: "absolute",
    textAlign: "left",
  },
  proquirmentTcdocWrapper: {
    left: 0,
    top: 0,
  },
  frameView: {
    top: 9,
    left: 45,
  },
  frameParent: {
    left: 12,
    width: 160,
    height: 36,
    top: 2,
    position: "absolute",
  },
  cardParent: {
    height: "8.6%",
    width: "54.12%",
    top: "91.4%",
    right: "40.88%",
    left: "5%",
    bottom: "0%",
    position: "absolute",
  },
  card3: {
    bottom: "2.44%",
    height: "97.56%",
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
  },
  loremIpsumLorem: {
    height: "58.62%",
    width: "94.36%",
    top: "18.97%",
  },
  frame2: {
    height: "12.47%",
    top: "58.49%",
    bottom: "29.03%",
  },
  groupItem: {
    top: 2,
    height: 18,
    backgroundColor: Color.colorForestgreen_100,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  yes: {
    marginLeft: -10.5,
    width: 21,
  },
  rectangleGroup: {
    top: 354,
    left: 271,
    height: 21,
  },
  mathematicParent: {
    height: "85.79%",
    top: "14.21%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  ictwotoneArrowBackParent: {
    width: 340,
    height: 542,
  },
  detailNew: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    height: 800,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_26xl,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    width: "100%",
  },
});

export default DetailReport;
