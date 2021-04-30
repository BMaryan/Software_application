import React from "react";
import Navbar from "./Navbar/Navbar";
import style from "./Header.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header className={style.header}>
          <div className={style.container}>
            <div>
              <a href="/profile"><img className={style.logo} src="https://themified.com/friend-finder/images/logo.png" alt="" /></a>
            </div>

            <div className={style.form_group}>
              <FontAwesomeIcon className={style.search_icon} icon={faSearch} size="sm" />
              <input type="search" placeholder="Search friends, photos, videos" />
            </div>

            <div>
              <Navbar/>
            </div>
          </div>
      </header>
    );
}

export default Header;