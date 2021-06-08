import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import { setUser } from "../../redux/profile-reducer";
import Dialogs from "./Dialogs";

class DialogsContainer extends React.Component {
	render() {
		return <Dialogs {...this.props} profile={this.props.profile} />;
	}
}

let mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
		profile: state.profilePage.profile,
	};
};

let mapDispatchToProps = dispatch => {
	return {
		addMessage: newMessageText => {
			dispatch(addMessageActionCreator(newMessageText));
		},
		setUser: userId => {
			dispatch(setUser(userId));
		},
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(DialogsContainer);
