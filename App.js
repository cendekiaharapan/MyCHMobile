import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrameScreen from "./pages/FrameScreen";
import LoginScreen from "./pages/Login"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Pressable, TouchableOpacity } from "react-native";
//Payment CH Dollars
import PaymentCHDAccount from "./pages/PaymentCHDAccount";
import PaymentHistory from "./pages/PaymentHistory";
import PaymentTopup from "./pages/PaymentTopup";
import Toast from "react-native-toast-message";
//end of Payment CH Dollars

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
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

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FrameScreen" component={FrameScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    //Payment CH Dollars
    <>
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="PaymentCHDAccount"
            component={PaymentCHDAccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentHistory"
            component={PaymentHistory}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentTopup"
            component={PaymentTopup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>

    <Toast ref={(ref) => Toast.setRef(ref)} />

    {/* Your Toast component */}
    <Toast
      ref={(ref) => Toast.setRef(ref)}
      text1=""
      text1Style={{ fontSize: 15 }}
      text2Style={{ fontSize: 13 }}
    />
 
  </>
  //end of Payment CH Dollars


  );

};


const Stack = createNativeStackNavigator();


export default App;

