import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './style.scss';
import { MDBBtn, MDBDropdownLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function HeaderAdmin() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("dataUser");
        // navigate('/');
        // Nếu đăng xuất mà không reload trang thì sẽ bị 404
        window.location.href = "/"
    }

    const Logins = () => {
        navigate('/login');
    }

    return (
        <header className="header-admin">
            <nav className="header__menu">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="header__logo d-flex align-items-center">
                            <NavLink to="/"> <img src="/logo.svg" alt="Linkin" /></NavLink>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="header__controls d-flex justify-content-end align-items-center">
                            <div className="user d-flex align-items-center">
                                {(dataUsers) ? (
                                    <NavLink to={`/profile/${dataUsers.Slug}`}><img src="/images/Header/avatar.png" className="user__avatar" /></NavLink>
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
                                            <MDBDropdownLink className="linkItem__dropdown--link" href="#" >
                                                <i className="fal fa-trash-alt"></i> Đổi mật khẩu
                                            </MDBDropdownLink>
                                        </MDBDropdownItem>

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
        </header>
    );
}