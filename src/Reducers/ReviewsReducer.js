const initialState = {
  reviews: {},
  isLoading: true,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REVIEWS":
      return { isLoading: false, reviews: action.payload };
    default:
      return state;
  }
};

export default reviewsReducer;
