import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

FilterLink.propTypes = {

};

function FilterLink(props) {
    return (
        <aside className="filterLink">
            <h2>Bộ lọc</h2>
            <ul className="filterLink__list">
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

export default FilterLink;