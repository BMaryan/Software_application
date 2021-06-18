import React, { useState } from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import SideBar from "./SideBar/SideBar";
import Preloader from "../common/Preloader/Preloader";

const Profile = props => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<main className={style.profile}>
			<div className={style.container}>
				<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

				<div className={style.profile_content}>
					<SideBar profile={props.profile} />
					<MyPostsContainer />
				</div>
			</div>
		</main>
	);
};

export default Profile;
