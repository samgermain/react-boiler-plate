import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

const priceSlice = createSlice({
    name: "price",
    initialState: initialState.price,
    reducers: {
        setPrice: (state, action) => action.payload,
    },
});

export const { setPrice } = priceSlice.actions;
export default priceSlice.reducer;
