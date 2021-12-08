import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';

SuggestFollowSideBar.propTypes = {

};

function SuggestFollowSideBar(props) {

    const listUserData = [
        { id: 0, image: '/images/Users/anhbia.jpg', href: "/profile/tran-quoc-huy", name: "Trần Quốc Huy" },
        { id: 1, image: '/images/Users/anhbia.jpg', href: "/profile/lam-nguyen", name: "Lam Nguyễn" },
        { id: 2, image: '/images/Users/anhbia.jpg', href: "/profile/ba-dat", name: "Đỗ Bá Đạt" },
        { id: 3, image: '/images/Users/anhbia.jpg', href: "/profile/vo-ngoc-hai", name: "Võ Ngọc Hải" },
        { id: 4, image: '/images/Users/anhbia.jpg', href: "/profile/le-quoc-lap", name: "Lê Quốc Lập" }
    ];
    const iconUserVoice = "fal fa-plus-circle";
    const listUser = listUserData.map(group => {
        return (
            <Item key={group.id} image={group.image} name={group.name} href={group.href} icon={iconUserVoice}></Item>
        );
    });

    return (
        <div className="suggest-follow-sidebar">
            <h3>Đề xuất theo dõi</h3>
            <ul>
                {listUser}
            </ul>
        </div>
    );
}

export default SuggestFollowSideBar;