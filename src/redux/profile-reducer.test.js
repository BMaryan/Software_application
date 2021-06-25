import React from "react";
import profileReducer, { addPostActionCreator, deletePostAC } from "./profile-reducer";

let state = {
	posts: [
		{
			id: 1,
			message: "Lorem.",
		},
		{
			id: 2,
			message: "Lorem ipsum consequat. Duis aute irure dolor in",
		},
	],
};

test(`new post should added`, () => {
	let action = addPostActionCreator("Hello");

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(3);
});

test(`message of new post should be correct`, () => {
	let action = addPostActionCreator("Hello");

	let newState = profileReducer(state, action);

	expect(newState.posts[2].message).toBe("Hello");
});

test(`after delete, length posts to be less`, () => {
	let action = deletePostAC(1);

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(1);
});

test(`after incorrect id delete, length posts should to be as it was`, () => {
	let action = deletePostAC(100);

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(2);
});
