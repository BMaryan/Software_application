import React, { useState } from "react";
import { reduxForm } from "redux-form";
import style from "./SideBar.module.css";
import SideBarData from "./SideBarData";

const SideBarDataForm = ({ setEditMode }) => {
	return (
		<form>
			<div>
				<button
					className={style.button_edit_details}
					onClick={() => {
						setEditMode(false);
					}}>
					Save
				</button>
			</div>
		</form>
	);
};

const SideBarDataFormRedux = reduxForm({ form: "sideBar" })(SideBarDataForm);

const SideBar = props => {
	const [editMode, setEditMode] = useState(false);

	return (
		<div className={style.side_bar}>
			<div className={style.wrapper_side_bar}>
				<div className={style.side_bar_title}>About myself</div>

				<div className={style.side_bar_content}>
					{editMode ? (
						<SideBarDataFormRedux profile={props.profile} setEditMode={setEditMode} />
					) : (
						<SideBarData profile={props.profile} setEditMode={setEditMode} isOwner={props.isOwner} />
					)}
				</div>
			</div>
		</div>
	);
};

export default SideBar;
