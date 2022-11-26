import React from "react";
import { useWindowDimensions } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default ({ IconName, icon, text, navigation }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "#AEAEAE",
        marginBottom: 20,
        marginHorizontal: 32,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Sign-out")}
        style={{
          paddingVertical: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color="black"
          style={{ marginRight: 20 }}
        />
        <Text style={{ fontSize: 16 }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};