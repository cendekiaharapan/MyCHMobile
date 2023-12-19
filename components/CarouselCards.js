import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from "../components/CarouselCardItem";
import {
  storeItem,
  retrieveItem,
  deleteItem,
  getAllKeys,
  saveTokenToSecureStore,
  getTokenFromSecureStore,
  saveRespDataSecureStore,
  getRespDataFromSecureStore,
} from "../database/database";
import { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
// import data from '../data';

const CarouselCards = ({ navigation, postData }) => {
  const isCarousel = React.useRef(null);
  // const [postData, setPostData] = useState(null);
  const ImgUrl =
    "https://www.balichildrenshouse.com/myCH/ev-assets/uploads/post-images/";
  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log("this is inside carousel!");
  //     retrieveItem("postData")
  //       .then((data) => {
  //         if (data && data.length > 0) {
  //           setPostData(data);
  //           console.log("post data saved!", data);
  //         } else {
  //           console.log("No data found in SQLite.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching response data from SQLite:", error);
  //       });
  //     // Your code here that should run when the screen is focused

  //     return () => {
  //       console.log("Screen is unfocused");
  //       // Your cleanup code here (if needed)
  //     };
  //   }, [])
  // );

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    };

    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate.replace(/\:\d{2} [APap][Mm] UTC/, "").replace(",", "");
  };
  // console.log("sampai disini", navigation, postData);

  const data = postData ?
    postData.map((post) => ({
      title: post.title,
      body: post.body,
      image: post.image,
      created_at: post.created_at,
      imgUrl: ImgUrl + post.image,
      date: formatDate(post.updated_at),
    })) : [];
  
  const renderItemWithNavigation = ({ item, index }) => {
    return (
      <CarouselCardItem
        item={item}
        index={index}
        style={{}} // Your custom style or leave empty if none
        navigation={navigation} // Passing the navigation prop to CarouselCardItem
      />
    );
  };

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={renderItemWithNavigation}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  );
};

export default CarouselCards;
