import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RestaurantsScreen from "./RestaurantsScreen";
import HomeScreenContent from "./HomeScreenContent";
export default function HomeScreen({ route }) {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreenContent}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </Drawer.Navigator>
  );
}
