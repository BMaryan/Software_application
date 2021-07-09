import React from "react";
import style from "../Users.module.css";
import userPhoto from "../../../assets/images/user_photo.jpg";
import { NavLink } from "react-router-dom";

const buttonFollowed = (followingInProgress, user, followUnfollow, text, addedFriend) => {
	return (
		<button
			disabled={followingInProgress.some(id => id === user.id)}
			className={style.user_button}
			onClick={() => {
				followUnfollow(user.id);
				if (!user.followed) {
					addedFriend(user);
				}
			}}>
			{text}
		</button>
	);
};

const User = ({ user, followingInProgress, unfollow, follow, addedFriends }) => {
	return (
		<div key={user.id} className={style.user}>
			<div className={style.wrapper_user}>
				<img
					className={style.user_cover}
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5vLBH3Npz2mxJ8aaPSOiMU2AiPLsnnv8nxCObjgoiMfrqyKThENMVnsTqYj0ov4xulI&usqp=CAU'
					alt=''
				/>

				<div className={style.user_line_location}>
					<div className={style.user_info}>
						<div>
							<img className={style.user_info_avatarka} src={user.photos.small != null ? user.photos.small : userPhoto} alt='' />
						</div>
					</div>

					<div className={style.user_location}>
						<div>Ukraine</div>
						<div>Lviv</div>
					</div>
				</div>

				<div>
					<div className={style.user_info_fullname}>
						<NavLink to={"/profile/" + user.id}>{user.name}</NavLink>
					</div>

					<div className={style.user_status}>{user.status}</div>

					{user.followed
						? buttonFollowed(followingInProgress, user, unfollow, "Unfollow", addedFriends)
						: buttonFollowed(followingInProgress, user, follow, "Follow", addedFriends)}
				</div>
			</div>
		</div>
	);
};

export default User;
