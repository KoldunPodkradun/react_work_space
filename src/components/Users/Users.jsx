import React from 'react';
import Style from "./Users.module.css";
import avatarDefault from "../../assets/img/logo.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            <ul className={Style.pagination}>
                {pages.map(p => {
                    return <li className={props.currentPage === p && Style.selected}
                               onClick={() => {
                                   props.onPageChanged(p);
                               }}>{p}</li>
                })}
            </ul>
        </div>
        {
            props.users.map(u =>
                <div key={u.id} className={Style.user}>
                    <div className={Style.item_left}>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={Style.avatar} src={u.photos.small !== null ? u.photos.small : avatarDefault}
                                 alt="avatar"/>
                        </NavLink>
                        {u.followed
                            ? <button className={Style.unfollow}
                                      disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unFollow(u.id)
                                      }}>UnFollow</button>
                            : <button className={Style.follow}
                                      disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow</button>
                        }
                    </div>
                    <div className={Style.item_right}>
                        <div className={Style.name}>{u.name}</div>
                    </div>
                </div>)
        }
    </div>
};

export default Users;