import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={style.navbar}>
			<ul className={style.nav}>
				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to='/profile'>
						Profile
					</NavLink>
				</li>

				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to='/dialogs'>
						Messages
					</NavLink>
				</li>

				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to='/users'>
						Users
					</NavLink>
				</li>

				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to='/news'>
						News
					</NavLink>
				</li>

				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to='/music'>
						Music
					</NavLink>
				</li>

				{/* <li className={style.item}>
					<NavLink
						className={style.link}
						activeClassName={style.active}
						to='/settings'>
						Settings
					</NavLink>
				</li> */}

				<li className={style.item}>
					<NavLink className={style.link} activeClassName={style.active} to='/login'>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
