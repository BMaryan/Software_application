import React from "react";
import style from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

// Dialog user
const Dialog = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <li className={style.dialog}>
            <NavLink className={style.contact} activeClassName={style.active} to={path}>
                <div><img src={props.img} alt=""/></div>
                <div className={style.msg_preview}>
                    <div>
                        <div className={style.name}>{props.name}</div>
                        <div className={style.days_muted}>{props.wroteDaysAgo}</div>
                    </div>
                    <div><p>{props.message}</p></div>
                </div>
            </NavLink>
        </li>
    );
}

export default Dialog;