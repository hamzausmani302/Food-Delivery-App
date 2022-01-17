import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { Divider, Icon, Input } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
export default function CartScreen({ navigation }) {
  const placeOrder = () => {
    console.log("Placing Order");
  };
  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flex: 0.1 }}>
          <Input type="numeric" placeholder={`${item.quantity}`} />
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 60, height: 60, alignSelf: "center" }}
            source={require("../assets/Images/item.png")}
          />
        </View>
        <View
          style={{
            flex: 0.4,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", color: "#F83030" }}>
            {item.name}
          </Text>
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "flex-end", fontWeight: "800" }}>
            Rs. {item.price}.0
          </Text>
        </View>
      </View>
    );
  };
  const getTotal = (items) => {
    let sum = 0;
    for (let item of items) {
      sum += item.price;
    }

    return sum;
  };
  const [items, setitems] = useState([
    {
      id: 1,
      quantity: 1,
      image: "../assets/Images/item.png",
      name: "Premium Thin Pizza",
      price: 499,
    },
    {
      id: 2,
      quantity: 1,
      image: "../assets/Images/item.png",
      name: "Premium Thin Pizza",
      price: 499,
    },
    {
      id: 3,
      quantity: 1,
      image: "../assets/Images/item.png",
      name: "Premium Thin Pizza",
      price: 499,
    },
    {
      id: 4,
      quantity: 2,
      image: "../assets/Images/item.png",
      name: "Premium Thin Pizza",
      price: 499,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.IconBox}
      >
        <Text>
          <Icon size={40} name="close" type="evilicon" color="#F83030" />
        </Text>
      </Pressable>
      <View style={styles.DeliveryBox}>
        <View style={styles.paddedBox}>
          <View
            style={{
              flex: 0.3,
              justifyContent: "center",
            }}
          >
            <Image
              style={{ flex: 1, width: 80, height: 80, alignSelf: "center" }}
              resizeMode="cover"
              source={require("../assets/Images/rider.jpg")}
            />
          </View>
          <View style={{ flex: 0.7, justifyContent: "center" }}>
            <Text style={{ fontSize: 14 }}>Estimated Delivery</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              NOW (90 min)
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.ItemBox}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Divider inset={true} insetType="middle" />
      <View style={styles.TotalBox}>
        <Text
          style={{
            paddingLeft: 20,
            paddingVertical: 10,
            flex: 0.5,
            textAlign: "left",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Total
        </Text>
        <Text
          style={{
            flex: 0.5,
            paddingRight: 20,
            paddingVertical: 10,
            textAlign: "right",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Rs.{getTotal(items)}.00
        </Text>
      </View>
      <View style={styles.PlaceBox}>
        <Pressable
          onPress={placeOrder}
          style={{
            flex: 1,
            marginHorizontal: 4,
            marginVertical: 5,
            borderRadius: 5,
            backgroundColor: "#F83030",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            PLACE ORDER
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paddedBox: {
    flex: 1,
    margin: 10,
    padding: 3,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    flexDirection: "row",
    backgroundColor: "white",
  },
  IconBox: { flex: 0.1, backgroundColor: "white", marginTop: 30 },
  DeliveryBox: { flex: 0.2, backgroundColor: "white" },
  ItemBox: {
    flex: 0.7,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
  },
  TotalBox: { flex: 0.2, backgroundColor: "white", flexDirection: "row" },
  PlaceBox: { flex: 0.1 },
});
