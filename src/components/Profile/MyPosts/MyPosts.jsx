import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { faImages, faVideo, faMap, faEdit} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(post => <Post key={post.id} message={post.message} currentLikes={post.currentLikes} imgProfile={post.imgProfile} imgCover={post.imgCover} />)
        .reverse();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let messageInput = event.target.value;
        props.updateNewPostText(messageInput);
    }

    return (
        <div>
            <div className={style.create_post}>
                <div className={style.wrapper_post}>
                    <div className={style.form_group}>
                        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gi5CDty4l6bxTwEBIBYrIFNuMrZNsb0COw&usqp=CAU" alt=""/></div>
                        <div><textarea onChange={onPostChange} value={props.newPostText} placeholder="Write what you wish"/></div>
                    </div>

                    <div className={style.tools}>
                        <ul className={style.publishing_tools}>
                            <li><FontAwesomeIcon icon={faEdit}/></li>
                            <li><FontAwesomeIcon icon={faImages}/></li>
                            <li><FontAwesomeIcon icon={faVideo}/></li>
                            <li><FontAwesomeIcon icon={faMap}/></li>
                        </ul>

                        <button onClick={onAddPost}>Publish</button>
                    </div>
                </div>
            </div>

            <div className={style.posts}>
                {postsElements} 
            </div>
        </div>
    );
}

export default MyPosts;