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
                    <div className="row align-items-center">
                        <div className="col-2">
                            <div className="header__logo d-flex align-items-center justify-content-between">
                                <NavLink to="/"> <img src="/logo.svg" alt="Linkin" /></NavLink>
                                <h2>Linkin</h2>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="header-forgotpass__controls d-flex justify-content-end align-items-center">
                                <div className="userss d-flex align-items-center">
                                    <MDBBtn onClick={loginLink}>Đăng nhập</MDBBtn> &nbsp;
                                    <MDBBtn onClick={registerLink}>Đăng Ký</MDBBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="ForgotPass-form">
                <FormForgotPass ForgotPass={ForgotPass} />
            </div>
        </div>
    );
}