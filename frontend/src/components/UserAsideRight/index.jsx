import React from 'react';
import './style.scss';
// import Item from '../Item/index';
import { Link } from 'react-router-dom';

function UserAsideRight() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    // Email: huytran@gmail.com  
    // Mật khẩu: huytran0123456
    const userInfo = {
        name: "Không Tên",
        avatar: "images/Timeline/huythanhxuan.jpg",
        avatar2: "images/Users/avatar.png",
    }
    return (
        <div className="user-sidebar">
            {(dataUsers) ? (
                <div className="user__info d-flex justify-content-start align-items-center">
                    <div className="avatar">
                        <Link to="/profile/tran-quoc-huy" ><img className="img-fuild" src={userInfo.avatar} alt="" /></Link>
                    </div>
                    <Link to="/profile/tran-quoc-huy" className="name">{dataUsers.Fullname}</Link>
                </div>
            ) : (
                <div className="user__info d-flex justify-content-start align-items-center">
                    <div className="avatar">
                        <Link to="/profile/tran-quoc-huy" ><img className="img-fuild" src={userInfo.avatar2} alt="" /></Link>
                    </div>
                    <Link to="/profile/tran-quoc-huy" className="name">{userInfo.name}</Link>
                </div>
            )}

            <ul>
                <li className="item">
                    <Link to="/links">
                        <i class="fal fa-link"></i>Link của tôi
                    </Link>
                </li>
                <li class="item">
                    <Link to="/categories">
                        <i class="fal fa-folders"></i>Danh mục của tôi
                    </Link>
                </li>
                <li class="item">
                    <Link to="/history">
                        <i className="fal fa-history"></i>Lịch sử hoạt động
                    </Link>
                </li>
                <li className="item">
                    <Link to="/following">
                        <i className="fal fa-users"></i>Đang theo dõi
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default UserAsideRight;