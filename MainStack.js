import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboard from "./pages/Onboard";
import AllPost from "./pages/AllPost";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import PopUp from "./components/PopUp";
import Attendance from "./components/Attendance";
import AverageDailyScore from "./components/AverageDailyScore";
import BottomNavbar from "./BottomNavbar";
import Apps from "./pages/AppsList";
import HomeParent from "./pages/HomeParent";

// Call My Child
import CallMyChild from "./pages/CallMyChild";

// CH Dollar
import CHDollar from "./components/CHDollar";
import PaymentCHDAccount from "./pages/PaymentCHDAccount";

// Payment
import PaymentInvoice from "./pages/PaymentInvoice";
import PaymentInvoiceDetails from "./pages/PaymentInvoiceDetails";
import PaidInvoiceHistory from "./pages/PaidInvoiceHistory";
import PaidInvoiceDetails from "./pages/PaidInvoiceDetails";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BottomNavbar"
        component={BottomNavbar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PopUp"
        component={PopUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentInvoice"
        component={PaymentInvoice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentCHDAccount"
        component={PaymentCHDAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentInvoiceDetails"
        component={PaymentInvoiceDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaidInvoiceHistory"
        component={PaidInvoiceHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaidInvoiceDetails"
        component={PaidInvoiceDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CallMyChild"
        component={CallMyChild}
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
