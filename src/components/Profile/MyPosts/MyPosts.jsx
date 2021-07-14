import React, { useState } from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { faImages, faVideo, faMap, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import defaultImg from "../../../assets/images/user_photo.jpg";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import PutImageBlock from "./PutImageBlock/PutImageBlock";

let maxLength10 = maxLengthCreator(10);

// form
const MyPostsForm = props => {
	let [putImage, setPutImage] = useState(false);

	return (
		<form onSubmit={props.handleSubmit} className={style.wrapper_post}>
			<div className={style.form_group}>
				<div>
					<img src={!props.profile.photos.small ? defaultImg : props.profile.photos.small} alt='' />
				</div>
				<div>
					<Field name='addNewPost' validate={[required, maxLength10]} placeholder='Write what you wish' component={Textarea} />
				</div>
			</div>

			<div className={style.tools}>
				<ul className={style.publishing_tools}>
					<li>
						<FontAwesomeIcon icon={faEdit} />
					</li>
					<li>
						<FontAwesomeIcon
							onClick={() => {
								setPutImage(true);
							}}
							icon={faImages}
						/>
					</li>
					<li>
						<FontAwesomeIcon icon={faVideo} />
					</li>
					<li>
						<FontAwesomeIcon icon={faMap} />
					</li>
				</ul>
				{putImage ? <PutImageBlock setPutImage={setPutImage} putImageForPost={props.putImageForPost} imgCover={props.imgCover} /> : <></>}

				<button>Publish</button>
			</div>
		</form>
	);
};

const MyPostsFormRedux = reduxForm({
	form: "addMyPosts",
})(MyPostsForm);

// my posts
const MyPosts = React.memo(props => {
	let postsElements = [...props.posts]
		.reverse()
		.map(post => (
			<Post
				key={post.id}
				message={post.message}
				currentLikes={post.currentLikes}
				imgProfile={props.profile.photos.small}
				imgCover={post.imgCover}
				fullName={props.profile.fullName}
				addComment={props.addComment}
				comments={props.comments}
				putLikeAC={props.putLikeAC}
			/>
		));

	let onAddPost = values => {
		props.addPost(values.addNewPost);
	};

	return (
		<div className={style.container}>
			<div className={style.create_post}>
				<MyPostsFormRedux {...props} onSubmit={onAddPost} />
			</div>

			<div className={style.posts}>{postsElements}</div>
		</div>
	);
});

export default MyPosts;
