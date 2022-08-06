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
import { changeCart, addItem , addUser } from "../actions/CartChange";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Toast from "react-native-toast-message";
import DOMAIN from "../DOMAIN";


function HomeScreenContent({ navigation ,cart,User,addUser} ) {
  
  console.log("cart",cart);

  let [user , setUser] = useState({});
  const [restaurants , setRestaurants] = useState([]);
  const retrieveUser =async  ()=>{
      const _userStr = await AsyncStorage.getItem("user");
      
      const _user = JSON.parse(_userStr)
      console.log("_user" , _user)
      setUser(_user);

    }

  const fetchRestaurants = async ()=>{
    fetch(`${DOMAIN()}/restaurants/all`)
    .then(data=>data.json())
    .then(data=>{setRestaurants(data)})
    .catch(err=>{
      console.log(err.message);
    })
  }  
  const DATA = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  useEffect(
    async ()=>{
      
      await retrieveUser();
      addUser(user)
      // console.log("user",user.user);
      if(user.user){
        setTimeout(()=>{
          Toast.show({
            type: 'success',
            text1: `Hello ${user.user.firstName.toUpperCase()},`,
            text2: 'Lets order something',
            position : "bottom"
          });
  
        },1000)
      }
      
      await fetchRestaurants();
      
    },[]
  )
  const renderItem1 = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          
          navigation.navigate("SingleRestaurant" , {
            rest : item
          });
        }}
        style={{width :250, height: 200 }}
      >
        <Restaurant info={item}/>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      
      <Toast />
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
          data={restaurants}
          renderItem={renderItem1}
          keyExtractor={(item) => item._id}
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


const mapStateToProps = (state)=>{
    const  {cart ,user} = state;
    return {cart : cart ,User : user};
}


const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({addUser} , dispatch);
}


export default connect(mapStateToProps , mapDispatchToProps)(HomeScreenContent);
