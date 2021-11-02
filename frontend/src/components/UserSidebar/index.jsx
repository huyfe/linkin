import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';
import { Link } from 'react-router-dom';

UserSideBar.propTypes = {

};

function UserSideBar(props) {
    const userInfo = {
        name: "Quốc Huy",
        avatar: "images/Timeline/huythanhxuan.jpg",
    }
    return (
        <div className="user-sidebar">
            <div className="user__info d-flex justify-content-start align-items-center">
                <div className="avatar">
                    <Link to="/users" ><img className="img-fuild" src={userInfo.avatar} alt="" /></Link>
                </div>
                <Link to="/users" className="name">{userInfo.name}</Link>
            </div>

            <ul>
                <li class="item">
                    <Link to="/links">
                        <i class="fal fa-link"></i>Link của tôi
                    </Link>
                </li>
                <li class="item">
                    <Link to="/history">
                        <i className="fal fa-history"></i>Lịch sử hoạt động
                    </Link>
                </li>
                <li class="item">
                    <Link to="/following">
                        <i className="fal fa-users"></i>Đang theo dõi
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default UserSideBar;