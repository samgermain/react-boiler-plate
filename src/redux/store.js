import { configureStore } from "@reduxjs/toolkit";
import { priceReducer, ratingsReducer } from "./slices";

const store = configureStore({
    reducer: {
        priceReducer,
        ratingsReducer,
    },
});

export default store;
