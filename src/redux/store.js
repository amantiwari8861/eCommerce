import { configureStore } from '@reduxjs/toolkit'
import cartReducers from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducers
    },
})