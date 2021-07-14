import React from "react";
import { connect } from "react-redux";
import { addCommentAC, addPostActionCreator, putImageForPost, putLikeAC } from "../../../redux/profile-reducer";
import { getCommentsSelector, getPostsSelector, getProfileSelector } from "../../../redux/profile-selectors";
import MyPosts from "./MyPosts";

class MyPostsContainer extends React.PureComponent {
	render() {
		return <MyPosts {...this.props} putImageForPost={this.props.putImageForPost} putLikeAC={this.props.putLikeAC} />;
	}
}

let mapStateToProps = state => {
	return {
		posts: getPostsSelector(state),
		comments: getCommentsSelector(state),
		profile: getProfileSelector(state),
		imgCover: state.profilePage.imgCover,
	};
};

let mapDispatchToProps = dispatch => {
	return {
		addPost: addNewPost => {
			dispatch(addPostActionCreator(addNewPost));
		},
		addComment: (addNewComment, fullName, commentId) => {
			dispatch(addCommentAC(addNewComment, fullName));
		},
		putImageForPost: img => {
			dispatch(putImageForPost(img));
		},
		putLikeAC: like => {
			dispatch(putLikeAC(like));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
