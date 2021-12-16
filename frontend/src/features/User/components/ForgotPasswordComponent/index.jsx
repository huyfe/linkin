import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import FormForgotPass from './FormForgotPass';
import './style.scss';

export default function ForgotPassword() {
    const navigate = useNavigate();

    const ForgotPass = details => {
        console.log(details);
    }

    const loginLink = () => {
        navigate("/login");
    }

    const registerLink = () => {
        navigate("/register");
    }

    return (
        <div>
            <header className="header-forgotpass">
                <nav className="header-forgotpass__menu">
                    <div className="row align-items-center menu-header">
                        <div className="col-4">
                            <div className="header__logo">
                                <NavLink to="/login"> <img src="/logo.svg" alt="Linkin" /></NavLink>
                                <h2>Linkin</h2>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="header-forgotpass__controls">
                                <div className="userss d-flex align-items-center">
                                    <FormForgotPass ForgotPass={ForgotPass} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="Forgotpass-form">
                <div className="Forgotpass-component">
                    <div className="many-hands">
                        <img src="/images/Users/background_user1.png" alt="" />
                    </div>
                    <div className="form-Forgotpass">
                        <div className="title-form">
                            <h3 className="line-1">Chia sẻ liên kết của bạn</h3>
                            <h3>Kết nối thế giới</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}