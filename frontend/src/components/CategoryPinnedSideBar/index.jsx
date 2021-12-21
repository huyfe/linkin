import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Item from '../Item/index';
import { useSelector } from 'react-redux';

CategoryPinnedSideBar.propTypes = {

};

function CategoryPinnedSideBar(props) {

    const listCategoryData = useSelector(state => state.categoriesUser);

    const listCategoryPinnedData = [...listCategoryData].filter(
        (category) => category.pin === true
    );

    const pinIcon = "fal fa-ellipsis-h";

    const listCategoryPinned = listCategoryPinnedData.map(category => {
        return (
            <Item key={category.id} image={category.image} name={category.title} href={`/categories/${category.slug}`} icon={pinIcon}></Item>
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