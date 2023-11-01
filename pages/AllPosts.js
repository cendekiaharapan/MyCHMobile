import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";
import PostH from "../components/PostH";
import Post1 from "../components/Post1";
import { VStack } from "native-base";

const AllPost = () => {
  const navigation = useNavigation();
  return (
    <NativeBaseProvider theme={theme}>
      <View style={[styles.allPost, styles.allFlexBox1]}>
        <View style={[styles.content, styles.allFlexBox1]}>
          <View style={[styles.hero, styles.allFlexBox1]}>
            <View style={[styles.backiconParent, styles.allFlexBox1]}>
              <Pressable
                style={styles.backicon}
                onPress={() => navigation.navigate("SignIn")}
              >
                <Image
                  style={[styles.icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/images/backicon2.png")}
                />
              </Pressable>
              <View style={[styles.postWrapper, styles.allFlexBox1]}>
                <Text style={[styles.post, styles.postTypo]}>Post</Text>
              </View>
            </View>
            <View>
              <PostH />
            </View>
            <VStack space={4} alignItems="center">
              <View>
                <Post1 />
                <Post1 />
                <Post1 />
                <Post1 />
              </View>
            </VStack>
            ;
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  allFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  postTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorMidnightblue,
  },
  posthtimePosition: {
    color: Color.white,
    left: 12,
    position: "absolute",
    textAlign: "left",
  },
  posthtittleTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  allframesFlexBox: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  post1timeTypo: {
    color: Color.black20,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  post1tittleTypo: {
    left: 0,
    top: 104,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  iconLayout: {
    height: 96,
    borderRadius: Border.br_5xs,
  },
  post3timeSpaceBlock: {
    marginTop: 9,
    textAlign: "left",
  },
  icon: {
    height: "100%",
  },
  backicon: {
    width: 24,
    height: 24,
  },
  post: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorMidnightblue,
    flex: 1,
  },
  postWrapper: {
    flexDirection: "row",
    flex: 1,
  },
  backiconParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  posthimgIcon: {
    maxWidth: "100%",
    height: 200,
    zIndex: 0,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  posthtime: {
    top: 169,
    fontSize: FontSize.size_5xs,
    lineHeight: 12,
    width: 126,
    zIndex: 1,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.white,
    left: 12,
    position: "absolute",
  },
  posthtittle: {
    top: 127,
    width: 287,
    zIndex: 2,
    textAlign: "left",
    color: Color.white,
    left: 12,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  allFlexBox: {
    marginTop: 16,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  hero: {
    height: 246,
    alignSelf: "stretch",
  },
  latestpost: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorMidnightblue,
  },
  post1time: {
    width: 85,
    left: 1,
    top: 177,
    color: Color.black20,
    fontSize: FontSize.size_6xs,
    textAlign: "left",
    position: "absolute",
  },
  post1tittle: {
    width: 143,
  },
  post1imgIcon: {
    top: 0,
    height: 96,
    left: 0,
    position: "absolute",
    width: 143,
  },
  post1: {
    height: 194,
    width: 143,
  },
  post2time: {
    width: 123,
    left: 1,
    top: 177,
    color: Color.black20,
    fontSize: FontSize.size_6xs,
    textAlign: "left",
    position: "absolute",
  },
  post2tittle: {
    width: 142,
  },
  post2imgIcon: {
    width: 142,
    top: 0,
    height: 96,
    left: 0,
    position: "absolute",
  },
  post2: {
    marginLeft: 20,
    height: 194,
    flex: 1,
  },
  post1Parent: {
    width: 305,
    flexDirection: "row",
  },
  post3imgIcon: {
    width: 143,
  },
  post3tittle: {
    width: 143,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorMidnightblue,
  },
  post3time: {
    width: 134,
    color: Color.black20,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  post4imgIcon: {
    width: 142,
  },
  post4tittle: {
    width: 142,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorMidnightblue,
  },
  post4time: {
    width: 89,
    color: Color.black20,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  post4: {
    marginLeft: 20,
  },
  post3Parent: {
    marginLeft: 30,
    flexDirection: "row",
  },
  frameParent: {
    flex: 1,
  },
  allframes: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  all1: {
    alignSelf: "stretch",
  },
  content: {
    flex: 1,
  },
  allPost: {
    backgroundColor: Color.colorGray_100,
    height: 800,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 40,
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default AllPost;
