import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import axiosInstance from "../../utils/axios";
import {landingProducts} from "../../components/landingPage/data";
// import { async } from "q";

// export const getProductsThunk = async (name, thunkAPI) => {
// 	try {
// 		const resp = await axiosInstance.get(`/products`);
//
// 		return resp.data;
// 	} catch (error) {
// 		return thunkAPI.rejectWithValue(error.response.data.msg);
// 	}
// };


export const getProductsThunk = () => {
	try {
		const resp = landingProducts.map((data,index)=>{
			return data
		})
		// console.log(resp)
		return resp;
	} catch (error) {
		// return thunkAPI.rejectWithValue(error.response.data.msg);
		console.log(error)
	}
};


// export const getSingleProductThunk = async (productId, thunkAPI) => {
// 	try {
// 		const resp = await axiosInstance.get(`/products/${productId}/`);
//
// 		return resp.data;
// 	} catch (error) {
// 		return thunkAPI.rejectWithValue(error.response.data.msg);
// 	}
// };


export const getSingleProductThunk =(productId) => {
	try {
		const resp = landingProducts.map((data,index)=>{
			return data[productId]
		})

		console.log(resp)
		// return resp;
	} catch (error) {
		// return thunkAPI.rejectWithValue(error.response.data.msg);
		console.log(error)
	}
};


export const clearStoreThunk = async (message, thunkAPI) => {
	try {
		thunkAPI.dispatch(logoutUser(message));
		return Promise.resolve();
	} catch (error) {
		return Promise.reject();
	}
};
