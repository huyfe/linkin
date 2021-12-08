import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';

function LinkTitle() {
    return (
        <div className="d-flex align-items-center LinkTitle">
            <h1>Link</h1>
            <div className="LinkTitle__group d-flex justify-content-end">
                <Link to="/links">Xem tất cả link</Link>
            </div>
        </div>
    );
}

export default LinkTitle;