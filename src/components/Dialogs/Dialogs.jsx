import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import defaultImg from "../../assets/images/user_photo.jpg";
import Preloader from "../common/Preloader/Preloader";

let maxLength50 = maxLengthCreator(50);

// form
const DialogsForm = props => {
	return (
		<form onSubmit={props.handleSubmit} className={style.message_form}>
			<div className={style.message_input}>
				<Field name='newMessageText' validate={[required, maxLength50]} placeholder='Write a message...' component={Input} />
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};

const DialogsFormRedux = reduxForm({ form: "dialogsForm" })(DialogsForm);

// Dialogs
const Dialogs = props => {
	if (!props.profile) {
		return <Preloader />;
	}

	let dialogsElements = props.dialogsPage.dialogs.map(dialog => (
		<Dialog key={dialog.id} name={dialog.name} id={dialog.id} img={dialog.img} wroteDaysAgo={dialog.wroteDaysAgo} message={dialog.message} />
	));

	let messagesElements = props.dialogsPage.messages.map(message => {
		if (props.profile.userId === message.id) {
			return (
				<div className={style.message_position}>
					<Message
						key={message.id}
						name={message.name}
						img={message.img}
						wroteDaysAgo={message.wroteDaysAgo}
						message={message.message}
						profile={props.profile}
					/>
				</div>
			);
		}

		console.log(props);

		return <Message key={message.id} name={message.name} img={message.img} wroteDaysAgo={message.wroteDaysAgo} message={message.message} />;
	});

	let addNewMessage = (values, id, name, img) => {
		if (props.profile) {
			let profileImg = props.profile.photos.small ? props.profile.photos.small : defaultImg;
			props.addMessage(props.profile.userId, props.profile.fullName, profileImg, values.newMessageText);
		}
	};

	console.log(props);

	return (
		<div className={style.container}>
			<div className={style.dialogs}>
				{/* title */}
				<h2 className={style.title}>Dialogs</h2>

				<div className={style.dialogs_position}>
					{/* dialogs */}
					<div className={style.wrapper__dialogs}>
						<ul>{dialogsElements}</ul>
					</div>

					{/* messages */}
					<div className={style.wrapper__messages}>
						<div className={style.chat_message}>{messagesElements}</div>

						{/* send_message */}
						<div className={style.create_message}>
							<div>
								<img src={props.profile && props.profile.photos.small ? props.profile.photos.small : defaultImg} alt='' />
							</div>

							<DialogsFormRedux onSubmit={addNewMessage} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
