import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Pages/HomeScreen";
import LoginScreen from "./Pages/LoginScreen";
import RestaurantsScreen from "./Pages/RestaurantsScreen";
import SingleRestaurant from "./Pages/SingleRestaurant";
import CartScreen from "./Pages/CartScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="SingleRestaurant" component={SingleRestaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
