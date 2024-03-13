import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Test from "./test";
const Tab = createMaterialTopTabNavigator();
import {
  FontAwesome6,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";

export default function ProfileTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarActiveTintColor: "black", // Set the active color here
          tabBarIndicatorStyle: { backgroundColor: "black" },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Test}
          options={{
            tabBarLabel: "",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="grid" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Test}
          options={{
            tabBarLabel: "",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Foundation name="play-video" size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Test}
          options={{
            tabBarLabel: "",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome6
                name="person-through-window"
                size={22}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
