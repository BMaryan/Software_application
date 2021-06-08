import React from "react";
import style from "./Message.module.css";
import defaultImg from "../../../assets/images/user_photo.jpg";

// Message user
const Message = props => {
	return (
		<div>
			{/* message */}
			<div className={style.message}>
				<div>
					{props.profile ? <img src={defaultImg} alt='' /> : <img src={props.img} alt='' />}
					{/* {props.profile && props.profile.photos.small ? <img src={props.profile.photos.small} alt='' /> : <img src={props.img} alt='' />} */}
				</div>
				<div className={style.block_message}>
					<div>
						<div className={style.name}>{props.profile ? props.profile.fullName : props.name}</div>
						<div className={style.days_muted}>{props.wroteDaysAgo}</div>
					</div>
					<div>
						<p>{props.message}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;
