import { createSelector } from "reselect";

export const getAuthorizedUserIdSelector = state => {
	return state.auth.id;
};
