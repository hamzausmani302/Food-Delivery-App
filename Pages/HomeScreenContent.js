import React, { useEffect, useState } from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  AsyncStorage
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../Components/HeaderBar";
import Restaurant from "../Components/Restaurant";




function HomeScreenContent({ navigation }) {
  let [user , setUser] = useState({});
  const retrieveUser =async  ()=>{
      const _userStr = await AsyncStorage.getItem("user");
      const _user = JSON.parse(_userStr)

      setUser(_user);
    }
  const DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  useEffect(
    async ()=>{
      await retrieveUser();
      console.log(user.contactNumber);
    },[]
  )
  const renderItem1 = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SingleRestaurant");
        }}
        style={{ height: 200 }}
      >
        <Restaurant />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headercontainer}>
        <Header
          cartClick={() => {
            navigation.navigate("Cart");
          }}
          openDrawer={() => {
            navigation.openDrawer();
          }}
        />
      </View>
      <View>
        <Text>Your Restaurants</Text>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={renderItem1}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headercontainer: {
    flex: 1,
    marginTop: 50,
    maxHeight: 150,
  },
});
export default HomeScreenContent;
