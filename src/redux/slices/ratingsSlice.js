import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

const ratingSlice = createSlice({
    name: "rating",
    initialState: initialState.rating,
    reducers: {
      setRating: (state, action) => action.payload,
    },
});
  
export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;
