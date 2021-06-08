/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import defaultImg from "../../../assets/images/user_photo.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import { NavLink } from "react-router-dom";

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

	return (
		<div className={style.timeline_cover}>
			<div className={style.timeline_wrapper}>
				<div className={style.timeline_nav_bar}>
					<div className={style.profile_info}>
						<div>
							<img
								className={style.profile_info_avatarka}
								src={!props.profile.photos.large ? defaultImg : props.profile.photos.large}
								alt=''
							/>
						</div>
						<div className={style.profile_info_fullname}>{props.profile.fullName}</div>
						<div>
							<ProfileStatus status={props.status} updateStatus={props.updateStatus} profileId={props.profile.userId} />
						</div>
					</div>

					<div className={style.profile_menu}>
						<ul className={style.list_profile_menu}>
							<NavLinkWrapper path='/profile-timeline' el='Timeline' />
							<NavLinkWrapper path='/profile-about' el='About' />
							<NavLinkWrapper path='/profile-album' el='Album' />
							<NavLinkWrapper path='/profile-friends' el='Friends' />
						</ul>

						<div>
							<button className={style.button}>Add Friend</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
