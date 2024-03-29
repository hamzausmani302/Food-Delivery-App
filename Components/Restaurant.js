import React from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import Pizza from "../assets/Images/pizza.jpg";
const FullWidth = "100%";
const Width70 = "70%";
const path = "../assets/Images/pizza.jpg";
export default function Restaurant(props) {
  const {restName,address,rating,cuisines } = props.info.item;
  console.log("rest",restName , props.info.index);

  // console.log(props.info)
  return (
    <View style={styles.container}>
      <Text
        style={{
          position: "absolute",
          zIndex: 1,
          top: 20,
          padding: 5,
          backgroundColor: "rgba(248, 48, 48, 0.7)",
        }}
      >
        Celebration Deal
      </Text>
      <Image style={styles.productImage} source={require(path)} />
      <Text style={styles.productTitle}>{restName || "Broadway Pizza - Malir Cantt"}</Text>
      <Text style={styles.productCuisine}>{cuisines || "Italian,Pizza and Deserts"}</Text>
      <Text style={styles.deliveryCharge}>PKR 59 delivery fee</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  productImage: {
    width: FullWidth,
    height: Width70,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  productCuisine: {
    fontSize: 12,
    fontWeight: "100",
  },
  deliveryCharge: {
    fontWeight: "100",
  },
});
