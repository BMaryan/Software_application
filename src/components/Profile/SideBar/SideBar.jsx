import React from "react";
import style from "./SideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopHouse, faAudioDescription } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SideBar = props => {
	return (
		<div className={style.side_bar}>
			<div className={style.wrapper_side_bar}>
				<div className={style.side_bar_title}>About myself</div>

				<div className={style.side_bar_content}>
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
						<div>
							<a className={style.icon_facebook} href={props.profile.contacts.facebook}>
								<FontAwesomeIcon icon={faFacebook} />
							</a>
						</div>
						<div>
							<a className={style.icon_youtube} href={props.profile.contacts.youtube}>
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</div>
						<div>
							<a className={style.icon_twitter} href={props.profile.contacts.twitter}>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</div>
					</div>

					<div>
						<button className={style.button_edit_details}>Edit details</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
