import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RestaurantsScreen from "./RestaurantsScreen";
import HomeScreenContent from "./HomeScreenContent";
import { changeCart, addItem } from "../actions/CartChange";
import { connect } from "react-redux";

function HomeScreen(props) {
  const Drawer = createDrawerNavigator();
  // console.log(props);
  return (
    <Drawer.Navigator initialRouteName="Home1">
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Home1"
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

const mapStateToProps = (state) => {
  const { cart , user } = state;
  return { cart , user };
};

export default connect(mapStateToProps)(HomeScreen);
