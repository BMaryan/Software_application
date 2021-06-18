import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { faSignOutAlt, faSortDown, faCog, faArrowAltCircleRight, faAdjust } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLinkWrapper = props => {
	return (
		<li className={style.item}>
			<NavLink className={style.link} activeClassName={style.active} to={props.path}>
				{props.el}
			</NavLink>
		</li>
	);
};

const Navbar = props => {
	return (
		<nav className={style.navbar}>
			<ul className={style.nav}>
				<NavLinkWrapper path='/profile' el='Profile' />
				<NavLinkWrapper path='/dialogs' el='Messages' />
				<NavLinkWrapper path='/users' el='Users' />
				<NavLinkWrapper path='/news' el='News' />
				<NavLinkWrapper path='/music' el='Music' />

				<li className={style.item}>
					{props.isAuth ? (
						<ul className={style.list + " " + style.link + " " + style.item_downList}>
							{props.login}
							<FontAwesomeIcon className={style.icon_arrowDown} icon={faSortDown} />

							<ul className={style.item_list}>
								<li className={style.item}>
									<FontAwesomeIcon className={style.icon_setings} icon={faCog} />
									<NavLink className={style.link} activeClassName={style.active} to='/setings'>
										Setings
									</NavLink>
									<FontAwesomeIcon className={style.icon_arrowRight} icon={faArrowAltCircleRight} />
								</li>

								<li className={style.item}>
									<FontAwesomeIcon className={style.icon_display} icon={faAdjust} />
									<NavLink className={style.link} activeClassName={style.active} to='/display&accessibility'>
										Display & Accessibility
									</NavLink>
									<FontAwesomeIcon className={style.icon_arrowRight} icon={faArrowAltCircleRight} />
								</li>

								<li className={style.item}>
									<FontAwesomeIcon className={style.icon_signOut} icon={faSignOutAlt} />
									<span onClick={props.logout} className={style.link}>
										Logout
									</span>
								</li>
							</ul>
						</ul>
					) : (
						<NavLink className={style.link} activeClassName={style.active} to='/login'>
							Login
						</NavLink>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
