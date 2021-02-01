import { configureStore } from '@reduxjs/toolkit';
import meteoDataReducer from '../features/meteoDataSlice';

export default configureStore({
  reducer: {
    meteoData:meteoDataReducer,
  },
});
