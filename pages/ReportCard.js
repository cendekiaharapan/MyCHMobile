import * as React from 'react';
import { Image, Linking } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button, NativeBaseProvider, Box, Select, Center } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { FontFamily, Color, FontSize, Padding, Border } from '../GlobalStyles';

const ReportCard = () => {
  const reportCardUrl = 'https://example.com/report-card-url'; // Replace with your desired URL
  const [selectedSession, setSelectedSession] = React.useState("Academic Year 2023/2024");
  const [selectedSemester, setSelectedSemester] = React.useState("Semester 1");

  const handleViewReportCard = () => {
    Linking.openURL(reportCardUrl); // Use Linking here
  };

  return (
    <NativeBaseProvider>
      <View style={styles.reportCard}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require('../assets/frame.png')}
            />
            <View style={styles.reportCardWrapper}>
              <Text style={styles.reportCard1}>Report Card</Text>
            </View>
          </View>
        </View>
        <View style={styles.frame2}>
          <LinearGradient
            style={styles.menu}
            locations={[0, 1]}
            colors={['#fff', 'rgba(255, 255, 255, 0)']}
          >
            <View style={styles.frame3}>
              <View style={styles.selectSessionParent}>
                <Text style={styles.selectSession}>Select Session</Text>
                <Center> {/* Center the Select in Session */}
                  <Select
                    selectedValue={selectedSession}
                    minWidth="275"
                    accessibilityLabel="Choose Session"
                    placeholder="Choose Session"
                    onValueChange={(itemValue) => setSelectedSession(itemValue)}
                  >
                    <Select.Item label="Academic Year 2023/2024" value="Academic Year 2023/2024" />
                    <Select.Item label="Academic Year 2024/2025" value="Academic Year 2024/2025" />
                    {/* Add other session options here */}
                  </Select>
                </Center>
              </View>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require('../assets/vector-8.png')}
              />
            </View>
            <View style={styles.selectSemesterParent}>
              <Text style={styles.selectSession}>Select Semester</Text>
              <Center> {/* Center the Select in Semester */}
                <Select
                  selectedValue={selectedSemester}
                  minWidth="275"
                  accessibilityLabel="Choose Semester"
                  placeholder="Choose Semester"
                  onValueChange={(itemValue) => setSelectedSemester(itemValue)}
                >
                  <Select.Item label="Semester 1" value="Semester 1" />
                  <Select.Item label="Semester 2" value="Semester 2" />
                  {/* Add other semester options here */}
                </Select>
              </Center>
            </View>
            <View style={styles.buttonCariTiket}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Button
                  style={{
                    ...styles.viewReportCard,
                    backgroundColor: Color.colorTomato,
                    width: 200,
                    height: 40,
                  }}
                  onPress={handleViewReportCard}
                >
                  <Text style={{ color: Color.colorWhite }}>VIEW REPORT CARD</Text>
                </Button>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "relative",
    width: 24,
    height: 31,
    overflow: "hidden",
  },
  reportCard1: {
    position: "relative",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorMidnightblue,
    textAlign: "center",
    width: 136,
  },
  reportCardWrapper: {
    height: 25,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 70,
  },
  frame1: {
    width: 231,
    height: 31,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: 93,
  },
  frame: {
    width: 360,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  selectSession: {
    position: "relative",
    fontSize: 9,
    letterSpacing: -0.2,
    lineHeight: 9,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.blue2,
    textAlign: "left",
  },
  academicYear20232024: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    textAlign: "left",
    width: 191,
    height: 30,
  },
  input: {
    borderRadius: 79,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 285,
    height: 40,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  bxsdownArrowIcon: {
    position: "relative",
    width: 12,
    height: 12,
    overflow: "hidden",
    marginLeft: -12,
  },
  frame4: {
    width: 285,
    height: 40,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 13,
  },
  selectSessionParent: {
    width: 285,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
  },
  frameChild: {
    position: "relative",
    width: 287,
    height: 0,
  },
  frame3: {
    width: 287,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingBottom: 0,
  },
  inputParent: {
    width: 285,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 0,
    marginTop: 4,
  },
  selectSemesterParent: {
    width: 285,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
  },
  viewReportCard: {
    position: "relative",
    fontSize: 11,
    lineHeight: 9,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  buttonCariTiket: {
    borderRadius: 50,
    backgroundColor: Color.colorTomato,
    width: 182,
    height: 37,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },  
  menu: {
    borderRadius: 7,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 317,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingTop: Padding.p_xl,
    paddingRight: 15,
    paddingBottom: Padding.p_xl,
    backgroundColor: "transparent",
  },
  frame2: {
    width: 324,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 62,
  },
  reportCard: {
    position: "relative",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xl,
  },
});

export default ReportCard;