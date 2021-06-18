import React from "react";
import { connect } from "react-redux";
import { addCommentAC, addPostActionCreator } from "../../../redux/profile-reducer";
import { getCommentsSelector, getPostsSelector, getProfileSelector } from "../../../redux/profile-selectors";
import MyPosts from "./MyPosts";

class MyPostsContainer extends React.PureComponent {
	render() {
		return <MyPosts {...this.props} />;
	}
}

let mapStateToProps = state => {
	return {
		posts: getPostsSelector(state),
		comments: getCommentsSelector(state),
		profile: getProfileSelector(state),
	};
};

let mapDispatchToProps = dispatch => {
	return {
		addPost: addNewPost => {
			dispatch(addPostActionCreator(addNewPost));
		},
		addComment: (addNewComment, fullName) => {
			dispatch(addCommentAC(addNewComment, fullName));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
