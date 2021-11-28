import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style.scss';
import { MDBBtn, MDBDropdownLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import LoadingComponent from '../LoadingComponent';

export default function Header() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("dataUser");
        // navigate('/');
        // Nếu đăng xuất mà không reload trang thì sẽ bị 404
        window.location.href = "/login"
    }

    const Logins = () => {
        navigate('/login');
    }

    return (
        <header className="header">
            <nav className="header__menu">
                <div className="row align-items-center">
                    <div className="col-4">
                        <div className="header__logo d-flex align-items-center">
                            <NavLink to="/"> <img src="/logo.svg" alt="Linkin" /></NavLink>
                            <div className="header__search">
                                {/* <span className="icon-search"></span> */}
                                <i className="fal fa-search"></i>
                                <input type="text" placeholder="Tìm kiếm" />
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
                        <div className="header__controls d-flex justify-content-end align-items-center">
                            <MDBBtn className="btn btn-primary btn-create-link shadow-0" >Tạo Link</MDBBtn>
                            <MDBBtn floating className="btn btn-notification shadow-0"><i className="fal fa-bell"></i></MDBBtn>
                            <div className="user d-flex align-items-center">
                                {(dataUsers) ? (
                                    (dataUsers.Image)==="avatar.png" ? (
                                        <NavLink to={`/profile/${dataUsers.Slug}`}><img src={`/images/Users/${dataUsers.Image}`} className="user__avatar" /></NavLink>
                                    ) : (
                                        <NavLink to={`/profile/${dataUsers.Slug}`}><img src={dataUsers.Image} className="user__avatar" /></NavLink>
                                    )                
                                ) : ("")}

                                <MDBDropdown>
                                    <MDBDropdownToggle floating className="shadow-0 user__dropdown">
                                        <span className="icon-arrow-down"></span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-menu-user">
                                        {(dataUsers) ? (
                                            <MDBDropdownItem>
                                                <Link className="dropdown-item linkItem__dropdown--link" to={`/profile/${dataUsers.Slug}`} >
                                                    <span className="icon-lock"></span> Trang cá nhân của bạn
                                                </Link>
                                            </MDBDropdownItem>
                                        ) : ("")}
                                        {(dataUsers) ? (
                                            (dataUsers.Role) === "1" ? (
                                                <MDBDropdownItem>
                                                    <Link className="dropdown-item linkItem__dropdown--link" to="/admin" >
                                                        <span className="fas fa-user-shield"></span> Quản trị
                                                    </Link>
                                                </MDBDropdownItem>
                                            ) : ("")
                                        ) : ("")}

                                        <MDBDropdownItem>
                                            {(dataUsers) ? (
                                                <MDBDropdownLink onClick={Logout}
                                                    className="linkItem__dropdown--link"
                                                    href="#"
                                                >
                                                    <span className="icon-earth"></span> Đăng xuất
                                                </MDBDropdownLink>
                                            ) : (
                                                <Link to="/login"
                                                    className="dropdown-item linkItem__dropdown--link"
                                                    href="#"
                                                >
                                                    <span className="icon-earth"></span> Đăng nhập
                                                </Link>
                                            )}
                                        </MDBDropdownItem>


                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <LoadingComponent />
        </header>
    );
}