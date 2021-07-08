/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import defaultImg from "../../../assets/images/user_photo.jpg";
import { NavLink } from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const NavLinkWrapper = props => {
	return (
		<li className={style.item}>
			<NavLink to={props.path} activeClassName={style.active}>
				{props.el}
			</NavLink>
		</li>
	);
};

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />;
	}

	const onMainPhotoSelected = event => {
		if (event.target.files.length) {
			props.savePhoto(event.target.files[0]);
		}
	};

	return (
		<div className={style.timeline_cover}>
			<div className={style.timeline_wrapper}>
				<div className={style.timeline_nav_bar}>
					<div className={style.profile_info}>
						<div className={style.content_avatarka}>
							<img
								className={style.profile_info_avatarka}
								src={!props.profile.photos.large ? defaultImg : props.profile.photos.large}
								alt=''
							/>
							<div className={style.photo_select}>
								{props.isOwner && (
									<label>
										<FontAwesomeIcon className={style.icon_camera} icon={faCamera} />
										<input type='file' onChange={onMainPhotoSelected} />
									</label>
								)}
							</div>
						</div>
						<div className={style.profile_info_fullname}>{props.profile.fullName}</div>
						<div>
							<ProfileStatusWithHooks
								status={props.status}
								isOwner={props.isOwner}
								updateStatus={props.updateStatus}
								profileId={props.profile.userId}
							/>
						</div>
					</div>

					<div className={style.profile_menu}>
						<ul className={style.list_profile_menu}>
							<NavLinkWrapper path='/profile' el='Timeline' />
							<NavLinkWrapper path='/profile-about' el='About' />
							<NavLinkWrapper path='/profile-album' el='Album' />
							<NavLinkWrapper path='/profile-friends' el='Friends' />
						</ul>

						{props.isOwner ? (
							<div style={{ display: "flex" }}>
								<div style={{ marginRight: "20px" }}>
									<b>164</b> followers
								</div>
								<div>
									<b>213</b> following
								</div>
							</div>
						) : (
							<div>
								<button className={style.button}>Add Friend</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
