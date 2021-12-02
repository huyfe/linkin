import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';

function CategoryTitle() {
    return (
        <div className="d-flex align-items-center CategoryTitle">
            <h1>Danh mục</h1>
            <div className="CategoryTitle__group d-flex justify-content-end">
                <Link to="/categories">Xem tất cả danh mục</Link>
            </div>
        </div>
    );
}

export default CategoryTitle;