import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
