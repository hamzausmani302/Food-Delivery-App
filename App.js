import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Pages/HomeScreen";
import LoginScreen from "./Pages/LoginScreen";
import RestaurantsScreen from "./Pages/RestaurantsScreen";
import SingleRestaurant from "./Pages/SingleRestaurant";
import CartScreen from "./Pages/CartScreen";
import { Provider } from "react-redux";
import { createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
function App(props) {
  const Stack = createNativeStackNavigator();
  const store = createStore(cartReducer);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen
            name="RestaurantsScreen"
            component={RestaurantsScreen}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="SingleRestaurant" component={SingleRestaurant} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
