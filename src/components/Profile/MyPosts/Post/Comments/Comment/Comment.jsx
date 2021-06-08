import React from "react";
import style from "./Comment.module.css";

const Comment = props => {
	return (
		<div>
			<span className={style.title}>{props.fullName}</span>
			{props.message && props.message.length >= 50 ? <span>{props.message.substring(0, 50)} ...</span> : props.message}
		</div>
	);
};

export default Comment;
