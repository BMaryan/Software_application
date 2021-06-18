import React from "react";
import { addPostActionCreator } from "./profile-reducer";

let state = {
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
};

test(`new post should added`, () => {
	let action = addPostActionCreator("Hello");

	let newState = (state, action);

	expect(newState.posts.length).toBe(3);
});
