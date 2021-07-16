import { SET_PRICE, SET_RATING } from "./actions";

// action creators
export const setPrice = (update) => ({
  type: SET_PRICE,
  payload: update,
});

export const setRating = (update) => ({
  type: SET_RATING,
  payload: update,
});
