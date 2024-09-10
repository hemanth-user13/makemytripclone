// src/store/slices/trainSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TrainDataProps } from "./type";

const TRAINDATURL = "http://localhost:8003/trains";

// Async thunk to fetch train data
export const fetchTrainData = createAsyncThunk("trains/fetchTrainData", async () => {
  const response = await axios.get<TrainDataProps[]>(TRAINDATURL);
  return response.data;
});

interface TrainState {
  data: TrainDataProps[];
  loading: boolean;
  error: string | null;
}
 
const initialState: TrainState = {
  data: [],
  loading: false,
  error: null,
};

const trainSlice = createSlice({
  name: "trains",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrainData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTrainData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch train data";
      });
  },
});

export default trainSlice.reducer;
