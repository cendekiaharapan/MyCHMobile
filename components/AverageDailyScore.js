import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AverageDailyScore = ({ onClose }) => {
  return (
    <View style={styles.averageDailyScore}>
      <View style={styles.frame}>
        <View style={styles.mensah}>
          <Text style={[styles.mintaDonor, styles.mintaTypo1]}>
            AVERAGE DAILY SCORE
          </Text>
        </View>
        <View style={[styles.mensah1, styles.frame1FlexBox]}>
          <Image
            style={styles.mensahChild}
            contentFit="cover"
            source={require("../assets/images/frame-876.png")}
          />
          <Text style={[styles.mintaDonor1, styles.mintaTypo1]}>
            AVERAGE DAILY SCORE
          </Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.frame1FlexBox]}>
        <View style={styles.maskGroup}>
          <View style={styles.image1} />
        </View>
        <View style={[styles.frame2, styles.framePosition2]}>
          <Image
            style={styles.frameChildLayout1}
            contentFit="cover"
            source={require("../assets/images/rectangle-3671.png")}
          />
        </View>
        <View style={[styles.frame3, styles.framePosition1]}>
          <View style={[styles.frameItem, styles.frameChildLayout]} />
        </View>
        <View style={[styles.frame4, styles.framePosition1]}>
          <View style={[styles.frameInner, styles.frameChildLayout1]} />
        </View>
        <View style={[styles.frame5, styles.framePosition]}>
          <Text style={styles.mintaDonor2}>Science</Text>
        </View>
        <View style={[styles.frame6, styles.framePosition1]}>
          <View style={[styles.rectangleView, styles.frameChildLayout]} />
        </View>
        <View style={[styles.frame7, styles.framePosition]}>
          <Text style={styles.mintaDonor2}>Mathematics</Text>
        </View>
        <View style={[styles.frame8, styles.framePosition1]}>
          <View style={[styles.frameChild1, styles.frameChildLayout]} />
        </View>
        <View style={[styles.frame9, styles.framePosition]}>
          <Text style={styles.mintaDonor2}>Agama Kristen - Katolik</Text>
        </View>
        <View style={[styles.frame10, styles.framePosition]}>
          <Text style={[styles.mintaDonor5, styles.mintaTypo]}>Computing</Text>
        </View>
        <View style={[styles.frame11, styles.framePosition]}>
          <Text style={[styles.mintaDonor5, styles.mintaTypo]}>
            Bahasa Indonesia
          </Text>
        </View>
        <View style={[styles.frame12, styles.framePosition2]}>
          <Image
            style={styles.frameChildLayout1}
            contentFit="cover"
            source={require("../assets/images/rectangle-371.png")}
          />
        </View>
        <View style={[styles.frame13, styles.framePosition1]}>
          <View style={[styles.frameChild2, styles.frameChildLayout]} />
        </View>
        <View style={[styles.frame14, styles.framePosition1]}>
          <View style={[styles.frameChild3, styles.frameChildLayout1]} />
        </View>
        <View style={[styles.frame15, styles.framePosition]}>
          <Text style={styles.mintaDonor2}>Physical Health and Education</Text>
        </View>
        <View style={[styles.frame16, styles.framePosition1]}>
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
        </View>
        <View style={[styles.frame17, styles.framePosition]}>
          <Text style={styles.mintaDonor2}>Maker Hours</Text>
        </View>
        <View style={[styles.frame18, styles.framePosition]}>
          <Text style={[styles.mintaDonor5, styles.mintaTypo]}>English</Text>
        </View>
        <View style={[styles.frame19, styles.framePosition]}>
          <Text style={[styles.mintaDonor10, styles.mintaTypo]}>
            Pendidikan Pancasila dan Kewarganegaraan
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mintaTypo1: {
    textAlign: "center",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
  },
  frame1FlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  framePosition2: {
    left: 29,
    position: "absolute",
    overflow: "hidden",
  },
  framePosition1: {
    justifyContent: "center",
    left: 29,
    position: "absolute",
    overflow: "hidden",
  },
  frameChildLayout: {
    height: 18,
    width: 40,
  },
  frameChildLayout1: {
    height: 17,
    width: 40,
  },
  framePosition: {
    left: 77,
    justifyContent: "center",
    position: "absolute",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  mintaTypo: {
    height: 14,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
  },
  mintaDonor: {
    fontSize: FontSize.size_xl,
    width: 235,
    height: 20,
  },
  mensah: {
    width: 346,
    height: 212,
    justifyContent: "flex-end",
    paddingHorizontal: 54,
    paddingVertical: 21,
    alignItems: "flex-end",
    shadowOpacity: 1,
    elevation: 35.6,
    shadowRadius: 35.6,
    shadowOffset: {
      width: 0,
      height: 5.93411922454834,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 12,
  },
  mensahChild: {
    width: "100%",
    flex: 1,
    overflow: "hidden",
    alignSelf: "stretch",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  mintaDonor1: {
    fontSize: FontSize.size_mini,
  },
  mensah1: {
    paddingLeft: 56,
    paddingTop: 29,
    paddingRight: 55,
    paddingBottom: 29,
    marginTop: -212,
    shadowOpacity: 1,
    elevation: 35.6,
    shadowRadius: 35.6,
    shadowOffset: {
      width: 0,
      height: 5.93411922454834,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
  },
  frame: {
    height: 213,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  image1: {
    width: 241,
    height: 157,
  },
  maskGroup: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    paddingHorizontal: 50,
    paddingVertical: 34,
    position: "absolute",
    width: "100%",
    shadowOpacity: 1,
    elevation: 35.6,
    shadowRadius: 35.6,
    shadowOffset: {
      width: 0,
      height: 5.93411922454834,
    },
    shadowColor: "rgba(0, 0, 0, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: 12,
  },
  frame2: {
    top: 77,
  },
  frameItem: {
    backgroundColor: "#fdb064",
  },
  frame3: {
    top: 55,
  },
  frameInner: {
    backgroundColor: "#fd809a",
  },
  frame4: {
    top: 34,
  },
  mintaDonor2: {
    height: 12,
    width: 233,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 0,
  },
  frame5: {
    top: 58,
  },
  rectangleView: {
    backgroundColor: "#5cb2ed",
  },
  frame6: {
    top: 120,
  },
  frame7: {
    top: 123,
    width: 233,
  },
  frameChild1: {
    backgroundColor: "#6dcaca",
  },
  frame8: {
    top: 98,
  },
  frame9: {
    top: 101,
    width: 233,
  },
  mintaDonor5: {
    width: 233,
  },
  frame10: {
    top: 79,
  },
  frame11: {
    top: 35,
  },
  frame12: {
    top: 185,
  },
  frameChild2: {
    backgroundColor: "#d1d3d6",
  },
  frame13: {
    top: 163,
  },
  frameChild3: {
    backgroundColor: "#ab82fd",
  },
  frame14: {
    top: 142,
  },
  frame15: {
    top: 166,
    width: 233,
  },
  frameChild4: {
    backgroundColor: "#555769",
  },
  frame16: {
    top: 206,
  },
  frame17: {
    top: 209,
    width: 233,
  },
  frame18: {
    top: 187,
    width: 233,
  },
  mintaDonor10: {
    width: 240,
  },
  frame19: {
    top: 143,
    width: 240,
  },
  frame1: {
    marginTop: 28,
    overflow: "hidden",
  },
  averageDailyScore: {
    height: 500,
    paddingBottom: 1,
    maxHeight: "100%",
    maxWidth: "100%",
    alignItems: "center",
  },
});

export default AverageDailyScore;
