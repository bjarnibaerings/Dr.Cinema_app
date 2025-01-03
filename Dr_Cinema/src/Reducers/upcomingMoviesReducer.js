import * as constants from "../Constants";

const initialState = {
  data: [], // Ensure this starts as an empty array
  loading: false,
  error: null,
};

const upcomingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_UPCOMING_MOVIES:
      return { ...state, loading: true, error: null };
    case constants.FETCH_UPCOMING_MOVIES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case constants.FETCH_UPCOMING_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default upcomingMoviesReducer;
