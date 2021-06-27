import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, toggleFollowingInProgress, getUsers, onPageChanged } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
	getCountUsersSelector,
	getCurrentPageSelector,
	getFollowingInProgressSelector,
	getIsFetchingSelector,
	getTotalUsersCountSelector,
	getUsersSuperSelector,
} from "../../redux/users-selectors";

class UsersContainer extends React.PureComponent {
	componentDidMount() {
		const { currentPage, getCountUsers } = this.props;
		this.props.getUsers(currentPage, getCountUsers);
	}

	onPageChanged = page => {
		const { getCountUsers } = this.props;
		this.props.onPageChanged(page, getCountUsers);
	};

	render() {
		return (
			<div>
				{this.props.isFetching ? <Preloader /> : null}

				<Users
					totalUsersCount={this.props.totalUsersCount}
					getCountUsers={this.props.getCountUsers}
					onPageChanged={this.onPageChanged}
					currentPage={this.props.currentPage}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</div>
		);
	}
}

let mapStateToProps = state => {
	return {
		users: getUsersSuperSelector(state),
		totalUsersCount: getTotalUsersCountSelector(state),
		getCountUsers: getCountUsersSelector(state),
		currentPage: getCurrentPageSelector(state),
		isFetching: getIsFetchingSelector(state),
		followingInProgress: getFollowingInProgressSelector(state),
	};
};

export default connect(mapStateToProps, {
	follow,
	unfollow,
	toggleFollowingInProgress,
	getUsers,
	onPageChanged,
})(UsersContainer);
