import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon, Input, NativeBaseProvider, ScrollView } from "native-base";
import { Image } from "expo-image";
import { FontFamily, Padding, FontSize, Color, Border } from "../GlobalStyles";
import ContactList from "../components/ContactDashboard/ContactList";
import { useNavigation } from "@react-navigation/native";

const Contact = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
      <View style={styles.contact}>
        <View style={[styles.herocontainerParent, styles.herocontainerLayout]}>
          <View style={[styles.herocontainer, styles.herocontainerLayout]}>
            <Text style={[styles.contacts, styles.searchPosition]}>
              Contacts
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("MessageToTeacherSendMes")}
            >
              <Image
                style={[styles.buttonhistoryIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/buttonhistory.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.searchcontainer, styles.herocontainerLayout]}>
            <View style={[styles.search, styles.searchShadowBox]}>
              <View style={[styles.content, styles.contentFlexBox]}>
                <View style={styles.magnifyingglass}>
                  <Image
                    style={styles.heroiconsmagnifyingGlassSol}
                    contentFit="cover"
                    source={require("../assets/heroiconsmagnifyingglasssolid.png")}
                  />
                  <Text
                    style={[
                      styles.magnifyingglass1,
                      styles.navbarcontainerFlexBox,
                    ]}
                  ></Text>
                </View>
                <Input
                  style={styles.placeholderLabel}
                  placeholder="Search"
                  variant="unstyled"
                />
              </View>
            </View>
          </View>
          <View style={[styles.bodycontainer, styles.herocontainerLayout]}>
            <ScrollView contentContainerStyle={styles.bodycontainerInner}>
              <ContactList />
              <ContactList />
              <ContactList />
              <ContactList />
              <ContactList />
              <ContactList />
              <ContactList />
              <ContactList />
              <ContactList />
              <ContactList />
              <ContactList />
            </ScrollView>
          </View>
          <View style={[styles.navbarcontainer, styles.navbarcontainerFlexBox]}>
            <View style={styles.homeWrapper}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/home.png")}
              />
            </View>
            <View style={[styles.mdiwomanChildWrapper, styles.wrapperFlexBox]}>
              <Image
                style={[styles.mdiwomanChildIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/mdiwomanchild.png")}
              />
            </View>
            <View
              style={[
                styles.materialSymbolscontactPageParent,
                styles.wrapperFlexBox,
              ]}
            >
              <Image
                style={[styles.mdiwomanChildIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/materialsymbolscontactpage.png")}
              />
              <Text style={[styles.contact1, styles.ibuSekarTypo]}>
                Contact
              </Text>
            </View>
            <View style={[styles.biuiChecksGridWrapper, styles.wrapperFlexBox]}>
              <Image
                style={[styles.biuiChecksGridIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/biuichecksgrid.png")}
              />
            </View>
            <View style={[styles.biuiChecksGridWrapper, styles.wrapperFlexBox]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/vuesaxlinearprofile1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  herocontainerLayout: {
    width: 390,
    overflow: "hidden",
  },
  searchPosition: {
    left: "50%",
    top: "50%",
    marginTop: -15,
    position: "absolute",
  },
  iconLayout1: {
    height: 26,
    overflow: "hidden",
  },
  searchShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0.06415519118309021,
    },
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  navbarcontainerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameChildPosition: {
    height: 114,
    width: 336,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ibuSekarTypo: {
    fontFamily: FontFamily.headingMd20,
    fontWeight: "700",
    textAlign: "left",
  },
  grade1MatTypo: {
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  wrapperFlexBox: {
    marginLeft: 12,
    padding: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  contacts: {
    marginLeft: -47,
    fontSize: FontSize.headingMd20_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#11336d",
    width: 94,
    textAlign: "left",
  },
  buttonhistoryIcon: {
    width: "7.41%",
    top: 41,
    right: "11.01%",
    left: "81.58%",
    maxWidth: "100%",
    position: "absolute",
  },
  herocontainer: {
    top: 30,
    height: 108,
  },
  heroiconsmagnifyingGlassSol: {
    height: 17,
    left: 0,
    top: 0,
    width: 18,
    position: "absolute",
    overflow: "hidden",
  },
  magnifyingglass1: {
    height: "100%",
    top: "0%",
    left: "0%",
    fontSize: 12,
    lineHeight: 32,
    textAlign: "center",
    display: "flex",
    color: Color.labelColorsLCLSecondary,
    fontFamily: FontFamily.textMediumSm14,
    fontWeight: "500",
    position: "absolute",
    width: "100%",
  },
  magnifyingglass: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  placeholderLabel: {
    fontSize: 11,
    letterSpacing: 0,
    lineHeight: 14,
    fontFamily: FontFamily.robotoRegular,
    marginLeft: 15.4,
    color: Color.labelColorsLCLSecondary,
    textAlign: "left",
    flex: 1,
  },
  content: {
    borderRadius: 1,
    width: 332,
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    height: 31,
  },
  search: {
    marginLeft: -167,
    borderRadius: 99999,
    borderWidth: 1,
    borderColor: "#d4d4d4",
    // shadowColor: "rgba(0, 0, 0, 0.1)",
    // shadowRadius: 0.19,
    // elevation: 0.19,
    width: 333,
    height: 31,
    left: "50%",
    top: "50%",
    marginTop: -15,
    position: "absolute",
    overflow: "hidden",
  },
  searchcontainer: {
    height: 70,
  },
  frameChild: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#d4d4d4",
    backgroundColor: Color.systemBackgroundsSBLPrimary,
  },
  frameItem: {
    width: 88,
    height: 102,
    borderRadius: 5,
  },
  ibuSekar: {
    fontSize: 14,
    color: "#222b45",
    width: 213,
  },
  grade1Mat: {
    fontSize: 9,
    color: "rgba(0, 0, 0, 0.5)",
    marginTop: 10,
    textAlign: "left",
  },
  bxsmessageIcon: {
    marginTop: 10,
    overflow: "hidden",
  },
  ibuSekarParent: {
    marginLeft: 24,
  },
  rectangleGroup: {
    top: 9,
    left: 10,
    position: "absolute",
  },
  bodycontainerInner: {
    marginLeft: -168,
    width: 336,
    top: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  bodycontainer: {
    height: 550,
  },
  homeWrapper: {
    padding: Padding.p_xs,
    borderRadius: Border.br_xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  mdiwomanChildIcon: {
    width: 26,
  },
  mdiwomanChildWrapper: {
    borderRadius: Border.br_xs,
    marginLeft: 12,
  },
  contact1: {
    fontSize: FontSize.textRegularSm14_size,
    color: Color.colorTomato,
    marginLeft: 8,
  },
  materialSymbolscontactPageParent: {
    backgroundColor: Color.colorGray_400,
    borderRadius: Border.br_xs,
    marginLeft: 12,
  },
  biuiChecksGridIcon: {
    overflow: "hidden",
  },
  biuiChecksGridWrapper: {
    flex: 1,
  },
  navbarcontainer: {
    width: 391,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.systemBackgroundsSBLPrimary,
    flexDirection: "row",
  },
  herocontainerParent: {
    height: 844,
  },
  contact: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flexDirection: "row",
    overflow: "hidden",
    height: 844,
    width: "100%",
    flex: 1,
  },
});

export default Contact;
