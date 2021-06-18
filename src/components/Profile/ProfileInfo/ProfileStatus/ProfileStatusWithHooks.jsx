import React, { useState, useEffect } from "react";

const ProfileStatusWithHooks = props => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = event => {
		setStatus(event.currentTarget.value);
	};

	return (
		<div>
			{!editMode ? (
				<div>
					<div onDoubleClick={activateEditMode}>{props.status}</div>
				</div>
			) : (
				<div>
					<input onChange={onStatusChange} autoFocus={true} type='text' onBlur={deactivateEditMode} value={status} />
				</div>
			)}
		</div>
	);
};

export default ProfileStatusWithHooks;
