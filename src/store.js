import { configureStore } from '@reduxjs/toolkit';
import pinksaleSlice from './features/pinksale/pinksaleSlice';

export default configureStore({
    reducer: {
        pinksale: pinksaleSlice,
    },
});
