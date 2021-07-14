import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "software_application/profile/ADD-POST";
const SET_USER_PROFILE = "software_application/profile/SET_USER_PROFILE";
const SET_STATUS = "software_application/profile/SET_STATUS";
const ADD_COMMENT = "software_application/profile/ADD_COMMENT";
const DELETE_POST = "software_application/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "software_application/profile/SAVE_PHOTO";
const PUT_IMAGE_FOR_POST = "software_application/profile/PUT_IMAGE_FOR_POST";
const PUT_LIKE = "software_application/profile/PUT_LIKE";

let initialState = {
	posts: [
		{
			id: 1,
			message:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gi5CDty4l6bxTwEBIBYrIFNuMrZNsb0COw&usqp=CAU",
			imgCover:
				"https://a.loveholidays.com/images/holidays/d27c6e8b10738f0f6eefdd82102c11f6efa95b0e/holidays/turkey/dalaman/marmaris/green-nature-diamond-hotel-14.jpg",
			currentLikes: 284,
		},
		{
			id: 2,
			message:
				"Lorem ipsum consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   ",
			imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gi5CDty4l6bxTwEBIBYrIFNuMrZNsb0COw&usqp=CAU",
			imgCover: "https://cf.bstatic.com/images/hotel/max1280x900/279/279314888.jpg",
			currentLikes: 405,
		},
	],
	comments: [
		{ id: 1, fullName: "Andriy", message: "Wow, Where are you?" },
		{ id: 2, fullName: "sasha04", message: "You are cool...)" },
	],
	profile: null,
	status: "",
	imgCover: null,
	currentLikes: 0,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.posts.length + 1,
				message: action.addNewPost,
				imgCover: state.imgCover,
				imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gi5CDty4l6bxTwEBIBYrIFNuMrZNsb0COw&usqp=CAU",
				currentLikes: state.currentLikes,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		}
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId),
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		case ADD_COMMENT: {
			let newComment = {
				id: state.posts.length + 1,
				message: action.addNewComment,
				fullName: action.fullName,
			};
			return {
				...state,
				comments: [...state.comments, newComment],
			};
		}
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			};
		}
		case PUT_IMAGE_FOR_POST: {
			return {
				...state,
				imgCover: action.img,
			};
		}
		case PUT_LIKE: {
			return {
				...state,
				currentLikes: state.currentLikes + action.like,
			};
		}
		default: {
			return state;
		}
	}
};

export const addPostActionCreator = addNewPost => ({ type: ADD_POST, addNewPost });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });
export const addCommentAC = (addNewComment, fullName) => ({ type: ADD_COMMENT, addNewComment, fullName });
export const deletePostAC = postId => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = photos => ({ type: SAVE_PHOTO_SUCCESS, photos });
export const putImageForPost = img => ({ type: PUT_IMAGE_FOR_POST, img });
export const putLikeAC = like => ({ type: PUT_LIKE, like });

// thunks
export const setUser = userId => async dispatch => {
	let data = await profileAPI.setUser(userId);
	dispatch(setUserProfile(data));
};

export const getStatus = userId => async dispatch => {
	let data = await profileAPI.setStatus(userId);
	dispatch(setStatus(data));
};

export const updateStatus = status => async dispatch => {
	let data = await profileAPI.updateStatus(status);

	if (data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export const savePhoto = file => async dispatch => {
	let data = await profileAPI.savePhoto(file);

	if (data.resultCode === 0) {
		dispatch(savePhotoSuccess(data.data.photos));
	}
};

export const saveProfile = profile => async (dispatch, getState) => {
	let data = await profileAPI.saveProfile(profile);
	const userId = getState().auth.id;

	if (data.resultCode === 0) {
		dispatch(setUser(userId));
	} else {
		console.log(data.messages[0]);
		dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }));
		// dispatch(stopSubmit("edit-profile", { contacts: { facebook: data.messages[0] } }));
		return Promise.reject(data.messages[0]);
	}
};

export default profileReducer;
