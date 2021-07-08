/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopHouse, faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faTwitter, faVk, faYoutube } from "@fortawesome/free-brands-svg-icons";
import style from "./SideBar.module.css";

const iconWrapper = (iconName, href, icon) => {
	return href ? (
		<div>
			<a className={iconName} href={href}>
				<FontAwesomeIcon icon={icon} />
			</a>
		</div>
	) : (
		""
	);
};

const SideBarData = props => {
	return (
		<>
			<div className={style.status}>
				{!props.profile.aboutMe ? (
					<div></div>
				) : (
					<div>
						<FontAwesomeIcon className={style.icon_work} icon={faLaptopHouse} /> {props.profile.aboutMe}
					</div>
				)}
			</div>

			<div>
				{!props.profile.lookingForAJobDescription ? (
					<div></div>
				) : (
					<div>
						<FontAwesomeIcon className={style.icon_description} icon={faAudioDescription} />
						{props.profile.lookingForAJobDescription}
					</div>
				)}
			</div>

			<div className={style.contacts}>
				{iconWrapper(style.icon_facebook, props.profile.contacts.facebook, faFacebook)}
				{iconWrapper(style.icon_github, props.profile.contacts.github, faGithub)}
				{iconWrapper(style.icon_instagram, props.profile.contacts.instagram, faInstagram)}
				{iconWrapper(style.icon_twitter, props.profile.contacts.twitter, faTwitter)}
				{iconWrapper(style.icon_vk, props.profile.contacts.vk, faVk)}
				{iconWrapper(style.icon_youtube, props.profile.contacts.youtube, faYoutube)}
			</div>

			{props.isOwner && (
				<div>
					<button
						className={style.button_edit_details}
						onClick={() => {
							props.setEditMode(true);
						}}>
						Edit details
					</button>
				</div>
			)}
		</>
	);
};

export default SideBarData;
