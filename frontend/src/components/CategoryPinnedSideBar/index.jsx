import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';

CategoryPinnedSideBar.propTypes = {

};

function CategoryPinnedSideBar(props) {

    const listCategoryPinnedData = [
        { id: 0, image: '/images/AsideRightHomePage/catpinned1.png', href: "/", name: "Trick CSS" },
        { id: 1, image: '/images/AsideRightHomePage/catpinned2.jpg', href: "/", name: "HTML" },
        { id: 2, image: '/images/AsideRightHomePage/recent3.png', href: "/", name: "JS Tips" },
        { id: 3, image: '/images/AsideRightHomePage/recent4.png', href: "/", name: "Form" }
    ];

    const pinIcon = "fal fa-ellipsis-h";

    const listCategoryPinned = listCategoryPinnedData.map(category => {
        return (
            <Item key={category.id} image={category.image} name={category.name} href={category.href} icon={pinIcon}></Item>
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