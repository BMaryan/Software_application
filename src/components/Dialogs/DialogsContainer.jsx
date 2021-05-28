import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
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

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
