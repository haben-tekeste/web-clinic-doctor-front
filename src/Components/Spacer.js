import React from "react";
import { StyleSheet, View } from "react-native";

const Spacer = ({ children }) => {
  return <View style={Styles.spacer}>{children}</View>;
};

const Styles = StyleSheet.create({
  spacer: {
    marginBottom: 15,
    marginHorizontal: 15,
  },
});

export default Spacer
