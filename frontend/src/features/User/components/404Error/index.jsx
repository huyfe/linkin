import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Web404Error() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    
    const LoGin = () => {
        window.location.href="/login"
    }

    const RegisTer = () => {
        window.location.href="/register"
    }

    useEffect(() => {
        if(dataUsers?.Id){
            window.location.href="/"
        }else{
            window.location.href="/login"
        }
    }, [dataUsers?.Id])

    return (
        <div className="container page404">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        {(dataUsers) ? (
                            <div className="error-actions">
                                <Link to="/" className="btn btn-primary btn-lg">
                                    <span className="glyphicon glyphicon-home" /> Trở về trang chủ
                                </Link>
                                <Link to="/support-member" className="btn btn-default btn-lg" target="_blank">
                                    <span className="glyphicon glyphicon-envelope" /> Liên hệ hỗ trợ
                                </Link>
                            </div>
                        ) : (
                            <div className="error-actions">
                                <Link to="#" onClick={LoGin} className="btn btn-primary btn-lg">
                                    <span className="glyphicon glyphicon-home" /> Đăng nhập
                                </Link>
                                <Link to="#" onClick={RegisTer} className="btn btn-default btn-lg">
                                    <span className="glyphicon glyphicon-envelope" /> Đăng ký
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