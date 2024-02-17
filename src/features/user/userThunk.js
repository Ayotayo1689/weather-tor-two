import axiosInstance, { checkForUnauthorizedResponse } from "../../utils/axios";
import axios from "axios";
import { logoutUser } from "./userSlice";
import {useRouter} from "next/router";
const baseUrl =
	process.env.REACT_APP_BASE_URL || "https://api.weatherfortwo.tanta.com.ng";



export const registerUserThunk = async (user, thunkAPI) => {

	try {
		const resp = await axiosInstance.post(`/auth/signup`, user);
		const result = localStorage.setItem("userEmail",resp.data.email);
		user = result ? JSON.parse(result) : false;


		return resp.data;

	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};


export const loginUserThunk = async (user, thunkAPI) => {
	try {
		const resp =  await axiosInstance.post(`/auth/login`, user);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};


export const forgotPasswordThunk = async (user, thunkAPI) => {
	try {
		const resp =  await axiosInstance.post(`/auth/forgot-password`, user);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};








export const verifyUserThunk = async (user, thunkAPI) => {
	try {
		const resp = await axiosInstance.post(`/auth/verify`, user);


		return resp.data;

	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};


export const getAllUserQuotesThunk = async (userID, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/quotations/?search=${userID}`);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};
export const getAllWorkshopsThunk = async (userID, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/enrollments/?search=${userID}`);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};
export const getAllOrdersThunk = async (userID, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/orders/?search=${userID}`);
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data);
	}
};



export const updateUserThunk = async (url, user, thunkAPI) => {
	try {
		const resp = await axiosInstance.patch(url, user);
		return resp.data;
	} catch (error) {
		return checkForUnauthorizedResponse(error, thunkAPI);
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
