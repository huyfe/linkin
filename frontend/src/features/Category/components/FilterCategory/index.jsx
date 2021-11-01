import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

FilterCategory.propTypes = {
    
};

function FilterCategory(props) {
    return (
        <aside className="filterCategory">
            <h2>Bộ lọc</h2>
            <ul className="filterCategory__list">
                <li><a href="#">Mới nhất</a></li>
                <li><a href="#">Cũ nhất</a></li>
                <li><a href="#">Đã ghim</a></li>
                <li><a href="#">Riêng tư</a></li>
                <li><a href="#">Công khai</a></li>
                <li><a href="#">Sắp xếp từ A-Z</a></li>
                <li><a href="#">Sắp xếp từ Z-A</a></li>
            </ul>
        </aside>
    );
}

export default FilterCategory;