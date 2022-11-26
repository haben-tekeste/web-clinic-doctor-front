import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Text, Button } from "@rneui/themed";
import Spacer from "./Spacer";
import { useDispatch, useSelector } from "react-redux";
import {
  Entypo,
  AntDesign,
  Fontisto,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { signIn,signUp,clearError } from "../Actions/AuthActions";

export default ({
  navigation,
  navigate,
  sign,
  header,
  subHeader,
  goto,
  type,
  errorMessage,
}) => {
  const data = useSelector(state => state.user)
  // console.log(data)
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");
  const [speciality, setSpeciality] = useState("");
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      console.log(result)
      setImage(result.assets[0]);
    }
  };

  const submitHandler = () => {
    
    if (type === "sign-up") {
      if (!name || !password || !email || !key || !image || !speciality) return;
      dispatch(signUp({ name, email, password, key, image, speciality }));
    } else {
      if (!email || !password) return;
      dispatch(signIn({ email, password }));
      
    }
    
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={CredentialsStyle.container}>
          {show ? (
            <Image
              source={require("../Images/decoration.png")}
              style={CredentialsStyle.image}
            />
          ) : (
            <Image
              source={require("../Images/decoration.png")}
              style={CredentialsStyle.image}
              blurRadius={25}
            />
          )}

          <Text style={CredentialsStyle.headerStyle}>{header}</Text>

          {subHeader ? (
            <Text style={CredentialsStyle.subHeaderStyle}>{subHeader}</Text>
          ) : null}

          <Spacer />
          <Spacer />
          <Spacer />

          {type === "sign-up" ? (
            <View>
              <View style={CredentialsStyle.inputViewStyle}>
                <AntDesign name="idcard" size={30} color="#AEAEAE" />
                <TextInput
                  placeholder="Enter Your Name"
                  style={CredentialsStyle.inputStyle}
                  value={name}
                  onChangeText={setName}
                  onFocus={() => {
                    setShow(false);
                  }}
                  onEndEditing={() => {
                    setShow(true);
                  }}
                />
              </View>
              <Spacer />
              <Spacer />
              <View style={CredentialsStyle.inputViewStyle}>
                <Fontisto name="doctor" size={30} color="#AEAEAE" />
                <TextInput
                  placeholder="Enter Your Speciality"
                  style={CredentialsStyle.inputStyle}
                  value={speciality}
                  onChangeText={setSpeciality}
                  onFocus={() => {
                    setShow(false);
                  }}
                  onEndEditing={() => {
                    setShow(true);
                  }}
                />
              </View>
              <Spacer />
              <Spacer />
              <View style={CredentialsStyle.inputViewStyle}>
                <Octicons name="number" size={30} color="#AEAEAE" />
                <TextInput
                  placeholder="Enter Your Hospital ID"
                  style={CredentialsStyle.inputStyle}
                  value={key}
                  onChangeText={setKey}
                  onFocus={() => {
                    setShow(false);
                  }}
                  onEndEditing={() => {
                    setShow(true);
                  }}
                />
              </View>
              <Spacer />
              <Spacer />
            </View>
          ) : null}

          <View style={CredentialsStyle.inputViewStyle}>
            <Entypo name="mail" size={30} color="#AEAEAE" />
            <TextInput
              autoCapitalize="none"
              autoComplete="false"
              placeholder="Enter Your Email"
              keyboardType="email-adress"
              style={CredentialsStyle.inputStyle}
              value={email}
              onChangeText={setEmail}
              onFocus={() => {
                setShow(false);
              }}
              onEndEditing={() => {
                setShow(true);
              }}
            />
          </View>
          <Spacer />
          <Spacer />
          <View style={CredentialsStyle.inputViewStyle}>
            <Entypo name="lock" size={30} color="#AEAEAE" />
            <TextInput
              placeholder="Enter Your Password"
              secureTextEntry
              style={CredentialsStyle.inputStyle}
              value={password}
              onChangeText={setPassword}
              onFocus={() => {
                setShow(false);
              }}
              onEndEditing={() => {
                setShow(true);
              }}
            />
          </View>
          <Spacer />
          <Spacer />
          {type === "sign-up" && (
            <View style={CredentialsStyle.inputViewStyle}>
              {image ? (
                <TouchableOpacity onPress={() => setImage(null)}>
                  <Image
                    source={{ uri: image.uri }}
                    style={{
                      width: 100,
                      height: 100,
                      marginTop: 10,
                      alignSelf: "center",
                      borderWidth: 2,
                      borderColor: "#d2a4ee",
                      borderRadius: 15,
                      marginHorizontal: 100,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={pickImage}>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      marginTop: 5,
                      marginHorizontal: 100,
                      alignSelf: "center",
                      justifyContent: "center",
                      borderWidth: 4,
                      borderColor: "#b46ce2",
                      borderRadius: 15,
                    }}
                  >
                    <MaterialCommunityIcons
                      name={"plus"}
                      size={20}
                      color="lightgrey"
                      style={{ alignSelf: "center" }}
                    />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          )}
          <Spacer />
          <Spacer />
          <Spacer />
          <View
            style={{
              paddingLeft: 150,
            }}
          >
            <Button
              style={CredentialsStyle.signBtnStyle}
              color="#9600F1"
              radius="md"
              onPress={submitHandler}
            >
              Sign {sign}
              <AntDesign
                name="arrowright"
                size={30}
                color="white"
                style={{ marginHorizontal: 20 }}
              />
            </Button>
          </View>
          {data?.error ? (
            <Text style={CredentialsStyle.errorMessage}>{data?.error}</Text>
          ) : null}
          <Spacer />
          <Spacer />

          <TouchableOpacity
            style={{ paddingLeft: 50 }}
            onPress={() =>{
              dispatch(clearError())
              navigation.navigate(navigate)
            } }
          >
            <Text style={{ color: "#AEAEAE", fontSize: 15 }}>
              Don't have an account?
              <Text style={{ color: "#65288A", fontWeight: "bold" }}>
                Sign{goto}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const CredentialsStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
    backgroundColor: "#F7EEFF",
  },
  image: {
    position: "absolute",
    top: -10,
    right: -75,
    height: 250,
    width: 250,
    rotation: 8,
  },
  headerStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  subHeaderStyle: {
    color: "#AEAEAE",
    fontSize: 15,
    fontWeight: "bold",
  },
  inputStyle: {
    borderColor: "#65288A",
    alignItems: "center",
    color: "#65288A",
    borderWidth: 1,
    borderColor: "#AEAEAE",
    borderRadius: 5,
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginLeft: 10,
  },
  inputViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 15,
  },
  signBtnStyle: {
    borderRadius: 50,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
    textAlign:'center'
  }
});
