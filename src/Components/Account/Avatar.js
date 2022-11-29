import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
export default ({ navigation, profile }) => {
  const { width, height } = useWindowDimensions();
  const { name } = useRoute();
  const isProfile = name === "Profile" ? true : false;
  return (
    <View>
      <ImageBackground
        style={{
          width: width,
          height: width / 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://f6d8-195-229-151-165.ap.ngrok.io/" + profile.img,
          }}
          style={{
            width: 180,
            height: 180,
            borderStyle: "solid",
            borderWidth: 2,
            borderRadius: 50,
            borderColor: "#a84ec5",
            position: "relative",
          }}
        />
      </ImageBackground>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Dr. {profile?.name}
        </Text>
        <Text style={{ fontSize: 15, color: "gray", fontWeight: "light" }}>
          {profile?.email}
        </Text>
      </View>
    </View>
  );
};
