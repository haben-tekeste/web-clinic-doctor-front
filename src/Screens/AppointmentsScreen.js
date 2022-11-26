import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Spacer from "../Components/Spacer";
import AppointmentCard from "../Components/AppointmentCard";
import { Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchFutureAppointments,
  fetchNearestAppointments,
} from "../Actions/AppointmentsAction";
import LottieView from "lottie-react-native";

const AppointmentScreen = ({ navigation }) => {
  const animation = useRef(null);
  const { isLoading, nearest, future } = useSelector(
    (state) => state.appointments
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFutureAppointments());
    dispatch(fetchNearestAppointments());
  }, []);

  const td = new Date();
  const dd = td.getDate();
  const mm = td.getMonth() + 1;
  const yyyy = td.getFullYear();
  const [nearestVisit, setNearestVisit] = useState([
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
      status: "pending",
    },
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
      status: "pending",
    },
  ]);

  const [futureVisits, setFutureVisits] = useState([
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
      status: "pending",
    },
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
      status: "pending",
    },
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
      status: "pending",
    },
    {
      doctor: {
        name: "Chris Frazier",
        speciality: "Pediatrician",
        img: "shorturl.at/uvEPR",
      },
      date: `${dd}/${mm}/${yyyy}`,
      time: "10:30 AM",
      status: "pending",
    },
  ]);

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
    <View style={ScheduleStyle.container}>
      <View style={ScheduleStyle.buttonContainer}>
        <Pressable style={{ ...ScheduleStyle.btn, backgroundColor: "#640F82" }}>
          <Text style={{ fontSize: 15, color: "white" }}>Upcoming</Text>
        </Pressable>
        <Pressable
          style={{ ...ScheduleStyle.btn, backgroundColor: "#640F82" }}
          onPress={() => navigation.navigate("CompletedAppointments")}
        >
          <Text style={{ fontSize: 15, color: "white" }}>Completed</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1, top: 40 }}>
        <Spacer>
          <Text style={ScheduleStyle.heading}>Nearest Visit</Text>
        </Spacer>

        {nearest.length ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={{ height: 100 }}
            horizontal
            data={nearestVisit}
            keyExtractor={(item) => item.date + Math.random()}
            renderItem={({ item }) => {
              return (
                <>
                  <AppointmentCard details={item} />
                </>
              );
            }}
          />
        ) : (
          <View>
            <Spacer>
              <Text style={{color:"#d23ad1", textAlign:'center'}}>No Appointment in the coming 2 days</Text>
            </Spacer>
            <Spacer />
          </View>
        )}
        <Spacer>
          <Text style={ScheduleStyle.heading}>Future Visit</Text>
        </Spacer>
        {future.length ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={futureVisits}
            keyExtractor={(item) => item.date + Math.random()}
            renderItem={({ item }) => <AppointmentCard details={item} />}
          />
        ) : (
          <View>
            <Spacer>
              <Text style={{color:"#d23ad1", textAlign:'center'}}>No Appointments for the future, so far</Text>
            </Spacer>
          </View>
        )}
      </View>
    </View>
  );
};

const ScheduleStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "750",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginHorizontal: 10,
  },
});

export default AppointmentScreen;
