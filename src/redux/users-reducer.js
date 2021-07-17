/* eslint-disable no-unused-vars */
import React from "react";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/ObjectMoreHelpers/object-helpers";

const FOLLOW = "software_application/users/FOLLOW";
const UNFOLLOW = "software_application/users/UNFOLLOW";
const SET_USERS = "software_application/users/SET_USERS";
const SET_CURRENT_PAGE = "software_application/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "software_application/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "software_application/users/TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "software_application/users/FOLLOWING_IN_PROGRESS";
const ADDED_FRIENDS = "software_application/users/ADDED_FRIENDS";

let initialState = {
	users: [],
	totalUsersCount: 0,
	getCountPages: 20,
	getCountUsers: 10,
	currentPage: 1,
	isFetching: false,
	friends: [],
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
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
		case ADDED_FRIENDS: {
			return {
				...state,
				friends: [...state.friends, ...action.user],
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
export const addedFriends = user => ({ type: ADDED_FRIENDS, user });

// 		thunks
export const getUsers = (currentPage, getCountUsers) => async dispatch => {
	dispatch(toggleIsFetching(true));

	let data = await usersAPI.getUsers(currentPage, getCountUsers);
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
};

export const onPageChanged = (page, getCountPages) => async dispatch => {
	dispatch(setCurrentPage(page));
	dispatch(toggleIsFetching(true));

	let data = await usersAPI.getUsers(page, getCountPages);
	dispatch(toggleIsFetching(false));
	dispatch(setUsers(data.items));
};

// common function for follow and unfollow
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingInProgress(true, userId));

	let data = await apiMethod(userId);
	if (data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingInProgress(false, userId));
};

export const follow = userId => async dispatch => {
	followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = userId => async dispatch => {
	followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;
