import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';

RecentSideBar.propTypes = {

};

function RecentSideBar(props) {

    const listRecentData = [
        { id: 0, image: '/images/AsideRightHomePage/recent1.png', href: "/", name: "UI/UX" },
        { id: 1, image: '/images/AsideRightHomePage/recent2.png', href: "/", name: "Nguyên lí thiết kế cơ bản" },
        { id: 2, image: '/images/AsideRightHomePage/recent3.png', href: "/", name: "UI/UX" },
        { id: 3, image: '/images/AsideRightHomePage/recent4.png', href: "/", name: "CSS" }
    ];
    const listRecent = listRecentData.map(item => {
        return (
            <Item key={item.id} image={item.image} name={item.name} href={item.href}></Item>
        );
    });

    return (
        <div className="recent-sidebar">
            <h3 className="d-flex justify-content-between align-items-center">Gần đây <i className="fal fa-calendar-minus"></i></h3>
            <ul>
                {listRecent}
            </ul>
        </div>
    );
}

export default RecentSideBar;