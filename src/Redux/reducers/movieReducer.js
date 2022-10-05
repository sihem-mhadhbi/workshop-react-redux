import { SET_RATING, SET_TITLE } from "../action/types";

const initialState = {
  title: "",
  rating: 1,
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};
export default movieReducer;
