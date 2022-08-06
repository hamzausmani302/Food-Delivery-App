import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import { changeCart, addItem } from "../actions/CartChange";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
let width20 = "20%";
let width40 = "40%";
let width80 = "80%";
function HeaderBar(props) {
  const [search, setsearch] = useState("");
  const address = "Malir 15 , jokio village";
 
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={{ flex: 1, paddingTop: 10 }}
          onPress={props.openDrawer}
        >
          <Icon
            width={70}
            name="bars"
            type="font-awesome"
            color="rgba(248, 48, 48, 0.71)"
          />
        </TouchableOpacity>

        <View style={{ flexDirection: "column", flex: 1 }}>
          <Text style={[styles.headertext, tw`font-bold`]}>Home</Text>
          <Text style={[styles.headertext, { fontSize: 12, color: "black" }]}>
            {address}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.addItem({ id: 4 });
          }}
          style={{ flex: 1, paddingTop: 10 }}
        >
          <Icon
            width={70}
            name="star"
            type="font-awesome"
            color="rgba(248, 48, 48, 0.71)"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.cartClick}
          style={{ flex: 1, paddingTop: 10 }}
        >
          <Icon
            width={70}
            name="cart-plus"
            type="font-awesome"
            color="rgba(248, 48, 48, 0.71)"
          />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={{
            padding: 10,
            margin: 20,
            marginTop: 10,
            borderRadius: 20,
            backgroundColor: "rgba(196, 196, 196, 0.20)",
          }}
          onChangeText={setsearch}
          value={search}
          placeholder="Search restaurants"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: "#C4C4C4",
    flexDirection: "column",
  },
  container1: {
    flex: 1,
    flexDirection: "row",
  },
  headertext: {
    color: "rgba(248, 48, 48, 0.71)",
    flex: 1,
    fontSize: 15,
  },
});
const mapStateToProps = (state) => {
  const { cart } = state;
  return { cart };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addItem }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
