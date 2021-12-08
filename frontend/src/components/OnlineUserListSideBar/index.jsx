import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';

OnlineUserListSideBar.propTypes = {

};

function OnlineUserListSideBar(props) {

    const listOnlineUserData = [
        { id: 0, image: '/images/Users/anhbia.jpg', href: "/profile/tran-quoc-huy", name: "Trần Quốc Huy" },
        { id: 1, image: '/images/Users/anhbia.jpg', href: "/profile/lam-nguyen", name: "Lam Nguyễn" },
        { id: 2, image: '/images/Users/anhbia.jpg', href: "/profile/ba-dat", name: "Đỗ Bá Đạt" },
        { id: 3, image: '/images/Users/anhbia.jpg', href: "/profile/vo-ngoc-hai", name: "Võ Ngọc Hải" },
        { id: 4, image: '/images/Users/anhbia.jpg', href: "/profile/le-quoc-lap", name: "Lê Quốc Lập" }
    ];

    const onlineIcon = "fas fa-circle";

    const listOnlineUser = listOnlineUserData.map(user => {
        return (
            <Item key={user.id} image={user.image} name={user.name} href={user.href} icon={onlineIcon}></Item>
        );
    });

    return (
        <div className="online-user-sidebar">
            <h3>Danh sách online</h3>
            <ul>
                {listOnlineUser}
            </ul>
        </div>
    );
}

export default OnlineUserListSideBar;