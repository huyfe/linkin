import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './style.scss';
import { MDBBtn, MDBBadge } from 'mdb-react-ui-kit';

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
                                {/* <span class="icon-search"></span> */}
                                <i class="fal fa-search"></i>
                                <input type="text" placeHolder="Tìm kiếm" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <ul className="header__main-menu nav d-flex align-items-center justify-content-center">
                            <li><NavLink to="/"><i class="fal fa-home-alt"></i></NavLink></li>
                            <li><NavLink to="/follows"><i class="fal fa-user-friends"></i></NavLink></li>
                            <li><NavLink to="/groups"><i class="fal fa-users"></i></NavLink></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <div className="header__controls d-flex justify-content-end align-items-center">
                            <MDBBtn className="btn btn-primary btn-create-link">Tạo Link</MDBBtn>
                            <MDBBtn floating className="btn-notification"><i class="far fa-bell"></i></MDBBtn>
                            <NavLink to="/users"><img src="images/Header/avatar.png" className="avatar"></img></NavLink>
                            <MDBBtn className="btn-notification">
                                <i class="far fa-bell"></i>
                                <MDBBadge color='danger' className='ms-2'>
                                    8
                                </MDBBadge>
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}