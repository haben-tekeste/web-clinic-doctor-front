import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import ProfileReducer from "./ProfileReducer";
import appointmentsReducer from "./AppointmentsReducer";
import reviewsReducer from "./ReviewsReducer";
import prescriptionReducer from "./PrescriptionReducer";

const rootReducer = combineReducers({
  user: authReducer,
  profile: ProfileReducer,
  appointments:appointmentsReducer,
  reviews:reviewsReducer,
  prescription:prescriptionReducer
});

export default rootReducer;
