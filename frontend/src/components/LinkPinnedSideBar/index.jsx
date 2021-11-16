import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';

LinkPinnedSideBar.propTypes = {

};

function LinkPinnedSideBar(props) {

    const listLinkPinnedData = [
        { id: 0, image: '/images/AsideRightHomePage/catpinned1.png', href: "/", name: "Trick CSS" },
        { id: 1, image: '/images/AsideRightHomePage/catpinned2.jpg', href: "/", name: "HTML" },
        { id: 2, image: '/images/AsideRightHomePage/recent3.png', href: "/", name: "JS Tips" },
        { id: 3, image: '/images/AsideRightHomePage/recent4.png', href: "/", name: "Form" }
    ];

    const pinIcon = "fal fa-ellipsis-h";

    const listLinkPinned = listLinkPinnedData.map(link => {
        return (
            <Item key={link.id} image={link.image} name={link.name} href={link.href} icon={pinIcon}></Item>
        );
    });

    return (
        <div className="link-pinned-sidebar">
            <h3 className="d-flex justify-content-between align-items-center">Link đã ghim <i className="fal fa-thumbtack"></i></h3>
            <ul>
                {listLinkPinned}
            </ul>
        </div>
    );
}

export default LinkPinnedSideBar;