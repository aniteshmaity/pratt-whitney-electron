import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  year: null,
  innerIndex: 0,
  showLoader: false,
  isBackToYearIndex: false,
  activeYear: null,
};

const yearSlice = createSlice({
  name: 'year',
  initialState,
  reducers: {
    setYearState: (state, action) => {
      state.year = action.payload.year;
      state.innerIndex = action.payload.innerIndex;
      if (action.payload.showLoader !== undefined) {
        state.showLoader = action.payload.showLoader;
      }
      if (action.payload.isBackToYearIndex !== undefined) {
        state.isBackToYearIndex = action.payload.isBackToYearIndex;
      }
      if (action.payload.activeYear !== undefined) {
        state.activeYear = action.payload.activeYear; // ✅ support activeYear
      }
    },
    setShowLoader: (state, action) => {
      state.showLoader = action.payload;
    },
    setIsBackToYearIndex: (state, action) => {
      state.isBackToYearIndex = action.payload;
    },
    resetYearState: (state) => {
      state.year = null;
      state.innerIndex = 0;
      state.showLoader = false;
      state.isBackToYearIndex = false;
       state.activeYear = null;
    }
  }
});

export const { setYearState, resetYearState, setShowLoader, setIsBackToYearIndex } = yearSlice.actions;
export default yearSlice.reducer;