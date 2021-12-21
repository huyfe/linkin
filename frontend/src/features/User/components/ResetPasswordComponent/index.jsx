import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import FormResetPass from './FormResetPass';
import './style.scss';
import axios from 'axios';

export default function ResetPassword() {
    const navigate = useNavigate();
    const datacheckmail = localStorage.getItem("datacheckmail")
    const datacheckmails = JSON.parse(datacheckmail)

    const loginLink = () => {
        navigate("/login");
    }

    const registerLink = () => {
        navigate("/register");
    }

    const ResetPass = details => {
        if (details.newpassword === "") {
            alert("Vui lòng điền mật khẩu mới!")
        } else if (details.confirmpassword === "") {
            alert("Vui lòng xác nhận mật khẩu mới!")
        } else if (details.newpassword.length < 6) {
            alert("Mật khẩu mới không dưới 6 kí tự!")
        } else if (details.confirmpassword.length < 6) {
            alert("Xác nhận mật khẩu không dưới 6 kí tự!")
        } else if (details.confirmpassword !== details.newpassword) {
            alert("Mật khẩu mới và xác nhận mật khẩu không khớp")
        } else {
            try {
                axios.patch(`http://localhost:3000/users/edit-users/` + datacheckmails.Id, details)
                    .then(res => {
                        alert('Đổi mật khẩu thành công!');
                        localStorage.removeItem("datacheckmail")
                        navigate('/login');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <div>
            {(datacheckmails) ? (
                <div>
                    <header className="header-resetpass">
                        <nav className="header-resetpass__menu">
                            <div className="row align-items-center menu-header">
                                <div className="col-2">
                                    <div className="header__logo">
                                        <NavLink to="/login"> <img src="/logo.svg" alt="Linkin" /></NavLink>
                                        <h2>Linkin</h2>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="header-resetpass__controls">
                                        <div className="userss d-flex align-items-center">
                                            <MDBBtn onClick={loginLink}>Đăng nhập</MDBBtn> &nbsp;
                                            <MDBBtn onClick={registerLink}>Đăng Ký</MDBBtn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div className="ResetPass-form">
                        <FormResetPass ResetPass={ResetPass} />
                    </div>
                </div>
            ) : (
                <div><h2>Vui lòng qua trang quên mật khẩu trước!</h2></div>
            )}
        </div>
    );
}