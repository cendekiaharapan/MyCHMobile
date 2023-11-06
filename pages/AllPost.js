import React, { useState, useEffect } from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const AllPost = () => {
  const navigation = useNavigation();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "https://www.balichildrenshouse.com/myCH/api/all_post";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPostData(data); // Store the retrieved data in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
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
                source={require("../assets/backicon2.png")}
              />
            </Pressable>
            <View style={[styles.postWrapper, styles.allFlexBox1]}>
              <Text style={[styles.post, styles.postTypo]}>Post</Text>
            </View>
          </View>
          <Pressable
            style={styles.allFlexBox}
            onPress={() => navigation.navigate("PostDetails")}
          >
            <Image
              style={styles.posthimgIcon}
              contentFit="cover"
              source={require("../assets/posthimg.png")}
            />
            <Text style={[styles.posthtime, styles.posthtimePosition]}>
              28, Sep 2023 at 12:21 pm
            </Text>
            <Text style={[styles.posthtittle, styles.posthtittleTypo]}>
              Massa tortor nibh nulla condimentum imperdiet scelerisque...
            </Text>
          </Pressable>
        </View>
        <View style={styles.allFlexBox}>
          <View style={[styles.all1, styles.allFlexBox1]}>
            <Text style={[styles.latestpost, styles.postTypo]}>
              Latest Post
            </Text>
            <View style={[styles.allframes, styles.allframesFlexBox]}>
              <View style={[styles.frameParent, styles.allframesFlexBox]}>
                <View style={styles.post1Parent}>
                  <Pressable
                    style={styles.post1}
                    onPress={() => navigation.navigate("PostDetails")}
                  >
                    <Text style={[styles.post1time, styles.post1timeTypo]}>
                      28, Sep 2023 at 12:21 pm
                    </Text>
                    <Text style={[styles.post1tittle, styles.post1tittleTypo]}>
                      News Title Lorems Ipsum Dolor Sit Amet
                    </Text>
                    <Image
                      style={[styles.post1imgIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/post1img.png")}
                    />
                  </Pressable>
                  <View style={styles.post2}>
                    <Text style={[styles.post2time, styles.post1timeTypo]}>
                      28, Sep 2023 at 12:21 pm
                    </Text>
                    <Text style={[styles.post2tittle, styles.post1tittleTypo]}>
                      News Title Lorem Ipsum Dolor Sit Amet
                    </Text>
                    <Image
                      style={[styles.post2imgIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/post2img.png")}
                    />
                  </View>
                </View>
                <View style={styles.post3Parent}>
                  <View>
                    <Image
                      style={[styles.post3imgIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/post3img.png")}
                    />
                    <Text
                      style={[styles.post3tittle, styles.post3timeSpaceBlock]}
                    >
                      News Title Lorem Ipsum Dolor Sit Amet
                    </Text>
                    <Text
                      style={[styles.post3time, styles.post3timeSpaceBlock]}
                    >
                      28, Sep 2023 at 12:21 pm
                    </Text>
                  </View>
                  <View style={styles.post4}>
                    <Image
                      style={[styles.post4imgIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/post4img.png")}
                    />
                    <Text
                      style={[styles.post4tittle, styles.post3timeSpaceBlock]}
                    >
                      News Title Lorem Ipsum Dolor Sit Amet
                    </Text>
                    <Text
                      style={[styles.post4time, styles.post3timeSpaceBlock]}
                    >
                      28, Sep 2023 at 12:21 pm
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
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
