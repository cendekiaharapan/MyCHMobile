import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import FrameScreen from "./pages/FrameScreen";
import LoginScreen from "./pages/Login"; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Pressable, TouchableOpacity } from "react-native";
//Payment Invoice
import PaymentInvoice from "./pages/PaymentInvoice";
import PaymentInvoiceDetailsPaid from "./pages/PaymentInvoiceDetailsPaid";
import PaymentInvoiceDetails from "./pages/PaymentInvoiceDetails";
import PaymentInvoiceHistory from "./pages/PaymentInvoiceHistory";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
//end of Payment Invoice

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

//Payment Invoice
<>
<NavigationContainer>
  {hideSplashScreen ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="PaymentInvoice"
        component={PaymentInvoice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentInvoiceDetailsPaid"
        component={PaymentInvoiceDetailsPaid}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentInvoiceDetails"
        component={PaymentInvoiceDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentInvoiceHistory"
        component={PaymentInvoiceHistory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : null}
</NavigationContainer>
</>
//end of Payment Invoice
  );

};


const Stack = createNativeStackNavigator();


export default App;

