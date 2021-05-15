import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = props => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />

				<div className='app-wrapper-content'>
					<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/users' render={() => <UsersContainer />} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
