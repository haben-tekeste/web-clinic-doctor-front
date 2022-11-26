import React,{useEffect} from "react";
import Credentials from "../Components/Credentials";

export default ({ navigation }) => {
  return (
    <Credentials
      navigation={navigation}
      navigate="Sign-in"
      sign="up"
      header="Create Account"
      subHeader=""
      goto="in"
      type="sign-up"
      errorMessage=""
    />
  );
};
