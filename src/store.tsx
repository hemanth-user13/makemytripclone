// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import trainReducer from "./Components/Pages/Trains/TrainSlice";

export const store = configureStore({
  reducer: {
    trains: trainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
