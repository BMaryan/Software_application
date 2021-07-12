import React from "react";
import "./App.css";
import { Route, withRouter } from "react-router";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";
import Timeline from "./components/Profile/ProfileInfo/Timeline/Timeline";
import About from "./components/Profile/ProfileInfo/About/About";
import Album from "./components/Profile/ProfileInfo/Album/Album";
import Friends from "./components/Profile/ProfileInfo/Friends/Friends";
import ScrollButtonTop from "./components/common/ScrollButtonTop/ScrollButtonTop";
import { initializeApp } from "./redux/app-reducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"));

class App extends React.Component {
	catchAllUnhandledErrors = promiserejectionEvent => {
		alert("Some error occured");
	};

	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandlerejection", this.catchAllUnhandledErrors);
	}

	componentWillUnmount() {
		window.removeEventListener("unhandlerejection", this.catchAllUnhandledErrors);
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer />

				<div className='app-wrapper-content'>
					<Switch>
						<Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
						<Route exact path='/' render={() => <Redirect to='/profile' />} />
						<Route path='/profile' render={() => <Timeline />} />
						<Route path='/profile-about' render={() => <About />} />
						<Route path='/profile-album' render={() => <Album />} />
						<Route path='/profile-friends' render={() => <Friends />} />
						<Route path='/dialogs' render={withSuspense(DialogsContainer)} />
						<Route path='/users' render={withSuspense(UsersContainer)} />
						<Route path='/login' render={withSuspense(LoginContainer)} />
						<Route
							path='*'
							render={() => (
								<div className='not_found_page'>
									<FontAwesomeIcon className='icon_for_not_found_page' icon={faFrown} size='10x' />
									<span>404</span>
									<div>Not found</div>
								</div>
							)}
						/>
					</Switch>
				</div>
				<ScrollButtonTop />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		initialized: state.app.initialized,
	};
};

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainAppContainer = props => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<AppContainer />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	);
};

export default MainAppContainer;
