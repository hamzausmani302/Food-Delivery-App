import React from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../Components/HeaderBar";
import Restaurant from "../Components/Restaurant";

function HomeScreenContent({ navigation }) {
  const DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const renderItem = (item) => {
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
          renderItem={renderItem}
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
