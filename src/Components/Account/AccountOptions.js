import React from "react";
import { View } from "react-native";
import Button from "./Button";

export default ({ navigation }) => {
  
  return (
    <View>
      <Button text="Terms & Conditions" icon="bookmark-multiple-outline" />
      <Button text="Logout" icon="logout" navigation={navigation} />
    </View>
  );
};