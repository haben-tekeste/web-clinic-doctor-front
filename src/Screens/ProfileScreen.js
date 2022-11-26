import React,{useEffect,useRef} from "react";
import { View, Text, StyleSheet } from "react-native";
import Avatar from "../Components/Account/Avatar";
import AccountOptions from "../Components/Account/AccountOptions";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native"

const Profile = ({navigation}) => {
  const animation = useRef(null)
  const {isLoading,profile} = useSelector(state => state.profile)

  if (isLoading){
   return( <View style={{flex:1, flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <LottieView
          autoPlay
          ref={animation}
          style={
            {
              width:200,
              height:200
            }
          }
          source={require('../../assets/97930-loading.json')}
         />
    </View>
   )
  }

  return (
    <View style={AccountStyle.container}>
      <Avatar navigation={navigation} profile={profile} />
      <AccountOptions navigation={navigation} />
    </View>
  );
};

const AccountStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    justifyContent: "space-around",
    flex: 1,
  },
});

export default Profile;
