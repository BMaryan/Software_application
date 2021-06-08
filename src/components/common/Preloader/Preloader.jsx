import React from "react";
import preloader from "../../../assets/images/Spin-1s-64px.svg";
import style from "./Preloader.module.css";

let Preloader = props => {
	return (
		<div className={style.preloader}>
			<img src={preloader} alt='' />
		</div>
	);
};

export default Preloader;
