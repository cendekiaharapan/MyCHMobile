import * as React from "react";
import React, { forwardRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrameScreen from "./pages/FrameScreen";
import LoginScreen from "./pages/Login"; 
import CallMyChild from "./pages/CallMyChild";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message"; 

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "SpaceGrotesk-Regular": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CallMyChild"
          screenOptions={{ headerShown: false }}
        >
      
          <Stack.Screen
            name="CallMyChild"
            component={CallMyChild}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FrameScreen" component={FrameScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

      <Toast ref={(ref) => Toast.setRef(ref)} />

      {/* Your Toast component */}
      <Toast
        ref={(ref) => Toast.setRef(ref)}
        text1="Successfully, call your child!"
        text1Style={{ fontSize: 15 }}
        text2Style={{ fontSize: 13 }}
      />
    </>
  );
};

export default App;