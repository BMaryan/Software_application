import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, toggleFollowingInProgress, getUsers, onPageChanged, addedFriends } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
	getCountPagesSelector,
	getCountUsersSelector,
	getCurrentPageSelector,
	getFollowingInProgressSelector,
	getIsFetchingSelector,
	getTotalUsersCountSelector,
	getUsersSuperSelector,
} from "../../redux/users-selectors";

class UsersContainer extends React.PureComponent {
	componentDidMount() {
		const { currentPage, getCountPages } = this.props;
		this.props.getUsers(currentPage, getCountPages);
	}

	onPageChanged = page => {
		const { getCountPages } = this.props;
		this.props.onPageChanged(page, getCountPages);
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
					addedFriends={this.props.addedFriends}
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
		getCountPages: getCountPagesSelector(state),
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
	addedFriends,
})(UsersContainer);
