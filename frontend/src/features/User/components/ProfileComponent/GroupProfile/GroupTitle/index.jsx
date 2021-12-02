import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";

function GroupTitle() {
    return (
        <div className="d-flex align-items-center GroupTitle">
            <h1>Nhóm</h1>
            <div className="GroupTitle__group d-flex justify-content-end">
                <Link to="/groups">Xem tất cả nhóm</Link>
            </div>
        </div>
    );
}

export default GroupTitle;