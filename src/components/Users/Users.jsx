/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./Users.module.css";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import * as axios from "axios";
import userPhoto from "../../assets/images/user_photo.jpg";

let Users = (props) => {
    if (props.users.length === 0) {
        // axios.get("https://social-network.samuraijs.com/api/1.0/users")
        //     .then(response => {
        //         props.setUsers(response.data.items);
        //     });

        props.setUsers([
            {id: 1, status: "I like football!", followed: true, fullName: "Anya", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpziMqJ94SJUk1xcZ-x0yEVcTpJnrg-VX0qQ&usqp=CAU", imgCover: "https://themified.com/friend-finder/images/covers/10.jpg", location: {country: "Ukraine", city: "Lviv"}},
            {id: 2, status: "I'm a boss!", followed: false, fullName: "Oleg", img: "https://themified.com/friend-finder/images/users/user-8.jpg", imgCover: "https://themified.com/friend-finder/images/covers/6.jpg", location: {country: "USA", city: "Washington"}}
        ]);
    }

    return (
        <div>
            <ProfileInfo />
            
            <div className={style.users}>
                <div className={style.users_wrapper}>
                    {props.users.map(user =>
                        <div key={user.id} className={style.user}>
                            <div className={style.wrapper_user}>
                                <img className={style.user_cover} src={user.imgCover} alt=""/>
                                    
                                <div className={style.user_line_location}>
                                    <div className={style.user_info}>
                                        <div><img className={style.user_info_avatarka} src={user.img} alt=""/></div>
                                        {/* <div><img className={style.user_info_avatarka} src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/></div> */}
                                        <div className={style.user_info_fullname}><a href="">{user.fullName}</a></div>
                                    </div>

                                    <div className={style.user_location}>
                                        <div>{user.location.country}</div>
                                        <div>{user.location.city}</div>
                                    </div>
                                </div>

                                <div>
                                    <div className={style.user_status}>{user.status}</div>
                                    {user.followed
                                        ? <button className={style.user_button} onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                        : <button className={style.user_button} onClick={() => {props.follow(user.id)}}>Follow</button>}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Users;