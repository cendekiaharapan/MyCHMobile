import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Dimensions, Pressable, Modal, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import CarouselCards from "../components/CarouselCards";
import Carousel from "react-native-reanimated-carousel";
import Attendance from "../components/Attendance";
import AverageDailyScore from "../components/AverageDailyScore";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HomeStudent = () => {
  const [mensahContainerVisible, setMensahContainerVisible] = useState(false);
  const [mensahContainer1Visible, setMensahContainer1Visible] = useState(false);

  const openMensahContainer = useCallback(() => {
    setMensahContainerVisible(true);
  }, []);

  const closeMensahContainer = useCallback(() => {
    setMensahContainerVisible(false);
  }, []);

  const openMensahContainer1 = useCallback(() => {
    setMensahContainer1Visible(true);
  }, []);

  const closeMensahContainer1 = useCallback(() => {
    setMensahContainer1Visible(false);
  }, []);


  return (
    <>
      <View style={[styles.homeStudent, styles.homeStudentLayout]}>
        <View style={[styles.content, styles.contentFlexBox]}>
          <View style={styles.frame}>
            <View style={styles.frameParent}>
              <View style={styles.welcomeToMychWrapper}>
                <Text style={[styles.welcomeToMych, styles.textTypo3]}>
                  Welcome to MyCH!
                </Text>
              </View>
              <Image
                style={styles.emailIcon}
                contentFit="cover"
                source={require("../assets//email1.png")}
              />
              <Image
                style={styles.bellIcon}
                contentFit="cover"
                source={require("../assets//bell1.png")}
              />
            </View>
          </View>
          <View style={[styles.carouselFrame, styles.frameFlexBox1]}>
            <CarouselCards />
          </View>
          <View style={[styles.frame2, styles.frameFlexBox1]}>
            <View style={[styles.frameReport1, styles.frameFlexBox]}>
              <Pressable
                style={styles.mensahShadowBox1}
                onPress={openMensahContainer}
              >
                <View style={[styles.ellipseParent, styles.parentFlexBox]}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets//ellipse-92.png")}
                  />
                  <Text style={[styles.text, styles.textTypo3]}>100%</Text>
                </View>
                <Text style={styles.mintaDonor}>ATTENDANCE</Text>
              </Pressable>
              <Pressable
                style={[styles.mensah1, styles.mensahSpaceBlock]}
                onPress={openMensahContainer1}
              >
                <Image
                  style={[styles.mensahChild, styles.homeStudentLayout]}
                  contentFit="cover"
                  source={require("../assets//frame-8741.png")}
                />
                <Text style={styles.mintaDonor}>AVERAGE DAILY SCORE</Text>
              </Pressable>
            </View>
            <View style={[styles.frameReport2, styles.frameFlexBox]}>
              <View style={styles.mensahShadowBox}>
                <View style={[styles.frame3, styles.parentFlexBox]}>
                  <Image
                    style={styles.frameItem}
                    contentFit="cover"
                    source={require("../assets//frame-8941.png")}
                  />
                  <Text style={[styles.text1, styles.text1Clr]}>10</Text>
                </View>
                <Text style={styles.mintaDonor}>ATTENDANCE</Text>
              </View>
              <View style={[styles.mensah3, styles.mensahShadowBox]}>
                <View style={[styles.wed29Parent, styles.parentFlexBox]}>
                <Text style={styles.wedTypo}>{`Wed`}</Text>
                  <Text style={styles.text1Clr}>
                    <Text style={[styles.text2, styles.textTypo2]}>29</Text>
                  </Text>
                  <Text style={[styles.independenceDay, styles.wedTypo]}>
                    Independence Day
                  </Text>
                </View>
                <Text style={[styles.mintaDonor3, styles.wedTypo]}>
                  UPCOMING EVENTS
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame4, styles.frameFlexBox1]}>
            <View style={styles.frame5}>
              <View style={styles.bookletProgressParent}>
                <Text style={styles.bookletProgress}>Booklet Progress</Text>
                <View style={styles.progress}>
                  <View
                    style={[styles.progressChild, styles.progressPosition]}
                  />
                  <View
                    style={[styles.progressItem, styles.progressPosition]}
                  />
                  <Image
                    style={[styles.progressInner, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text3, styles.textTypo1]}>1</Text>
                  <Image
                    style={[styles.ellipseIcon, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text4, styles.textTypo]}>2</Text>
                  <Image
                    style={[styles.progressChild1, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text5, styles.textTypo1]}>10</Text>
                  <Image
                    style={[styles.progressChild2, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text6, styles.textTypo]}>9</Text>
                  <Image
                    style={[styles.progressChild3, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text7, styles.textTypo]}>8</Text>
                  <Image
                    style={[styles.progressChild4, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text8, styles.textTypo1]}>7</Text>
                  <Image
                    style={[styles.progressChild5, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text9, styles.textTypo]}>6</Text>
                  <Image
                    style={[styles.progressChild6, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text10, styles.textTypo]}>5</Text>
                  <Image
                    style={[styles.progressChild7, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text11, styles.textTypo1]}>4</Text>
                  <Image
                    style={[styles.progressChild8, styles.progressChildLayout]}
                    contentFit="cover"
                    source={require("../assets//ellipse-101.png")}
                  />
                  <Text style={[styles.text12, styles.textTypo]}>3</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameGroup, styles.contentFlexBox]}>
              <View style={[styles.homeParent, styles.homeParentFlexBox]}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets//home1.png")}
                />
                <Text style={styles.home}>Home</Text>
              </View>
              <View
                style={[styles.ionbookOutlineWrapper, styles.homeParentFlexBox]}
              >
                <Image
                  style={[styles.ionbookOutlineIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets//ionbookoutline.png")}
                />
              </View>
              <View
                style={[styles.ionbookOutlineWrapper, styles.homeParentFlexBox]}
              >
                <Image
                  style={[styles.ionbookOutlineIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets//biuichecksgrid1.png")}
                />
              </View>
              <View
                style={[styles.ionbookOutlineWrapper, styles.homeParentFlexBox]}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets//vuesaxlinearprofile2.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={mensahContainerVisible}>
        <View style={styles.mensahContainerOverlay}>
          <Pressable
            style={styles.mensahContainerBg}
            onPress={closeMensahContainer}
          />
          <Attendance onClose={closeMensahContainer} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={mensahContainer1Visible}>
        <View style={styles.mensahContainer1Overlay}>
          <Pressable
            style={styles.mensahContainer1Bg}
            onPress={closeMensahContainer1}
          />
          <AverageDailyScore onClose={closeMensahContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  homeStudentLayout: {
    width: "100%",
    flex: 1,
  },
  contentFlexBox: {
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  textTypo3: {
    color: Color.colorMidnightblue,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  frameFlexBox1: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  textTypo2: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frameFlexBox: {
    width: 331,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mensahSpaceBlock: {
    marginLeft: 14,
    justifyContent: "center",
  },
  text1Clr: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  mensahShadowBox: {
    height: 127,
    width: 156,
    paddingBottom: 10,
    paddingRight: 24,
    paddingTop: 10,
    paddingLeft: 25,
    shadowOpacity: 1,
    elevation: 35.6,
    shadowRadius: 35.6,
    shadowOffset: {
      width: 0,
      height: 5.93411922454834,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 12,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
  },
  wedTypo: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  progressPosition: {
    height: 8,
    top: 6,
    left: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  progressChildLayout: {
    width: 21,
    height: 20,
    top: 0,
    position: "absolute",
  },
  textTypo1: {
    color: Color.colorWhite,
    fontSize: FontSize.size_6xs,
    top: "26.25%",
    width: "2.92%",
    height: "50%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  textTypo: {
    width: "2.6%",
    color: Color.colorWhite,
    fontSize: FontSize.size_6xs,
    top: "26.25%",
    height: "50%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  homeParentFlexBox: {
    padding: Padding.p_xs,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  welcomeToMych: {
    lineHeight: 22,
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  welcomeToMychWrapper: {
    left: 27,
    width: 208,
    height: 45,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  emailIcon: {
    top: 10,
    left: 258,
    width: 27,
    height: 27,
    position: "absolute",
  },
  bellIcon: {
    top: 8,
    left: 290,
    width: 30,
    height: 30,
    position: "absolute",
  },
  frameParent: {
    width: 360,
    height: 33,
  },
  frame: {
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    width: 329,
    height: 175,
  },
  carouselMain: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_12xs,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  carouselMainWrapper: {
    height: 175,
    width: 329,
    justifyContent: "center",
  },
  carouselFrame: {
    flexDirection: "row",
    width: 329,
  },
  frame1: {
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  mensahContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mensahContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameChild: {
    borderRadius: Border.br_21xl,
    width: 60,
    height: 60,
    zIndex: 0,
  },
  text: {
    top: 40,
    left: 35,
    lineHeight: 15,
    zIndex: 1,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  ellipseParent: {
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  mintaDonor: {
    fontSize: 8,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorMidnightblue,
  },
  mensahShadowBox1: {
    paddingBottom: 10,
    paddingRight: 24,
    paddingTop: 10,
    paddingLeft: 25,
    height: 126,
    width: 154,
    shadowOpacity: 1,
    elevation: 35.6,
    shadowRadius: 35.6,
    shadowOffset: {
      width: 0,
      height: 5.93411922454834,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 12,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
  },
  mensahContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mensahContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mensahChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  mensah1: {
    paddingBottom: 10,
    paddingRight: 24,
    paddingTop: 10,
    paddingLeft: 25,
    height: 126,
    width: 154,
    shadowOpacity: 1,
    elevation: 35.6,
    shadowRadius: 35.6,
    shadowOffset: {
      width: 0,
      height: 5.93411922454834,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: 12,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
  },
  frameReport1: {
    height: 130,
  },
  frameItem: {
    height: 31,
    width: 25,
  },
  text1: {
    width: 25,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: 27,
    fontSize: FontSize.size_xl,
  },
  frame3: {
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    fontSize: FontSize.size_xl,
  },
  independenceDay: {
    marginTop: 9,
    color: Color.colorBlack,
    textAlign: "center",
  },
  wed29Parent: {
    paddingLeft: 10,
    paddingRight: 14,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  mintaDonor3: {
    letterSpacing: 0,
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.colorMidnightblue,
  },
  mensah3: {
    marginLeft: 14,
    justifyContent: "center",
  },
  frameReport2: {
    height: 135,
    marginTop: 14,
  },
  frame2: {
    width: 330,
    overflow: "hidden",
  },
  bookletProgress: {
    fontSize: FontSize.size_mini,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.colorDimgray_100,
    textAlign: "left",
  },
  progressChild: {
    backgroundColor: Color.colorAliceblue,
    width: 324,
    top: 6,
  },
  progressItem: {
    backgroundColor: Color.colorTomato,
    width: 149,
  },
  progressInner: {
    left: 0,
    width: 21,
  },
  text3: {
    left: "1.64%",
  },
  ellipseIcon: {
    left: 34,
  },
  text4: {
    left: "12.37%",
  },
  progressChild1: {
    left: 303,
  },
  text5: {
    left: "95.39%",
  },
  progressChild2: {
    left: 269,
  },
  text6: {
    left: "84.98%",
  },
  progressChild3: {
    left: 236,
  },
  text7: {
    left: "74.87%",
  },
  progressChild4: {
    left: 202,
  },
  text8: {
    left: "64.14%",
  },
  progressChild5: {
    left: 168,
  },
  text9: {
    left: "53.73%",
  },
  progressChild6: {
    left: 135,
  },
  text10: {
    left: "43.62%",
  },
  progressChild7: {
    left: 101,
  },
  text11: {
    left: "32.89%",
  },
  progressChild8: {
    left: 67,
  },
  text12: {
    left: "22.79%",
  },
  progress: {
    marginTop: 16,
    height: 20,
    width: 324,
  },
  bookletProgressParent: {
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_lg,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  frame5: {
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  home: {
    color: Color.colorTomato,
    marginLeft: 8,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  homeParent: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorGray_300,
  },
  ionbookOutlineIcon: {
    overflow: "hidden",
  },
  ionbookOutlineWrapper: {
    width: 59,
    marginLeft: 12,
    justifyContent: "center",
  },
  frameGroup: {
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    marginTop: 5,
    flexDirection: "row",
  },
  frame4: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  content: {
    alignItems: "center",
    flex: 1,
  },
  homeStudent: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    height: 800,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeStudent;
