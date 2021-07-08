import React, { useState } from "react";
import { reduxForm } from "redux-form";
import { Input, Textarea, wrapperCreateField } from "../../common/FormsControls/FormsControls";
import style from "./SideBar.module.css";
import styles from "../../common/FormsControls/FormsControls.module.css";
import SideBarData from "./SideBarData";

const SideBarDataForm = ({ handleSubmit, setEditMode, error, ...props }) => {
	return (
		<form onSubmit={handleSubmit}>
			{wrapperCreateField("aboutMe", [], "text", "About me", Input)}
			{wrapperCreateField("lookingForAJob", [], "checkbox", "", Input, "Looking for a job")}
			{wrapperCreateField("lookingForAJobDescription", [], "text", "Looking for a job description", Textarea)}
			{Object.keys(props.profile.contacts).map(key => {
				return (
					<div key={key}>
						<b>{key}</b> : {wrapperCreateField("contacts." + key, [], "text", props.profile.contacts[key], Input)}
					</div>
				);
			})}
			{error && <div className={styles.formCommonOfError}>{error}</div>}
			<div>
				<button className={style.button_edit_details}>Save</button>
			</div>
		</form>
	);
};

const SideBarDataFormReduxForm = reduxForm({ form: "edit-profile" })(SideBarDataForm);

const SideBar = props => {
	const [editMode, setEditMode] = useState(false);

	const onSubmit = formData => {
		props.saveProfile(formData).then(() => {
			setEditMode(false);
		});
	};

	return (
		<div className={style.side_bar}>
			<div className={style.wrapper_side_bar}>
				<div className={style.side_bar_title}>About myself</div>

				<div className={style.side_bar_content}>
					{editMode ? (
						<SideBarDataFormReduxForm
							initialValues={props.profile}
							profile={props.profile}
							setEditMode={setEditMode}
							onSubmit={onSubmit}
						/>
					) : (
						<SideBarData profile={props.profile} setEditMode={setEditMode} isOwner={props.isOwner} />
					)}
				</div>
			</div>
		</div>
	);
};

export default SideBar;
