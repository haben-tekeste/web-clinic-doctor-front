import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../../Screens/SignInScreen";
import SignUpScreen from "../../Screens/SignUpScreen";
import LoaderScreen from "../../Screens/LoaderScreen";
import SignOutScreen from "../../Screens/SignOutScreen";
import Drawer from "./Drawer";
import CompletedAppointmentsScreen from "../../Screens/CompletedAppointmentsScreen";

export default () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "#F7EBFF",
      }}
    >
      <Stack.Screen
        name="Loader"
        component={LoaderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign-in"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sign-up"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Drawer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CompletedAppointments"
        component={CompletedAppointmentsScreen}
        options={{
          headerTitle: "Completed Appointments",
          headerStyle: {
            backgroundColor: "#F7EEFF",
          },
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="Sign-out"
        component={SignOutScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
