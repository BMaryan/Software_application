import React from "react";
import { connect } from "react-redux";
import { ProfileContent } from "../../Profile";
import ProfileInfo from "../ProfileInfo";
import About from "./About";

class AboutContainer extends React.Component {
	render() {
		return <About {...this.props} />;
	}
}

const mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
	};
};

export default connect(mapStateToProps, null)(AboutContainer);
