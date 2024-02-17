import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import productSlice from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
	reducer: {
		user: userSlice,
		products: productSlice,
		cart: cartReducer,
	},
});
