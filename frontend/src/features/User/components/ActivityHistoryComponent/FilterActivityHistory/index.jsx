import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


function FilterActivityHistory() {
    return (
        <aside className="filterActivityHistory">
            <h2>Bộ lọc</h2>
            <ul className="filterActivityHistory__list">
                <li><Link to="/history">Ngày</Link></li>
                <li><Link to="/history">Bài viết của bạn</Link></li>
                <li><Link to="/history">Nhóm</Link></li>
                <li><Link to="/history">Tương tác</Link></li>
            </ul>
        </aside>
    );
}

export default FilterActivityHistory;