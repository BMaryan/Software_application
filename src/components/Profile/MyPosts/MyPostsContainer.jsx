import { connect } from "react-redux";
import { addCommentAC, addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		comments: state.profilePage.comments,
		profile: state.profilePage.profile,
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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
