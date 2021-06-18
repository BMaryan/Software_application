import { createSelector } from "reselect";

export const getProfileSelector = state => {
	return state.profilePage.profile;
};

export const getStatusSelector = state => {
	return state.profilePage.status;
};

export const getPostsSelector = state => {
	return state.profilePage.posts;
};

export const getCommentsSelector = state => {
	return state.profilePage.comments;
};
