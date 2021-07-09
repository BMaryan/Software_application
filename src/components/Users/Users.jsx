import React from "react";
import style from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({ currentPage, totalUsersCount, getCountUsers, onPageChanged, ...props }) => {
	return (
		<div className={style.users}>
			<Paginator
				users={props.users}
				currentPage={currentPage}
				totalItemsCount={totalUsersCount}
				portionSize={getCountUsers}
				onPageChanged={onPageChanged}
			/>

			<div className={style.users_wrapper}>
				{props.users.map(user => (
					<User
						key={user.id}
						user={user}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow}
						addedFriends={props.addedFriends}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
