const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
	newPostText: "",
	profile: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: state.posts.length + 1,
				message: state.newPostText,
				imgCover:
					"https://a.loveholidays.com/images/holidays/db0ae640226fcba87630348d7ad223689c18c1d4/holidays/turkey/dalaman/marmaris/green-nature-diamond-hotel-1.jpg?auto=webp&quality=45&dpr=2&optimize=high&fit=crop&width=840&height=577",
				imgProfile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gi5CDty4l6bxTwEBIBYrIFNuMrZNsb0COw&usqp=CAU",
				currentLikes: 120,
			};
			return {
				...state,
				newPostText: "",
				posts: [...state.posts, newPost],
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText,
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		default: {
			return state;
		}
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = messageInput => ({ type: UPDATE_NEW_POST_TEXT, newText: messageInput });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile: profile });

export default profileReducer;
