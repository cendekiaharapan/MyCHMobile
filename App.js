const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrameScreen from "./pages/FrameScreen";
import LoginScreen from "./pages/Login"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  });
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(true); // Initialize user login state

  const checkIfUserIsLoggedIn = async () => {
    try {
      const token = await getTokenFromSecureStore();
      console.log("this ");
      if (token) {
        // User is already logged in
        console.log("User Already Logged In!");
        setIsUserLoggedIn(true);
      } else {
        // User is not logged in
        setIsUserLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      // Handle any error accordingly
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  React.useEffect(() => {
    console.log("checking user log in!");
    checkIfUserIsLoggedIn();
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FrameScreen" component={FrameScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Stack = createNativeStackNavigator();


export default App;
