import React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import tw from "tailwind-react-native-classnames";
import I from "../assets/Images/item.png";
import { changeCart, addItem } from "../actions/CartChange";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


function ItemDisplay(props) {
  console.log("p",props);
  const {itemName,description,price , image } = props.ITEM.item;
  const {restInfo} = props;
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={tw`font-bold pl-2.5 pt-2`}>{itemName}</Text>
        <Text style={tw`font-light pl-2.5`}>
          {description}
        </Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={tw`font-bold mt-2  pl-2.5`}>from Rs {price}.00</Text>
          <Pressable
            style={styles.addToCart}
            onPress={() => {
              console.log("added to cart");
              
              props.ADDITEM({"item" : props.ITEM.item  , "rest" : restInfo._id});

            }}
          >
            <Text style={{ color: "white", fontWeight: "800" }}>
              Add to Cart
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image resizeMode="center" style={styles.image} source={{uri:image }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(196, 196, 196, 0.4)",
    padding: 1,
  },
  infoContainer: {
    flex: 0.6,
    backgroundColor: "white",
    flexDirection: "column",
  },
  addToCart: {
    backgroundColor: "rgba(248, 48, 48, 0.8)",
    height: 30,
    paddingHorizontal: 6,

    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    //justifyContent: "center",
  },
  imageContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 20,
  },
});
// const mapStateToProps = (state) => {
//   const { cart } = state;
//   return { cart };
// };
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ addItem }, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(ItemDisplay);
export default ItemDisplay;