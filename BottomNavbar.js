import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//screens
import HomeScreen from "./pages/DashboardParent";
import Profile from "./pages/Profile";
import Apps from "./pages/AppsList";

//screen names
const homeName = "Home";
const appsName = "Apps";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === appsName) {
            iconName = focused ? "apps" : "apps-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "grey",
        labelStyle: {
          fontSize: 10,
        },
        style: { padding: 10, heigh: 70 },
      }}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={appsName}
        component={Apps}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={profileName}
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
