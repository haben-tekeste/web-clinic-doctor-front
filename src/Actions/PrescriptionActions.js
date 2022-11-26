import api from "../Api/api";

export const writePrescription =
  ( medicine, dosage, duration, patient, appId ) =>
  async (dispatch) => {
    try {
      const { data } = await api.post("/doctor/prescription", {
        medicine,
        dosage,
        duration,
        patient,
        appId,
      });
      dispatch({
        type: "ADD_PRESCRIPTION",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_FAILURE_MESSAGE",
      });
    }
  };

export const clearMessage = () => async (dispatch) => {
    dispatch({
        type:"CLEAR_MESSAGE"
    })
}