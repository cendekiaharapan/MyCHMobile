import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrameScreen from "./pages/FrameScreen";
import LoginScreen from "./pages/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Report from "./pages/Report";
import DetailOfSubjectAssesment from "./pages/DetailOfSubjectAssesment";
import ListOfSubjectAssessment from "./pages/ListOfSubjectAssessment";
import Assessment from "./pages/Assessment";
import DetailReport from "./pages/DetailReport";
import ListOfReport from "./pages/ListOfReport";

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
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Assessment"
          component={Assessment}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ListOfReport"
          component={ListOfReport}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailReport"
          component={DetailReport}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ListOfSubjectAssessment"
          component={ListOfSubjectAssessment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailOfSubjectAssesment"
          component={DetailOfSubjectAssesment}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default App;
