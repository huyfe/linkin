import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import CategoryItem from '../CategoryItem';

ListCategory.propTypes = {
    
};

function ListCategory(props) {
    return (
        <div className="listCategory">
            <div className="listCategory__item">
                <CategoryItem />
            </div>
            <div className="listCategory__item">
                <CategoryItem />
            </div>
            <div className="listCategory__item">
                <CategoryItem />
            </div>
            <div className="listCategory__item">
                <CategoryItem />
            </div>
            <div className="listCategory__item">
                <CategoryItem />
            </div>
            <div className="listCategory__item">
                <CategoryItem />
            </div>
            <div className="listCategory__item">
                <CategoryItem />
            </div>
        </div>
    );
}

export default ListCategory;