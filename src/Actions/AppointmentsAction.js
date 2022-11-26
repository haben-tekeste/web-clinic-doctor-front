import api from "../Api/api";

export const fetchTodayAppointments = () => async (dispatch) => {
  try {
    const { data } = await api.get("/doctor/today");
    dispatch({
      type: "FETCH_TODAY_APPOINTMENTS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllAppointments = () => async (dispatch) => {
  try {
    const { data } = await api.get("/doctor/appointments");
    dispatch({
      type: "FETCH_ALL_APPOINTMENTS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchNearestAppointments = () => async (dispatch) => {
  try {
    const { data } = await api.get("/doctor/nearest");
    dispatch({
      type: "FETCH_NEAREST_APPOINTMENTS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchFutureAppointments = () => async (dispatch) => {
  try {
    const { data } = await api.get("/doctor/future");
    dispatch({
      type: "FETCH_FUTURE_APPOINTMENTS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateAppointment = (appId) => async (dispatch) => {
  try {
    await api.put("/doctor/appointment", null, { params: { id: appId } });
    dispatch({
      type: "UPDATE_APPOINTMENT_STATUS",
    });
  } catch (error) {
    console.log(error);
  }
};
