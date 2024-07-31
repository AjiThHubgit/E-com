import { configureStore } from '@reduxjs/toolkit';
import ThunkApiSlice from '../src/redux/slice/thunkApiSlice';

export const store = configureStore({
    reducer: {
        thunkApi: ThunkApiSlice
    }
});