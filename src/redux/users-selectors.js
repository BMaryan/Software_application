import { createSelector } from "reselect";

const getUsersSelector = state => {
	return state.usersPage.users;
};

export const getUsersSuperSelector = createSelector(getUsersSelector, users => {
	return users.filter(user => true);
});

export const getTotalUsersCountSelector = state => {
	return state.usersPage.totalUsersCount;
};

export const getCountUsersSelector = state => {
	return state.usersPage.getCountUsers;
};

export const getCountPagesSelector = state => {
	return state.usersPage.getCountPages;
};

export const getCurrentPageSelector = state => {
	return state.usersPage.currentPage;
};

export const getIsFetchingSelector = state => {
	return state.usersPage.isFetching;
};

export const getFollowingInProgressSelector = state => {
	return state.usersPage.followingInProgress;
};
