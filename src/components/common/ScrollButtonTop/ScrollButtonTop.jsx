import React, { useEffect } from "react";
import style from "./ScrollButtonTop.module.css";

const ScrollButtonTop = props => {
	let scrollButton = () => {
		if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
			<div className={style.scroll_button_top + " " + style.show}>&#8593;</div>;
		} else {
			<div className={style.scroll_button_top + " " + style.hidden}>&#8593;</div>;
		}
	};

	return (
		<div>
			{document.body.scrollTop >= 0 || document.documentElement.scrollTop >= 0 ? (
				<div className={style.scroll_button_top + " " + style.show}>&#8593;</div>
			) : (
				<div className={style.scroll_button_top + " " + style.hidden}>&#8593;</div>
			)}
		</div>
	);
};

export default ScrollButtonTop;
