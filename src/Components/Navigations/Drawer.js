import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import HomeScreen from "../../Screens/HomeScreen";
import AppointmentsScreen from "../../Screens/AppointmentsScreen";
import ProfileScreen from "../../Screens/ProfileScreen";
import ChatScreen from "../../Screens/ChatScreen";
import CustomDrawer from "./CustomDrawer";
import { TouchableOpacity } from "react-native";


export default () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: "slide",
        drawerStyle: {
          backgroundColor: "#F7EBFF",
        },
        swipeEdgeWidth: 30,

        headerRight: () => {
          return (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                padding: 5,
                marginRight: 15,
                borderRadius: 10,
                borderColor: "#AEAEAE",
              }}
            >
              <FontAwesome name="bell-o" size={24} color="#8212A9" />
            </TouchableOpacity>
          );
        },
        drawerActiveBackgroundColor: "#640F82",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EEFF", elevation: 0 },
          drawerIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Appointment"
        component={AppointmentsScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EEFF" },
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="envelope-open-text" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#F7EEFF" },
          drawerIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      
    </Drawer.Navigator>
  );
};