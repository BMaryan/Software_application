/* eslint-disable no-unused-vars */
import React from "react";
import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
	users: [],
	totalUsersCount: 0,
	getCountUsers: 10,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					}
					return user;
				}),
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					}
					return user;
				}),
			};
		}
		case SET_USERS: {
			return { ...state, users: [...action.users] };
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage };
		}
		case SET_TOTAL_USERS_COUNT: {
			return { ...state, totalUsersCount: action.totalCount };
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching };
		}
		case FOLLOWING_IN_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId),
			};
		}
		default: {
			return state;
		}
	}
};

export const followSuccess = userId => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId: userId });
export const setUsers = users => ({ type: SET_USERS, users: users });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCount = totalCount => ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalCount });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFetching: isFetching, userId: userId });

// 		thunks
export const getUsers = (currentPage, getCountUsers) => {
	return dispatch => {
		dispatch(toggleIsFetching(true));

		usersAPI.getUsers(currentPage, getCountUsers).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		});
	};
};

export const onPageChanged = (page, getCountUsers) => {
	return dispatch => {
		dispatch(setCurrentPage(page));
		dispatch(toggleIsFetching(true));

		usersAPI.getUsers(page, getCountUsers).then(data => {
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
		});
	};
};

export const follow = userId => {
	return dispatch => {
		dispatch(toggleFollowingInProgress(true, userId));

		usersAPI.follow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userId));
			}
			dispatch(toggleFollowingInProgress(false, userId));
		});
	};
};

export const unfollow = userId => {
	return dispatch => {
		dispatch(toggleFollowingInProgress(true, userId));

		usersAPI.unfollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowSuccess(userId));
			}
			dispatch(toggleFollowingInProgress(false, userId));
		});
	};
};

export default usersReducer;
