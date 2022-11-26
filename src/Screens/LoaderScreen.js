import React, { useRef } from "react";
import { SafeAreaView, Text } from "react-native";
import LottieView from "lottie-react-native";
import { localSignIn } from "../Actions/AuthActions";
import { useDispatch } from "react-redux";

const LoaderScreen = () => {
  const animation = useRef();
  const dispatch = useDispatch();
  const handleFinish = () => {
    dispatch(localSignIn());
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#abebe9",
      }}
    >
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 300,
          height: 450,
        }}
        loop={false}
        source={require("../../assets/107925-doctor.json")}
        onAnimationFinish={handleFinish}
      />
    </SafeAreaView>
  );
};

export default LoaderScreen;
