import React, {  useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Dimensions,
} from "react-native";
import Spacer from "../Components/Spacer";
import { PieChart } from "react-native-chart-kit";
import AppointmentCard from "../Components/AppointmentCard";
import {
  fetchTodayAppointments,
  fetchAllAppointments,
} from "../Actions/AppointmentsAction";
import { fetchProfile } from "../Actions/ProfileActions";
import { fetchReviews } from "../Actions/ReviewsAction";
import { useDispatch, useSelector } from "react-redux";
import LottieView from "lottie-react-native";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const animation = useRef(null);
  useEffect(() => {
    dispatch(fetchProfile())
    dispatch(fetchReviews());
    dispatch(fetchTodayAppointments());
    dispatch(fetchAllAppointments());
  }, []);
  const { isLoading, today } = useSelector((state) => state.appointments);
  const reviews = useSelector((state) => state.reviews);

  const screenWidth = Dimensions.get("window").width;

  const data = [
    {
      name: "Excellent",
      count: reviews.isLoading ? 0 : reviews?.reviews?.excellent,
      color: "#52d726",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Good",
      count: reviews.isLoading ? 0 : reviews?.reviews?.good,
      color: "#ffec00",
      legendFontColor: "#8d7979",
      legendFontSize: 15,
    },
    {
      name: "Satisfactory",
      count: reviews.isLoading ? 0 : reviews?.reviews?.satisfactory,
      color: "#ff7300",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Poor",
      count: reviews.isLoading ? 0 : reviews?.reviews?.poor,
      color: "#ff0000",
      legendFontColor: "#8a9fa2",
      legendFontSize: 15,
    },
    {
      name: "Very Poor",
      count: reviews.isLoading ? 0 : reviews?.reviews?.veryPoor,
      color: "#007ed6",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: "#8ae9df",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#9bc9b0",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(29, 156, 16, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

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
    <SafeAreaView style={HomeStyle.container}>
      <View style={HomeStyle.txtContainer}>
        <Text style={{ color: "#AEAEAE" }}> Remaining Time for meeting </Text>
        <Text
          style={{
            ...HomeStyle.text,
            fontWeight: "700",
          }}
        >
          No meeting for today
        </Text>
      </View>
      <Spacer />
      <Spacer />
      <View style={{ backgroundColor: "white", height: 700, borderRadius: 40 }}>
        <Spacer />
        <Spacer />
        <View style={HomeStyle.categories}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontSize: 23,
                marginHorizontal: 20,
              }}
            >
              Today Meetings
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("DoctorsList")}
              style={{
                marginBottom: 15,
                marginHorizontal: 20,
              }}
            >
              <Text style={{ color: "blue" }}> See all</Text>
            </TouchableOpacity>
          </View>
          {today.length ? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{ height: 250 }}
              horizontal
              data={today}
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
            <Text
              style={{
                ...HomeStyle.text,
                fontWeight: "700",
                fontSize: 20,
                textAlign: "center",
                marginVertical: 15,
                marginBottom: 80,
              }}
            >
              No meeting for today
            </Text>
          )}
        </View>
        <Spacer />
        <View style={HomeStyle.dashboard}>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontSize: 23,
              marginHorizontal: 20,
            }}
          >
            Reviews
          </Text>

          <PieChart
            data={data}
            width={screenWidth}
            height={200}
            chartConfig={chartConfig}
            accessor={"count"}
            backgroundColor={"transparent"}
            paddingLeft={"1"}
            center={[10, 10]}
            absolute
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F7EEFF",
    flex: 1,
  },
  text: {
    color: "#8212A9",
  },
  txtContainer: {
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    marginHorizontal: 25,
    borderRadius: 15,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  input: {
    height: 40,
    width: 260,
    padding: 5,
  },
  icon: {
    marginRight: 5,
  },
  dashboard: {
    paddingVertical: 8,
    height: 280,
  },
});
