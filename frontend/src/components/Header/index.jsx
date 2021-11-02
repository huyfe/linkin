import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './style.scss';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Header() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    const Logout = () => {
        localStorage.removeItem("dataUser")
        window.location.href = "/";
    }

    const Home = () => {
        window.location.href = "/";
    }

    const Resetpass = () => {
        window.location.href = "/reset-password"
    }

    const Logins = () => {
        window.location.href = "/login"
    }

    const Register = () => {
        window.location.href = "/register"
    }

    const LogoutGoogle = () => {
        localStorage.removeItem("dataUser")
        window.location.href = "/another-login";
    }

    return (
        <header className="header">
            <nav className="header__menu">
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="header__logo d-flex align-items-center">
                            <NavLink to="/"> <img src="logo.svg" alt="Linkin" /></NavLink>
                            <div className="header__search">
                                {/* <span className="icon-search"></span> */}
                                <i className="fal fa-search"></i>
                                <input type="text" placeHolder="Tìm kiếm" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <ul className="header__main-menu nav d-flex align-items-center justify-content-center">
                            <li><NavLink to="/"><i className="fas fa-home"></i></NavLink></li>
                            <li><NavLink to="/follows"><i className="fas fa-user-friends"></i></NavLink></li>
                            <li><NavLink to="/groups"><i className="fas fa-users"></i></NavLink></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <div className="header__controls d-flex justify-content-end">
                            {(dataUsers) ? (
                                (dataUsers.TokenId) ? (
                                    <button className="notification2"><GoogleLogout
                                        clientId="1022092216832-1rf2be1vf26lfoav4pbm5sfei8rentqk.apps.googleusercontent.com"
                                        buttonText="Đăng xuất" onLogoutSuccess={LogoutGoogle} /></button>
                                ) : (
                                    <button onClick={Logout} className="btn btn-light notification">Đăng xuất</button>
                                )
                            ) : (
                                <button onClick={Logins} className="btn btn-primary notification">Đăng nhập</button>
                            )}
                            
                            <MDBBtn className="btn btn-primary">Tạo Link</MDBBtn>
                            <button className="btn notification"><i className="far fa-bell"></i></button>
                            <div className="user">
                                <NavLink to="/users"><img src="images/Header/avatar.png" className="user__avatar"></img></NavLink>
                                <MDBBtn className="btn user__dropdown"><span className="icon-arrow-down"></span></MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}