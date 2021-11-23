import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';

function CategoryTitle() {
    return (
        <div className="d-flex align-items-center CategoryTitle">
            <h1>Danh mục
                &nbsp;
                <Link to="/profile/tran-quoc-huy">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </Link>
            </h1>
            <div className="CategoryTitle__group d-flex justify-content-end">
                {/* <label
                    htmlFor="CategoryTitle"
                    className="d-flex justify-content-end align-items-center"
                >
                    <i className="fal fa-search"></i>
                </label>
                <input id="CategoryTitle" type="search" /> */}
                <Link to="/categories">Xem tất cả danh mục</Link>
            </div>
        </div>
    );
}

export default CategoryTitle;