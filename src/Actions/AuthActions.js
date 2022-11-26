import api from "../Api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from "../navigationRef";

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { data } = await api.post("/doctor/sign-in", {
        email,
        password,
      });
      await AsyncStorage.setItem("token", data.token);
      dispatch({
        type: "SIGN_IN",
        payload: data.token,
      });
      RootNavigation.navigate('HomeScreen')
    } catch (error) {
      const { data:{message } } = error.response;
      
      dispatch({
        type: "ADD_ERROR",
        payload: message,
      });
    }
  };

export const localSignIn = () => async (dispatch) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGN_IN", payload: token });
    RootNavigation.navigate("HomeScreen");
  } else {
    RootNavigation.navigate("Sign-in");
  }
};

export const clearError = () => async(dispatch) => {
  return dispatch({
    type: "CLEAR_ERROR",
  });
};

export const signOut = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem("token");
    dispatch({
      type: "SIGN_OUT",
    });
    RootNavigation.navigate("Sign-in");
  } catch (e) {
    console.log(e);
  }
};

export const signUp =
  ({ name, email, password, key, image, speciality }) =>
  async (dispatch) => {
    try {
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email",email);
      formdata.append("password", password);
      formdata.append("key", key);
      formdata.append("image", {
        name:image.fileName ? image.fileName : image.uri.split('/').pop(),
        type:image.type,
        uri:image.uri.replace("file://","")
      });
      formdata.append("speciality", speciality);
      
      console.log(formdata,"form");
      const response = await api.post("/doctor/sign-up", formdata);

      RootNavigation.navigate("Sign-in");
    } catch (error) {
      dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with sign up",
      });
    }
  };
