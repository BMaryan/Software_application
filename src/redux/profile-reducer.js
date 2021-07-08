import { profileAPI } from "../api/api";

const ADD_POST = "software_application/profile/ADD-POST";
const SET_USER_PROFILE = "software_application/profile/SET_USER_PROFILE";
const SET_STATUS = "software_application/profile/SET_STATUS";
const ADD_COMMENT = "software_application/profile/ADD_COMMENT";
const DELETE_POST = "software_application/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "software_application/profile/SAVE_PHOTO";

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
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.posts.length + 1,
				message: action.addNewPost,
				imgCover:
					"https://a.loveholidays.com/images/holidays/db0ae640226fcba87630348d7ad223689c18c1d4/holidays/turkey/dalaman/marmaris/green-nature-diamond-hotel-1.jpg?auto=webp&quality=45&dpr=2&optimize=high&fit=crop&width=840&height=577",
				imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gi5CDty4l6bxTwEBIBYrIFNuMrZNsb0COw&usqp=CAU",
				currentLikes: 120,
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

export default profileReducer;
