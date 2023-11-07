import React from "react";
import { NativeBaseProvider, Box, AspectRatio, Image, Center, Stack, Heading, Text, HStack } from "native-base";
import { StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

export default function Coba() {
    return (
      <NativeBaseProvider>
        <Box alignItems="center">
          <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
          }} _web={{
            shadow: 2,
            borderWidth: 0
          }} _light={{
            backgroundColor: "gray.50"
          }}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                }} alt="image" />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1" style={[styles.loremIpsumDolor, styles.loremFlexBox]}>
                  The Garden City
                </Heading>
              </Stack>
              <Text fontWeight="400" fontFamily="poppinsRegular">
                Bengaluru (also called Bangalore) is the center of India's high-tech
                industry. The city is also known for its parks and nightlife.
              </Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }} fontWeight="400">
                    6 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
  loremFlexBox: {
    textAlign: "justify",
    lineHeight: 23,
    letterSpacing: 0,
  },
  loremIpsumDolor: {
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.black,
    width: 328,
  },
});