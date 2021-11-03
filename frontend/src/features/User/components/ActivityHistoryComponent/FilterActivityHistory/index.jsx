import React from 'react';
import './style.scss';

function FilterActivityHistory() {
    return (
        <aside className="filterActivityHistory">
            <h2>Bộ lọc</h2>
            <ul className="filterActivityHistory__list">
                <li><a href="/history">Ngày</a></li>
                <li><a href="/history">Bài viết của bạn</a></li>
                <li><a href="/history">Nhóm</a></li>
                <li><a href="/history">Tương tác</a></li>
            </ul>
        </aside>
    );
}

export default FilterActivityHistory;