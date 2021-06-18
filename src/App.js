import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
// import { authUser } from "./redux/auth-reducer";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import Timeline from "./components/Profile/ProfileInfo/Timeline/Timeline";
import About from "./components/Profile/ProfileInfo/About/About";
import Album from "./components/Profile/ProfileInfo/Album/Album";
import Friends from "./components/Profile/ProfileInfo/Friends/Friends";

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer />

				<div className='app-wrapper-content'>
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/profile' render={() => <Timeline />} />
					<Route path='/profile-about' render={() => <About />} />
					<Route path='/profile-album' render={() => <Album />} />
					<Route path='/profile-friends' render={() => <Friends />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/login' render={() => <LoginContainer />} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		initialized: state.app.initialized,
	};
};

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
