import { configureStore } from '@reduxjs/toolkit';
import yearReducer from '../features/yearSlice'; 
import presenceReducer from '../features/presenceSlice'; 
import navigationReducer from '../features/navigationSlice'; 

export const store = configureStore({
  reducer: {
    year: yearReducer,
    presence:presenceReducer,
       navigation: navigationReducer,
  },
});
