import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

function Web404Error() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    return (
        <div className="container page404">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Xin lỗi, đã xảy ra lỗi, không tìm thấy trang được yêu cầu!
                        </div>
                        {(dataUsers) ? (
                            <div className="error-actions">
                                <Link to="/" className="btn btn-primary btn-lg">
                                    <span className="glyphicon glyphicon-home" /> Trở về trang chủ
                                </Link>
                                <Link to="/" className="btn btn-default btn-lg">
                                    <span className="glyphicon glyphicon-envelope" /> Liên hệ hỗ trợ
                                </Link>
                            </div>

                        ) : (
                            <div className="error-actions">
                                <Link to="/login" className="btn btn-primary btn-lg">
                                    <span className="glyphicon glyphicon-home" /> Đăng nhập
                                </Link>
                                <Link to="/" className="btn btn-default btn-lg">
                                    <span className="glyphicon glyphicon-envelope" /> Liên hệ hỗ trợ
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Web404Error;