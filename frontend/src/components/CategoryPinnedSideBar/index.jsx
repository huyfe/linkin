import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';

CategoryPinnedSideBar.propTypes = {

};

function CategoryPinnedSideBar(props) {

    const listCategoryPinnedData = [
        { image: '/images/AsideRightHomePage/catpinned1.png', href: "/", name: "Trick CSS" },
        { image: '/images/AsideRightHomePage/catpinned2.jpg', href: "/", name: "HTML" },
        { image: '/images/AsideRightHomePage/recent3.png', href: "/", name: "JS Tips" },
        { image: '/images/AsideRightHomePage/recent4.png', href: "/", name: "Form" }
    ];

    const pinIcon = "fal fa-ellipsis-h";

    const listCategoryPinned = listCategoryPinnedData.map(category => {
        return (
            <Item image={category.image} name={category.name} href={category.href} icon={pinIcon}></Item>
        );
    });

    return (
        <div className="category-pinned-sidebar">
            <h3 className="d-flex justify-content-between align-items-center">Danh mục đã ghim <i className="fal fa-thumbtack"></i></h3>
            <ul>
                {listCategoryPinned}
            </ul>
        </div>
    );
}

export default CategoryPinnedSideBar;