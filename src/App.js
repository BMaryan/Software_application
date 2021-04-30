import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header/>

          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile/>}/>
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/users" render={() => <UsersContainer />}/>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;