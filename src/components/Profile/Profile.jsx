import React from "react";
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
				<ProfileInfo
					profile={props.profile}
					savePhoto={props.savePhoto}
					isOwner={props.isOwner}
					status={props.status}
					updateStatus={props.updateStatus}
					users={props.users}
				/>

				<div className={style.profile_content}>
					<SideBar profile={props.profile} isOwner={props.isOwner} saveProfile={props.saveProfile} />
					<MyPostsContainer />
				</div>
			</div>
		</main>
	);
};

export default Profile;
