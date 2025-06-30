// store/slices/presenceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCityIndex: null, // or default to 0
  selectedCityData: null   // optional, if you want full city info
};

const presenceSlice = createSlice({
  name: 'presence',
  initialState,
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCityIndex = action.payload.index;
      state.selectedCityData = action.payload.city;
    },
    clearSelectedCity: (state) => {
      state.selectedCityIndex = null;
      state.selectedCityData = null;
    }
  }
});

export const { setSelectedCity, clearSelectedCity  } = presenceSlice.actions;
export default presenceSlice.reducer;
