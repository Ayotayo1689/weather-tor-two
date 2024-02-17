import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitQouteThunk } from "./cartThunk";
import {number} from "yup";


const getLocalStorage = () => {
	if (typeof window !== 'undefined') {
		let item = localStorage.getItem("cart");
		if (!item) {
			// localStorage.setItem("cart", JSON.stringify([]));
			return [];
		} else {
			return JSON.parse(item);
		}
	}
};



const initialState = {
	cart: getLocalStorage(),
	// total_items: 0,
	// total_amount: 0,
};

export const submitQoute = createAsyncThunk(
	"cart/submitQoute",
	submitQouteThunk
);
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// addToCart: (state, { payload }) => {
		// 	const { id, amount, product } = payload;
		// 	const tempItem = state.cart.find((item) => item.id === id);
		// 	console.log(tempItem)
		// 	if (tempItem) {
		// 		const tempCart = state.cart.map((cartItem) => {
		// 			if (cartItem.id === id) {
		// 				let newAmount = cartItem.amount + amount;
		//
		// 				return { ...cartItem, amount: newAmount };
		// 			} else {
		// 				return cartItem;
		// 			}
		// 		});
		// 		state.cart = tempCart;
		// 	} else {
		// 		const newItem = {
		// 			id,
		// 			name: product?.name,
		// 			amount,
		// 			image: product?.main_image,
		// 		};
		//
		// 		state.cart = [...state.cart, newItem];
		// 	}
		// },
		addToCart: (state, action) => {
			const { product } = action.payload;
			const existingItem = state.cart.find((item) => Number(item.product.id) === Number(product.id));

			if (existingItem) {
				existingItem.quantity++;

			} else {
				state.cart = [...state.cart,{  product , quantity: 1 }]
			}
			localStorage.setItem("cart", JSON.stringify(state.cart));
		},


		// removeCartItem: (state, { payload }) => {
		// 	const tempCart = state.cart.filter((item) => item.product.id !== payload);
		// 	state.cart = tempCart;
		// },
		removeCartItem: (state, { payload }) => {
			const updatedCart = state.cart.filter((item) => item.product.id !== payload);
			state.cart = updatedCart;

			// Update local storage
			localStorage.setItem("cart", JSON.stringify(state.cart));
		},


		clearCart: (state, { payload }) => {
			state.cart = localStorage.setItem("cart", JSON.stringify(state.cart));;
		},

		toggleCartItemAmount: (state, { payload }) => {
			const { id, value } = payload;
			const tempCart = state.cart.map((cartItem) => {
				if (cartItem.product.id === id) {
					let newQuantity = cartItem.quantity;
					if (value === "inc") {
						newQuantity += 1;
					} else if (value === "dec" && newQuantity > 1) {
						newQuantity -= 1;
					}
					return { ...cartItem, quantity: newQuantity };
				}
				return cartItem;
			});

			// Update Redux store
			state.cart = tempCart;

			// Update local storage
			localStorage.setItem("cart", JSON.stringify(state.cart));
		},

		countCartItems: (state, { payload }) => {
			const total_items = state.cart.reduce((total, cartItem) => {
				const { amount } = cartItem;
				total += amount;

				return total;
			}, 0);

			state.total_items = total_items;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(submitQoute.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(submitQoute.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.offices = payload;
			})
			.addCase(submitQoute.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const {
	addToCart,
	removeCartItem,
	clearCart,
	toggleCartItemAmount,
	countCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
