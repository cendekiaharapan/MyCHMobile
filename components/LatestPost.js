import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const LatestPost = ({ post, onPress }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.postContainer} onPress={() => onPress(post)}>
      <Image
        style={styles.postImage}
        source={{
          uri:
            "https://www.balichildrenshouse.com/myCH/ev-assets/uploads/post-images/" +
            post.image,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postDate}>{post.created_at}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: "35%", // 48% dari lebar layar
    aspectRatio: 1, // untuk menjaga rasio gambar menjadi kotak
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50, // memberi jarak di sekitar komponen
  },
  postImage: {
    width: "89%",
    height: "90%",
    borderRadius: Border.br_5xs,
  },
  postTitle: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "400",
    color: Color.colorMidnightblue,
  },
  postDate: {
    fontSize: FontSize.size_6xs,
    color: Color.black20,
  },
  textContainer: {
    width: "89%",
    height: "80%",
  },
});

export default LatestPost;
