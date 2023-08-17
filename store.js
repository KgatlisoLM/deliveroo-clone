import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./Slices/basketSlice";
import restaurantReducer  from "./Slices/restaurantSlice";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer
    },
});