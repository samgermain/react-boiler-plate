import { combineReducers } from "redux";
import { SET_PRICE, SET_RATING } from "./actions";
import initialState from "./initialState";

const priceReducer = (state = initialState.price, action) => {
  if (action.type === SET_PRICE) return action.payload;
  return state;
};

const ratingReducer = (state = initialState.rating, action) => {
  if (action.type === SET_RATING) return action.payload;
  return state;
};

const reducer = combineReducers({
  price: priceReducer,
  rating: ratingReducer,
});

export default reducer;
