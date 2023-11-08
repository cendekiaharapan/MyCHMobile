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
import PageStart from "./pages/PageStart";
import TopUpForm from "./components/TopUpForm";
import PaidInvoiceDetails from "./pages/PaidInvoiceDetails";
import PaymentInvoiceDetails from "./pages/PaymentInvoiceDetails";
import PaidInvoiceHistory from "./pages/PaidInvoiceHistory";
import PaymentInvoice from "./pages/PaymentInvoice";
import PaymentTopup from "./pages/PaymentTopup";
import PaymentCHDHistory from "./pages/PaymentCHDHistory";
import PaymentCHDAccount from "./pages/PaymentCHDAccount";

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

<>
<NavigationContainer>
 
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PageStart"
        component={PageStart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaidInvoiceDetails"
        component={PaidInvoiceDetails}
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
        name="PaymentInvoice"
        component={PaymentInvoice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentTopup"
        component={PaymentTopup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentCHDHistory"
        component={PaymentCHDHistory}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentCHDAccount"
        component={PaymentCHDAccount}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

</NavigationContainer>
</>

  );

};


const Stack = createNativeStackNavigator();


export default App;

