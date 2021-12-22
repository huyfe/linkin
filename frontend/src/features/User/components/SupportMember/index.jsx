import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function SupportMember() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    const LinkFace = () => {
        window.location.href="https://www.facebook.com/ybx1802"
    }
    return (
        <div className="container pageSuport">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <img src="/images/Users/helpme.png" alt="" />
                        <div className="error-details">
                            Liên hệ admin qua link bên dưới để được cấp quyền admin!
                        </div>
                        <div className="error-actions">
                            <Link to="#" onClick={LinkFace} className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home" />Facebook
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportMember;