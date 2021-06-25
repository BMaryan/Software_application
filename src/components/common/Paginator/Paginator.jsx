import React from "react";
import style from "./Paginator.module.css";
// import style from "../../Users/Users.module.css";

const Paginator = props => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.getCountUsers);
	let arrayPages = [];

	for (let i = 1; i <= pagesCount; i++) {
		arrayPages.push(i);
		arrayPages.splice(15, i);
	}

	return (
		<div className={style.users_buttons}>
			{arrayPages.map(page => {
				return (
					<div
						key={page}
						onClick={e => {
							props.onPageChanged(page);
						}}
						className={props.currentPage === page ? style.selectedPage : style.unselectedPage}>
						{page}
					</div>
				);
			})}
		</div>
	);
};

export default Paginator;
