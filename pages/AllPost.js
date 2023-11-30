import * as React from "react";

import { StyleSheet, Pressable, Text, View, Image, Dimensions, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding, LoadingIndicator } from "../GlobalStyles";
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';

function formatDateTime(dateTimeString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const date = new Date(dateTimeString);
  return date.toLocaleString('en-GB', options);
}

const AllPost = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // State to track loading
  const navigation = useNavigation();

  const handleBackButtonClick = () => {
    navigation.navigate("Main App Stack", {
      screen: "BottomNavbar", // change this with your screen name
    });
  };

  const SLIDER_WIDTH = Dimensions.get("window").width + 80;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

  const renderItem = ({ item, index }) => {
    return (
      <Pressable
        style={{top: '10%'}}
        onPress={() => navigation.navigate("PostDetails", { post: item })}
      >
        <Image
          style={styles.posthimgIcon}
          source={{ uri: `https://www.balichildrenshouse.com/myCH/ev-assets/uploads/post-images/${item.image}` }}
        />
        <View style={styles.overlay} />
        <Text style={[styles.posthtime, styles.posthtimePosition]}>
          {formatDateTime(item.created_at)}
        </Text>
        <Text style={[styles.posthtittle, styles.posthtittleTypo]}>
          {item.title}
        </Text>
      </Pressable>
    );
  };

  React.useEffect(() => {
    axios.get('https://www.balichildrenshouse.com/myCH/api/all-post')
      .then(response => {
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error(error)
      });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={LoadingIndicator}>
        <ActivityIndicator size="large" color="red" />
        <Text>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.allPost, styles.allFlexBox1]}>
      <View style={[styles.content, styles.allFlexBox1]}>
        <View style={[styles.hero, styles.allFlexBox1, {top: '28%'}]}>
          <View style={[styles.backiconParent, styles.allFlexBox1]}>
            <Pressable
              style={styles.backicon}
              onPress={handleBackButtonClick}
            >
              <Image
                style={[styles.icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/images/backicon2.png")}
              />
            </Pressable>
            <View style={[styles.postWrapper, styles.allFlexBox1]}>
              <Text style={[styles.post, styles.postTypo]}>Posts</Text>
            </View>
          </View>
          <Carousel
            data={posts.slice(0, 4)} // Taking the first 4 posts
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH} // Set the slider width
            itemWidth={ITEM_WIDTH} // Set the item width
          />
        </View>
        <View style={[styles.allFlexBox, {top: '28%'}]}>
          <View style={[styles.all1, styles.allFlexBox1]}>
            <Text style={[styles.latestpost, styles.postTypo]}>
              All Posts
            </Text>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.gridContainer}>
              {posts.map((post, index) => (
                <Pressable
                  key={post.id}
                  style={styles.gridItem}
                  onPress={() => navigation.navigate("PostDetails", { post: post })}
                >
                  <Image
                    style={styles.postImage}
                    source={{ uri: `https://www.balichildrenshouse.com/myCH/ev-assets/uploads/post-images/${post.image}` }}
                  />
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <Text style={styles.postDate}>
                    {formatDateTime(post.created_at)}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
            
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity as needed
  },
  scrollContainer: {
    // marginTop: '1'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridItem: {
    width: '45%', // Adjust the width as needed
    marginVertical: 8,
    // Add more styling for each grid item
  },
  postImage: {
    width: '100%', // Adjust as needed
    height: 150, // Adjust as needed
    borderRadius: 10, // Optional, for rounded corners
    // Add more styling for the image
  },
  postTitle: {
    // Styling for the post title
    fontSize: FontSize.size_sm,
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  postDate: {
    color: Color.black20,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.poppinsRegular,
  },
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
    height: 260,
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
    // alignSelf: "stretch",
  },
  content: {
    flex: 1,
  },
  allPost: {
    backgroundColor: Color.colorGray_100,
    height: '100%',
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 40,
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default AllPost;