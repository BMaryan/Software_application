import React from "react";
import style from "../MyPosts.module.css";

const PutImageBlock = props => {
	let putImageForPostFunc = event => {
		if (event.target.files && event.target.files.length) {
			props.putImageForPost(URL.createObjectURL(event.target.files[0]));
		}
	};

	return (
		<div className={style.blockChangeImage}>
			<input type='file' onChange={putImageForPostFunc} placeholder='Change image your post' />
			<div className={style.container_for_image}>
				{props.imgCover ? <img src={props.imgCover} alt='' /> : <></>}

				<button
					className={style.button_delete_image}
					onClick={() => {
						props.putImageForPost(null);
					}}
					disabled={!props.imgCover}>
					X
				</button>
			</div>
			<button
				onClick={() => {
					props.setPutImage(false);
				}}>
				Save
			</button>
		</div>
	);
};

export default PutImageBlock;
