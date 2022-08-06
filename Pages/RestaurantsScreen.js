import React from "react";
import { FlatList, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../Components/HeaderBar";
import Restaurant from "../Components/Restaurant";
const H70 = "70%";

export default function RestaurantsScreen({ navigation }) {
  const DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const renderItem1 = () => {
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
      <View style={{ maxHeight: H70 }}>
        <Text>Your Restaurants</Text>
        <FlatList
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
