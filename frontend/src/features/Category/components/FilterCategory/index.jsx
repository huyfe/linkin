import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link, useSearchParams } from 'react-router-dom';

FilterCategory.propTypes = {
    
};

function FilterCategory(props) {
    let [searchParams] = useSearchParams();
    let param = searchParams.get("filterSort");

    return (
        <aside className="filterCategory">
            <h2>Bộ lọc</h2>
            <ul className="filterCategory__list">
                <li><Link to="?filterSort=new" className={param === "new" ? "active" : ""} >Mới nhất</Link></li>
                <li><Link to="?filterSort=old" className={param === "old" ? "active" : ""} >Cũ nhất</Link></li>
                <li><Link to="?filterSort=pin" className={param === "pin" ? "active" : ""} >Đã ghim</Link></li>
                <li><Link to="?filterSort=private" className={param === "private" ? "active" : ""} >Riêng tư</Link></li>
                <li><Link to="?filterSort=public" className={param === "public" ? "active" : ""} >Công khai</Link></li>
                <li><Link to="?filterSort=az" className={param === "az" ? "active" : ""} >Sắp xếp từ A-Z</Link></li>
                <li><Link to="?filterSort=za" className={param === "za" ? "active" : ""} >Sắp xếp từ Z-A</Link></li>
            </ul>
        </aside>
    );
}

export default FilterCategory;