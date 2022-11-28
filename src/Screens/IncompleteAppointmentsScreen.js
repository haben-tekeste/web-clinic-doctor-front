import React, { useState, useRef, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import AppointmentCard from "../Components/AppointmentCard";
import Spacer from "../Components/Spacer";
import { useSelector, useDispatch } from "react-redux";
import LottieView from "lottie-react-native";
import { fetchIncompleteAppointments } from "../Actions/AppointmentsAction";

const IncompleteAppointmentsScreen = ({ navigation }) => {
  const { isLoading, incomplete } = useSelector((state) => state.appointments);
  const animation = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = navigation.addListener("focus", () => {
      dispatch(fetchIncompleteAppointments());
    });
    return listener;
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../../assets/97930-loading.json")}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Spacer />
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={incomplete}
        keyExtractor={(item) => item.date + Math.random()}
        renderItem={({ item }) => <AppointmentCard details={item} />}
      />
    </SafeAreaView>
  );
};

export default IncompleteAppointmentsScreen;
