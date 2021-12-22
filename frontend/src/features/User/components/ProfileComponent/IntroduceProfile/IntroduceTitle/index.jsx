import React from "react";
import { Link } from 'react-router-dom';
import "./style.scss";

function IntroduceTitle(props) {

    return (
        <div className="d-flex align-items-center IntroduceTitle">
            <h1>Thông tin</h1>
            <Link to="#" onClick={() => window.location.reload(false)} className="button-refresh">Reset thông tin</Link>
        </div>
    );
}

export default IntroduceTitle;