const initialState = {
  isLoading: true,
  profile: null,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return { isLoading: false, profile: action.payload };
    default:
      return state;
  }
};

export default ProfileReducer;
