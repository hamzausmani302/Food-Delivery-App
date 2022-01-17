import React from "react";
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import Item1 from "../Components/ItemDisplay.js";
import { changeCart, addItem } from "../actions/CartChange";
import { connect } from "react-redux";
const HALF = "50%";
const getArray = (rating) => {
  let arr = new Array(rating);

  for (let i = 0; i < rating; i++) {
    arr[i] = i + 1;
  }
  console.log(arr.length);
  return arr;
};

function SingleRestaurant({ cart, navigation }) {
  const restaurants = [
    { id: 1, name: "Broadway Pizza" },
    { id: 2, name: "Broadway Pizza" },
    { id: 3, name: "Broadway Pizza" },
    { id: 4, name: "Broadway Pizza" },
    { id: 5, name: "Broadway Pizza" },
    { id: 6, name: "Broadway Pizza" },
  ];

  const name = "Broadway Pizza - Malir Cantt";
  const distance = "2.3 km ";
  const stars = 4;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/Images/restaurant.jpg")}
        resizeMode="cover"
        style={styles.upperContainer}
      >
        <Pressable
          style={{
            position: "absolute",
            padding: 10,
            borderRadius: 40,
            top: 20,
            left: 10,
            backgroundColor: "white",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name="arrow-left" type="font-awesome" color="#F83030" />
        </Pressable>
      </ImageBackground>

      <View style={styles.nameContainer}>
        <Text style={[styles.title, tw`font-bold`]}>{name}</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={[styles.caption]}>{distance} | </Text>
          {getArray(stars).map((el, index) => {
            return (
              <Icon
                key={index}
                size={15}
                padding={5}
                name="star"
                type="font-awesome"
                color="#F83030"
              />
            );
          })}
        </View>
      </View>
      <View style={styles.ItemContainer}>
        <Text style={styles.titleText}>ITEMS</Text>
        <FlatList
          data={restaurants}
          renderItem={Item1}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
  container: {
    flex: 1,
    //backgroundColor: "#E5E5E5",
  },
  upperContainer: {
    flex: 0.2,
    backgroundColor: "red",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white",
  },
  title: {
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 10,
  },
  caption: {
    fontWeight: "500",
    paddingLeft: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderBottomEndRadius: 20,
  },
  nameContainer: { marginBottom: 6, flex: 0.1, backgroundColor: "white" },
  ItemContainer: { flex: 0.8, backgroundColor: "white" },
});
const mapStateToProps = (state) => {
  const { cart } = state;
  return { cart };
};
export default connect(mapStateToProps)(SingleRestaurant);
