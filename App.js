import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrameScreen from "./pages/FrameScreen";
import LoginScreen from "./pages/Login";
import ChildPermissionAddPermis from "./pages/ChildPermissionAddPermis";
import ChildPermissionHistory from "./pages/ChildPermissionHistorys";
import MessageToTeacherHistory from "./pages/MessageToTeacherHistory";
import MessageToTeacherViewHis from "./pages/MessageToTeacherViewHis";
import MessageToTeacherSendMes from "./pages/MessageToTeacherSendMes";
import ChildPermissionViewHisto from "./pages/ChildPermissionViewHisto";
import ContactDashboard from "./screens/ContactDashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
        <Stack.Screen
          name="ContactDashboard"
          component={ContactDashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChildPermissionAddPermis"
          component={ChildPermissionAddPermis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChildPermissionViewHisto"
          component={ChildPermissionViewHisto}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChildPermissionHistorys"
          component={ChildPermissionHistorys}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageToTeacherSendMes"
          component={MessageToTeacherSendMes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageToTeacherViewHis"
          component={MessageToTeacherViewHis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MessageToTeacherHistory"
          component={MessageToTeacherHistory}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export default App;
