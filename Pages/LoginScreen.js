import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import tw from "tailwind-react-native-classnames";
import Logo from "../assets/Images/loginlogo.jpg";
import Toast from "react-native-toast-message";
const FullWidth = "100%";
const Width80 = "80%";

const DOMAIN="http://192.168.1.109:5110";

export default function LoginScreen({ navigation }) {
  const windowHeight = Dimensions.get("window").height;
  const [phone, setphone] = useState("");
  const [borderphone, setborderphone] = useState(false);
  const [password, setpassword] = useState("");
  const [borderpassword, setborderpassword] = useState(false);

  const [keyboardStatus, setKeyboardStatus] = useState(false);


  const storeAsync = async (data)=>{
    try{
      const str = JSON.stringify(data);
      await AsyncStorage.setItem("user",str);
      console.log("set key")
    }catch(err){
      console.log("error setting key");
    }

  }

  const handleSubmit =async  (e) => {
      //send post request to backend server
      console.log(DOMAIN.concat("/users/login") , phone , password)
      fetch(DOMAIN.concat("/users/login") , {
        method : "POST",
        
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(
          {
              "contactNumber" : phone ,
              "password" : password
          }
        )
      } ).then(res=>{
        if(res.status == 404){
          throw new Error("error");
        }else{
        console.log("success");
        return res.json();
        }
      })
      .then(async (res)=>{
        Toast.show({
          type: 'success',
          text1: 'Hello',
          text2: 'This is some something 👋'
        });
        await storeAsync(res);
        navigation.navigate("Home");
        

      }).catch(err=>{
        Toast.show({
          type: 'error',
          text1: 'Sign in failed',
          text2: `Incorrect contact number or password`
        });
      })

      //check response

      //navigate if reponse

    
    // navigation.navigate("Home");
  };
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.imgDiv}>
          <Image source={Logo} />
        </View>
      </View>
      <Toast />
      <ScrollView
        style={{
          flex: 0.5,
          position: "relative",
          top: keyboardStatus ? 120 : 0,
          paddingBottom: 0,
          paddingTop: 30,
        }}
      >
        <View style={styles.paddedBox}>
          <TextInput
            style={[
              styles.inputBox,
              borderphone && {
                borderWidth: 2,
                borderColor: "rgba(248, 48, 48, 0.8)",
              },
            ]}
            onChangeText={(e)=>{setphone(e)}}
            value={phone}
            placeholder="enter phone number"
            keyboardType="number-pad"
            onFocus={() => {
              setborderphone(true);
            }}
            onBlur={() => {
              setborderphone(false);
            }}
          />
        </View>
        <View style={styles.paddedBox}>
          <TextInput
            style={[
              styles.inputBox,
              borderpassword && {
                borderWidth: 2,
                borderColor: "rgba(248, 48, 48, 0.8)",
              },
            ]}
            onChangeText={(e)=>{
              setpassword(e);
            }}
            value={password}
            placeholder="enter password"
            secure={true}
            onFocus={() => {
              setborderpassword(true);
            }}
            onBlur={() => {
              setborderpassword(false);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            handleSubmit();
          }}
          style={[
            {
              backgroundColor: "#F83030",
              opacity: "70%",
              color: "white",
              height: 40,
              //borderRadius: 10,
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 10,
              alignContent: "center",
              widht: 20,
            },
            tw`w-3/6`,
          ]}
        >
          <Text style={tw`text-white text-center font-bold`}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  paddedBox: {
    padding: 10,
    marginTop: 10,
  },

  container1: {
    flex: 0.5,
    // backgroundColor: "red",
    alignItems: "center",
  },
  imgDiv: {
    // backgroundColor: "red",
    position: "absolute",
    justifyContent: "center",
    top: 100,
    flex: 0.5,
  },
  inputBox: {
    width: FullWidth,
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    opacity: 0.5,
    height: 60,
    padding: 15,
  },
  CredView: {},
});
