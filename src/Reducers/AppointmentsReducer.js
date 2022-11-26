const initialState = {
  today: [],
  all: [],
  nearest: [],
  future: [],
  isLoading: true,
};

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODAY_APPOINTMENTS":
      return { ...state, isLoading: false, today: action.payload };
    case "FETCH_ALL_APPOINTMENTS":
      return { ...state, isLoading: false, all: action.payload };
    case "FETCH_NEAREST_APPOINTMENTS":
      return { ...state, isLoading: false, nearest: action.payload };
    case "FETCH_FUTURE_APPOINTMENTS":
      return { ...state, isLoading: false, future: action.payload };
    case "UPDATE_APPOINTMENT_STATUS":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default appointmentsReducer;
