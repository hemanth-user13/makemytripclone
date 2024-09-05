

import { configureStore } from "@reduxjs/toolkit";
import trainReducer from "./Components/Pages/Trains/TrainSlice";
import FlightReducer from './Components/Pages/Flights/FlightSlice'

export const store = configureStore({
  reducer: {
    trains: trainReducer,
    flights:FlightReducer
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
