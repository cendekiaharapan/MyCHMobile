import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboard from "./pages/Onboard";
import AllPost from "./pages/AllPost";
import PaymentInvoice from "./pages/PaymentInvoice";
import PaidInvoiceHistory from "./pages/PaidInvoiceHistory";
import PostDetails from "./pages/PostDetails";
import Profile from "./pages/Profile";
import PopUp from "./components/PopUp";
import CHDollar from "./components/CHDollar";
import Attendance from "./components/Attendance";
import AverageDailyScore from "./components/AverageDailyScore";
import PageStart from "./pages/PageStart";
import PaidInvoiceDetails from "./pages/PaidInvoiceDetails";
import PaymentCHDAccount from "./pages/PaymentCHDAccount";
import PaymentCHDHistory from "./pages/PaymentCHDHistory";
import PaymentTopup from "./pages/PaymentTopup";
import PaymentInvoiceDetails from "./pages/PaymentInvoiceDetails";


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
        name="PaymentInvoice"
        component={PaymentInvoice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaidInvoiceHistory"
        component={PaidInvoiceHistory}
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
        name="PageStart"
        component={PageStart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentCHDAccount"
        component={PaymentCHDAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaidInvoiceDetails"
        component={PaidInvoiceDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentCHDHistory"
        component={PaymentCHDHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentInvoiceDetails"
        component={PaymentInvoiceDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentTopup"
        component={PaymentTopup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};



export default MainStack;
