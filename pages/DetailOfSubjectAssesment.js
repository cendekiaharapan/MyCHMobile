import * as React from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { ScrollView, NativeBaseProvider } from "native-base";

const DetailOfSubjectAssesment = () => {
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View style={[styles.detailNew, styles.iconLayout]}>
        <View style={styles.parentLayout}>
          <View style={[styles.ictwotoneArrowBackParent, styles.parentLayout]}>
            <Pressable
              style={styles.ictwotoneArrowBack}
              onPress={() => navigation.navigate("Assessment")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ictwotonearrowback11.png")}
              />
            </Pressable>
            <Text style={[styles.mathematic, styles.bookletFlexBox]}>
              Mathematic
            </Text>
            <Text style={[styles.text, styles.textTypo]}>90</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.groupParent}>
                <View style={styles.frameGroup}>
                  <View style={[styles.frame, styles.frameLayout]}>
                    <View style={[styles.cardParent, styles.cardPosition]}>
                      <View style={[styles.card, styles.cardShadowBox]} />
                      <Text style={[styles.booklet, styles.bookletTypo]}>
                        Booklet
                      </Text>
                      <View style={[styles.inputWrapper, styles.inputLayout]}>
                        <View style={[styles.input, styles.inputLayout]}>
                          <Image
                            style={[styles.inputChild, styles.inputLayout]}
                            contentFit="cover"
                            source={require("../assets/rectangle-41.png")}
                          />
                          <Text
                            style={[
                              styles.scoreSimulation,
                              styles.scoreSimulationTypo,
                            ]}
                          >
                            Score Simulation
                          </Text>
                          <View style={styles.bxsdownArrow} />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.frame1, styles.framePosition1]}>
                    <View style={[styles.card1, styles.cardShadowBox]} />
                    <Text style={[styles.presentation, styles.remarkPosition]}>
                      Presentation
                    </Text>
                    <View style={[styles.inputWrapper, styles.inputLayout]}>
                      <View style={[styles.input, styles.inputLayout]}>
                        <Image
                          style={[styles.inputChild, styles.inputLayout]}
                          contentFit="cover"
                          source={require("../assets/rectangle-41.png")}
                        />
                        <Text
                          style={[
                            styles.scoreSimulation,
                            styles.scoreSimulationTypo,
                          ]}
                        >
                          Score Simulation
                        </Text>
                        <View style={styles.bxsdownArrow} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={[styles.frameContainer, styles.framePosition]}>
                  <View style={[styles.frame2, styles.frameShadowBox1]}>
                    <View style={[styles.card2, styles.cardShadowBox]} />
                    <Text
                      style={[styles.progressionTest, styles.remarkPosition]}
                    >
                      Progression Test
                    </Text>
                    <Text style={[styles.text1, styles.text1Layout]}>90</Text>
                  </View>
                  <View style={[styles.frame3, styles.frameShadowBox]}>
                    <View style={[styles.card3, styles.cardShadowBox]} />
                    <Text style={[styles.presentation, styles.remarkPosition]}>
                      Presentation
                    </Text>
                    <Text style={[styles.text1, styles.text1Layout]}>90</Text>
                  </View>
                </View>
                <View style={[styles.groupView, styles.framePosition]}>
                  <View style={[styles.frame4, styles.frameShadowBox1]}>
                    <View style={[styles.card4, styles.cardShadowBox]} />
                    <Text
                      style={[styles.subjectIntegration, styles.text1Layout]}
                    >
                      Subject Integration
                    </Text>
                    <Text style={[styles.text1, styles.text1Layout]}>90</Text>
                  </View>
                  <View style={[styles.frame5, styles.frameShadowBox]}>
                    <View style={[styles.card5, styles.cardShadowBox]} />
                    <Text style={[styles.presentation, styles.remarkPosition]}>
                      Mock Test
                    </Text>
                    <Text style={[styles.text1, styles.text1Layout]}>90</Text>
                  </View>
                </View>
                <View style={[styles.frameParent1, styles.framePosition]}>
                  <View style={[styles.frame6, styles.frameShadowBox1]}>
                    <View style={[styles.card6, styles.cardShadowBox]} />
                    <Text style={[styles.presentation, styles.remarkPosition]}>
                      Booklet
                    </Text>
                    <Text style={[styles.text1, styles.text1Layout]}>90</Text>
                  </View>
                  <View style={[styles.frame7, styles.frameShadowBox]}>
                    <View style={[styles.card7, styles.cardShadowBox]} />
                    <Text style={[styles.presentation, styles.remarkPosition]}>
                      Presentation
                    </Text>
                    <Text style={[styles.text1, styles.text1Layout]}>90</Text>
                  </View>
                </View>
                <View style={[styles.frame8, styles.frameShadowBox2]}>
                  <View style={[styles.card8, styles.cardShadowBox]} />
                  <Text style={[styles.remark, styles.remarkPosition]}>
                    Remark
                  </Text>
                  <Text
                    style={[styles.loremIpsumDolor, styles.scoreSimulationTypo]}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                </View>
              </View>
            </ScrollView>
            <View style={styles.weeklyReportWrapper}>
              <Text style={[styles.weeklyReport, styles.remarkTypo]}>
                Term Assessment
              </Text>
            </View>

            <Text style={[styles.semester1, styles.semester1Typo]}>
              Semester 1
            </Text>
            <Text style={[styles.academicYear20232024, styles.semester1Typo]}>
              Academic Year 2023/2024
            </Text>
          </View>
          <Text style={[styles.finalScore, styles.textTypo]}>Final Score</Text>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
  },
  parentLayout: {
    height: "100%",
    width: "100%",
  },
  bookletFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameLayout: {
    width: 156,
    left: "51%",
  },
  cardPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  cardShadowBox: {
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    top: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  bookletTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
  },
  framePosition1: {
    bottom: "1.61%",
    height: "98.39%",
  },
  remarkPosition: {
    top: "11.48%",
    height: "37.7%",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  inputLayout: {
    height: 36,
    width: 129,
    position: "absolute",
  },
  scoreSimulationTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  framePosition: {
    width: 331,
    left: "52%",
    position: "absolute",
  },
  frameShadowBox1: {
    width: 152,
    marginLeft: -165.5,
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    bottom: "0%",
    left: "50%",
    position: "absolute",
  },
  text1Layout: {
    height: "37.7%",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  frameShadowBox: {
    marginLeft: 13.5,
    width: 152,
    top: "0%",
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    left: "50%",
    position: "absolute",
  },
  frameShadowBox2: {
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
  },
  remarkTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  semester1Typo: {
    fontSize: FontSize.bodyBodyXS_size,
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
  mathematic: {
    top: "13.46%",
    left: "8.67%",
    fontSize: 24,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    top: "8.98%",
    left: "77.46%",
    fontSize: 48,
  },
  card: {
    backgroundColor: Color.colorWhite,
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
  },
  booklet: {
    height: "38.65%",
    top: "11.76%",
    fontFamily: FontFamily.poppinsRegular,
    left: "19.69%",
    width: "59.06%",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  cardParent: {
    bottom: "2.44%",
    height: "97.56%",
    top: "0%",
    position: "absolute",
  },
  frame: {
    marginLeft: -169.5,
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    bottom: "0%",
    top: "1.61%",
    height: "98.39%",
  },
  card1: {
    marginLeft: -78.16,
    backgroundColor: Color.colorWhite,
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    bottom: "2.44%",
    height: "97.56%",
    width: 156,
    left: "50%",
  },
  presentation: {
    fontFamily: FontFamily.poppinsRegular,
    left: "22%",
    width: "59.06%",
    color: Color.colorBlack,
    top: "11.48%",
  },
  inputChild: {
    borderRadius: 79,
    top: 0,
    left: 0,
  },
  scoreSimulation: {
    marginLeft: -44.5,
    top: 8,
    color: Color.colorDimgray,
    width: 88,
    height: 16,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    left: "50%",
  },
  bxsdownArrow: {
    marginTop: -4.41,
    top: "50%",
    left: 117,
    width: 5,
    height: 11,
    position: "absolute",
    overflow: "hidden",
  },
  input: {
    top: 0,
    left: 2,
  },
  inputWrapper: {
    top: 38,
    left: 13,
  },
  frame1: {
    marginLeft: 13.83,
    top: "0%",
    width: 156,
    left: "50%",
    shadowOpacity: 1,
    elevation: 0.99,
    shadowRadius: 0.99,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
  },
  frameGroup: {
    height: "22.07%",
    top: "53.79%",
    bottom: "24.14%",
    width: 339,
    marginLeft: -169,
    left: "42%",
    position: "absolute",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  card2: {
    backgroundColor: Color.colorWhite,
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "2.44%",
    height: "97.56%",
  },
  progressionTest: {
    marginLeft: -69,
    width: 138,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    color: Color.colorBlack,
    top: "11.48%",
  },
  text1: {
    top: "36.07%",
    left: "20.39%",
    fontSize: FontSize.size_xl,
    width: "59.06%",
    height: "37.7%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frame2: {
    top: "1.61%",
    height: "98.39%",
  },
  card3: {
    backgroundColor: Color.colorWhite,
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "2.44%",
    height: "97.56%",
  },
  frame3: {
    bottom: "1.61%",
    height: "98.39%",
  },
  frameContainer: {
    top: "35.86%",
    bottom: "49.89%",
    marginLeft: -200,
    width: 331,
    height: "14.25%",
  },
  card4: {
    backgroundColor: Color.colorWhite,
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "2.44%",
    height: "97.56%",
  },
  subjectIntegration: {
    marginLeft: -78,
    top: "9.84%",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    width: 156,
    left: "50%",
  },
  frame4: {
    top: "0%",
    height: "100%",
  },
  card5: {
    backgroundColor: Color.colorWhite,
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "2.44%",
    height: "97.56%",
  },
  frame5: {
    bottom: "0%",
    height: "100%",
  },
  groupView: {
    height: "14.02%",
    top: "17.93%",
    bottom: "68.05%",
    marginLeft: -200,
    width: 331,
  },
  card6: {
    backgroundColor: Color.colorWhite,
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "2.44%",
    height: "97.56%",
  },
  frame6: {
    top: "1.61%",
    height: "98.39%",
  },
  card7: {
    backgroundColor: Color.colorWhite,
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "2.44%",
    height: "97.56%",
  },
  frame7: {
    bottom: "1.61%",
    height: "98.39%",
  },
  frameParent1: {
    bottom: "85.75%",
    height: "14.25%",
    top: "0%",
    marginLeft: -200,
  },
  card8: {
    backgroundColor: "#5eb449",
    elevation: 29.56,
    shadowRadius: 29.56,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 10,
    left: "0%",
    bottom: "2.44%",
    right: "0%",
    height: "97.56%",
    width: "100%",
  },
  remark: {
    color: Color.colorWhite,
    left: "18%",
    width: "59.06%",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  loremIpsumDolor: {
    height: "57.32%",
    width: "96.93%",
    top: "40.24%",
    left: "1.53%",
    color: "#fffefe",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frame8: {
    height: "18.85%",
    top: "81.15%",
    width: 326,
    bottom: "0%",
    marginLeft: -200,
    left: "52%",
  },
  groupParent: {
    height: "78.1%",
    marginLeft: -159,
    top: "29.26%",
    bottom: "-7.36%",
    width: "100%",
    left: "50%",
    position: "absolute",
  },
  weeklyReport: {
    alignSelf: "stretch",
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    color: Color.colorMidnightblue,
    textAlign: "left",
  },
  weeklyReportWrapper: {
    marginLeft: -68,
    top: -1,
    left: "50%",
    position: "absolute",
  },
  inputContainer: {
    top: 440,
    left: 28,
  },
  semester1: {
    top: 104,
    left: 24,
    width: 79,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  academicYear20232024: {
    top: 62,
    left: 30,
    color: Color.colorGray_200,
    width: 202,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  ictwotoneArrowBackParent: {
    top: 3,
    left: 0,
    position: "absolute",
  },
  finalScore: {
    top: "19.39%",
    left: "70.81%",
    fontSize: FontSize.size_lg,
  },
  detailNew: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 800,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_26xl,
    overflow: "hidden",
  },
});

export default DetailOfSubjectAssesment;
