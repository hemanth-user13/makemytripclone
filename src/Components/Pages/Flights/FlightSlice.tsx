import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FlightCardProps } from "./FlightCards/type";

const FLIGHT_URL = "http://localhost:8003/flight";

export const fetchFlightData = createAsyncThunk("flights/fetchFlightData", async () => {
  const response = await axios.get<FlightCardProps[]>(FLIGHT_URL);
  return response.data[0]?.data || [];
});

interface FlightState {
  data: FlightCardProps[];
  loading: boolean;
  error: string | null;
}

const initialState: FlightState = {
  data: [],
  loading: false,
  error: null,
};

const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlightData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlightData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFlightData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch flights data";
      });
  },
});

export default flightSlice.reducer;
