import React, { useState,useRef } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import AppointmentCard from "../Components/AppointmentCard";
import Spacer from "../Components/Spacer";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

const CompletedAppointmentsScreen = () => {
  const {isLoading, all} = useSelector(state => state.appointments)
  const animation = useRef(null)

  const completedAppointments = all?.filter(appointment => (
    appointment.status === "Confirmed"
  ))

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
        data={completedAppointments}
        keyExtractor={(item) => item.date + Math.random()}
        renderItem={({ item }) => <AppointmentCard details={item} />}
      />
    </SafeAreaView>
  );
};

export default CompletedAppointmentsScreen;
