import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import meteoDataReducer from '../features/meteoDataSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    meteoData:meteoDataReducer
  },
});
