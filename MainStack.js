import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboard from "./pages/Onboard";
import AllPost from "./pages/AllPost";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import PopUp from "./components/PopUp";
import CHDollar from "./components/CHDollar";
import Attendance from "./components/Attendance";
import AverageDailyScore from "./components/AverageDailyScore";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
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
    </Stack.Navigator>
  );
};

export default MainStack;
