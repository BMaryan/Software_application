/* eslint-disable array-callback-return */
import React from "react";
import Comment from "./Comment/Comment";

const Comments = props => {
	let commentsElements = props.comments.map(comment => {
		return <Comment key={comment.id} fullName={comment.fullName} message={comment.message} />;
	});

	return <div>{commentsElements}</div>;
};

export default Comments;
