// redux/navigationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    lastVisited: null, // 'years', 'gtf', etc.
  },
  reducers: {
    setLastVisited: (state, action) => {
      state.lastVisited = action.payload;
    },
       resetNavigation: (state) => {
      state.lastVisited = null;
    },
  },
});

export const { setLastVisited,resetNavigation  } = navigationSlice.actions;
export default navigationSlice.reducer;
