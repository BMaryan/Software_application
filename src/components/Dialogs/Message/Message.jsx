import React from "react";
import style from "./Message.module.css";

// Message user
const Message = props => {
	return (
		<div>
			{/* message */}
			<div className={style.message}>
				<div>
					<img src={props.img} alt='' />
				</div>
				<div className={style.block_message}>
					<div>
						<div className={style.name}>{props.name}</div>
						<div className={style.days_muted}>
							{props.wroteDaysAgo}
						</div>
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
