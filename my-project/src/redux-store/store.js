import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "../redux-reducer/reducerSlice";

export const store=configureStore({
    // ! here we have to give the value when we create the reducer then integrate.
    reducer: reducerSlice
})