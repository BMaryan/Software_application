import { connect } from "react-redux";
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	};
};

let mapDispatchToProps = dispatch => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator());
		},
		updateNewMessageText: messageInput => {
			dispatch(updateNewMessageTextActionCreator(messageInput));
		},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
