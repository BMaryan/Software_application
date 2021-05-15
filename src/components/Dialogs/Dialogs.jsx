import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

// Dialogs
const Dialogs = props => {
	let dialogsElements = props.dialogsPage.dialogs.map(dialog => (
		<Dialog
			key={dialog.id}
			name={dialog.name}
			id={dialog.id}
			img={dialog.img}
			wroteDaysAgo={dialog.wroteDaysAgo}
			message={dialog.message}
		/>
	));

	let messagesElements = props.dialogsPage.messages.map(message => (
		<Message
			key={message.id}
			name={message.name}
			img={message.img}
			wroteDaysAgo={message.wroteDaysAgo}
			message={message.message}
		/>
	));

	let addMessage = () => {
		props.addMessage();
	};

	let onMessageChange = event => {
		let messageInput = event.target.value;
		props.updateNewMessageText(messageInput);
	};

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
						<div className={style.chat_message}>
							{messagesElements}
						</div>

						{/* send_message */}
						<div className={style.create_message}>
							<div>
								<img
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuRJOEamJLWZhmH8AY8iD8EkRyAMkZVOWwA&usqp=CAU'
									alt=''
								/>
							</div>
							<div className={style.message_input}>
								<input
									type='text'
									value={props.dialogsPage.newMessageText}
									onChange={onMessageChange}
									placeholder='Write a message...'
								/>
							</div>
							<div>
								<button onClick={addMessage}>Send</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
