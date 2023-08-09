import { configureStore } from "@reduxjs/toolkit";
import KidsReducer from "./Reducers/KidsReducer";
export const store = configureStore({
  reducer:{
    KidsReducer,
  },
})