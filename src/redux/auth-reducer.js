/* eslint-disable no-unused-vars */
import React from "react";
import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "software_application/auth/SET_USER_DATA";

let initialState = {
	id: null,
	email: null,
	login: null,
	isFetching: false,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
			};
		}
		default: {
			return state;
		}
	}
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });

// thunks
export const authUser = () => async dispatch => {
	let data = await authAPI.authUser();

	if (data.resultCode === 0) {
		let { id, email, login } = data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};

export const login = (email, password, rememberMe) => async dispatch => {
	let data = await authAPI.login(email, password, rememberMe);

	if (data.resultCode === 0) {
		dispatch(authUser());
	} else {
		let message = data.messages[0].length > 0 ? data.messages[0] : "Some error";
		dispatch(stopSubmit("login", { _error: message }));
	}
};

export const logout = () => async dispatch => {
	let data = await authAPI.logout();

	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};

export default authReducer;
