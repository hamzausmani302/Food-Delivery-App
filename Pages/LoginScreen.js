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
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Logo from "../assets/Images/loginlogo.jpg";
const FullWidth = "100%";
const Width80 = "80%";

export default function LoginScreen({ navigation }) {
  const windowHeight = Dimensions.get("window").height;
  const [phone, setphone] = useState("");
  const [borderphone, setborderphone] = useState(false);
  const [password, setpassword] = useState("");
  const [borderpassword, setborderpassword] = useState(false);

  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const handleSubmit = () => {
    console.log("navigating");
    navigation.navigate("Home");
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
            onChangeText={phone}
            value={setphone}
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
            onChangeText={password}
            value={setpassword}
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
