import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { DataContext } from '../../../../DataLinkin';
import FormRegister from './FormRegister';
import './style.scss';
import { RegisterUser } from '../../../../api/UserApi';

export default function Register() {
    const value = useContext(DataContext)
    const [users] = value.users
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [result, showResult] = useState(false);
    const [errors, showErrors] = useState(null);

    const Register = details => {
        if (details.name === "") {
            const errorss = "Vui lòng nhập tên";
            showErrors(errorss);
            showResult(true);
        } else if (details.email === "") {
            const errorss = "Vui lòng nhập email";
            showErrors(errorss);
            showResult(true);
        } else if (details.address === "") {
            const errorss = "Vui lòng nhập địa chỉ";
            showErrors(errorss);
            showResult(true);
        } else if (details.phone === "") {
            const errorss = "Vui lòng nhập số điện thoại";
            showErrors(errorss);
            showResult(true);
        } else if (details.birthday === "") {
            const errorss = "Vui lòng nhập ngày tháng năm sinh";
            showErrors(errorss);
            showResult(true);
        } else if (details.password === "") {
            const errorss = "Vui lòng nhập mật khẩu";
            showErrors(errorss);
            showResult(true);
        } else if (details.Password === "") {
            const errorss = "Vui lòng xác nhận mật khẩu";
            showErrors(errorss);
            showResult(true);
        } else if (details.password !== details.Password) {
            const errorss = "Mật khẩu và xác nhận mật khẩu không khớp";
            showErrors(errorss);
            showResult(true);
        } else {
            users.forEach(user => {
                if (details.email === user.email && details.name === user.name) {
                    const errorss = "Email hoặc tên người dùng này đã có người sử dụng";
                    showErrors(errorss);
                    showResult(true);
                }
                else if (details.phone === user.phone) {
                    const errorss = "Số điện thoại đã có người sử dụng";
                    showErrors(errorss);
                    showResult(true);
                }
                if (details.email !== user.email && details.name !== user.name && details.phone !== user.phone) {
                    dispatch(RegisterUser(details));
                }
            })
        }
    }

    const loginLink = () => {
        navigate("/login");
    }

    return (
        <div>
            <header className="header-register">
                <nav className="header-register__menu">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <div className="header__logo d-flex align-items-center justify-content-between">
                                <NavLink to="/"> <img src="/logo.svg" alt="Linkin" /></NavLink>
                                <h2>Linkin</h2>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="header-register__controls d-flex justify-content-end align-items-center">
                                <div className="userss d-flex align-items-center">
                                    <MDBBtn onClick={loginLink}>Đăng nhập</MDBBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <FormRegister Register={Register} errors={errors} result={result} />
        </div>
    );
}