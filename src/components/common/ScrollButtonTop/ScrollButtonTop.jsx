import React, { useState } from "react";
import style from "./ScrollButtonTop.module.css";
import ScrollButton from "react-scroll-button";

const ScrollButtonTop = props => {
	const [visible, setVisible] = useState(true);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 10) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	};

	let scrollToTop = () => {
		window.scrollTo({
			bottom: document.documentElement.scrollIntoView,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<div className={style.scroll_button_top} onClick={scrollToTop}>
			&#8593;
		</div>
	);
};

export default ScrollButtonTop;
