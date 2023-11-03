const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ChildPermissionAddPermis from "./pages/ChildPermissionAddPermis";
0;
import MessageToTeacherHistory from "./pages/MessageToTeacherHistory";
import MessageToTeacherViewHis from "./pages/MessageToTeacherViewHis";
import MessageToTeacherSendMes from "./pages/MessageToTeacherSendMes";
import ChildPermissionViewHisto from "./pages/ChildPermissionViewHisto";
import ChildPermissionHistorys from "./pages/ChildPermissionHistorys";
0;
import ContactDashboard from "./pages/ContactDashboard";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="ChildPermissionHistorys"
                component={ChildPermissionHistorys}
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
                name="ContactDashboard"
                component={ContactDashboard}
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
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
