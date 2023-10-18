import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PostDetails from "./pages/PostDetails";
import AllPost from "./pages/AllPost";
import Password from "./pages/Password";
import Onboard from "./pages/Onboard";
import SignIn from "./pages/SignIn";
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
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "SpaceGrotesk-Regular": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FrameScreen" component={FrameScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="PostDetails" component={PostDetails} options={{ headerShown: false }} />
        <Stack.Screen name="AllPost" component={AllPost} options={{ headerShown: false }} />
        <Stack.Screen name="Password" component={Password} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};


const Stack = createNativeStackNavigator();


export default App;

