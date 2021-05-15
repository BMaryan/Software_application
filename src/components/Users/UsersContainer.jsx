/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.getCountUsers}`, {
				withCredentials: true,
			})
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = page => {
		this.props.setCurrentPage(page);
		this.props.toggleIsFetching(true);

		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.getCountUsers}`, {
				withCredentials: true,
			})
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return (
			<div>
				{/* <ProfileInfo /> */}

				{this.props.isFetching ? (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
						}}>
						<Preloader />
					</div>
				) : null}

				<Users
					totalUsersCount={this.props.totalUsersCount}
					getCountUsers={this.props.getCountUsers}
					onPageChanged={this.onPageChanged}
					currentPage={this.props.currentPage}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</div>
		);
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		totalUsersCount: state.usersPage.totalUsersCount,
		getCountUsers: state.usersPage.getCountUsers,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	};
};

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
})(UsersContainer);
