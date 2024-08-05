import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://api.mockapi.io/data');
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    userActivity: [],
    salesData: [],
    userDemographics: [],
    recentActivity: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userActivity = action.payload.userActivity;
        state.salesData = action.payload.salesData;
        state.userDemographics = action.payload.userDemographics;
        state.recentActivity = action.payload.recentActivity;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
