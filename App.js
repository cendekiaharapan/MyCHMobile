const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboard from "./pages/Onboard";
import SignIn from "./pages/SignIn";
import PopUp from "./components/PopUp";
import CHDollar from "./components/CHDollar";
import Attendance from "./components/Attendance";
import AverageDailyScore from "./components/AverageDailyScore";
import PostDetails from "./pages/PostDetails";
import AllPost from "./pages/AllPost";
import Password from "./pages/Password";
import Coba from "./components/Coba";

// permission history
import ChildPermissionAddPermis from "./pages/ChildPermissionAddPermis";
import MessageToTeacherHistory from "./pages/MessageToTeacherHistory";
import MessageToTeacherViewHis from "./pages/MessageToTeacherViewHis";
import MessageToTeacherSendMes from "./pages/MessageToTeacherSendMes";
import ChildPermissionViewHisto from "./pages/ChildPermissionViewHisto";
import ChildPermissionHistorys from "./pages/ChildPermissionHistorys";

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
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="ChildPermissionViewHisto"
              component={ChildPermissionViewHisto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChildPermissionAddPermis"
              component={ChildPermissionAddPermis}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PopUp"
              component={PopUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CHDollar"
              component={CHDollar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Attendance"
              component={Attendance}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AverageDailyScore"
              component={AverageDailyScore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostDetails"
              component={PostDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllPost"
              component={AllPost}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Password"
              component={Password}
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
        ) : (
          <Onboard />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
