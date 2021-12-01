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

    const ggs = "Lam";
    console.log(ggs.split(''));

    const Register = details => {
        const PhoneCheck = details.phone.split('');
        const Zero = "0";

        const checkPhone = PhoneCheck.filter(phones => {
            return Zero === phones
        });

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
        } else if (details.name.length > 14) {
            const errorss = "Tên không điền quá 14 ký tự!";
            showErrors(errorss);
            showResult(true);
        } else if (details.phone.length < 10) {
            const errorss = "Số điện thoại không dưới 10 chữ số!";
            showErrors(errorss);
            showResult(true);
        } else if (details.password.length < 6) {
            const errorss = "Mật khẩu không dưới 6 ký tự!";
            showErrors(errorss);
            showResult(true);
        } else if (details.Password.length < 6) {
            const errorss = "Xác nhận mật khẩu không dưới 6 ký tự!";
            showErrors(errorss);
            showResult(true);
        } else if (checkPhone.length===0) {
            const errorss = "Số điện thoại không đúng!";
            showErrors(errorss);
            showResult(true);
        } else if (details.password !== details.Password) {
            const errorss = "Mật khẩu và xác nhận mật khẩu không khớp";
            showErrors(errorss);
            showResult(true);
        } else {
            const phones = users.filter(user => {
                return details.phone === user.phone
            });

            const emails = users.filter(user => {
                return details.email === user.email
            });

            const name = users.filter(user => {
                return details.name === user.name
            });
            if (phones.length>0) {
                const errorss = "Số điện thoại đã có người sử dụng";
                showErrors(errorss);
                showResult(true);
            } else if (emails.length>0) {
                const errorss = "Email đã có người sử dụng";
                showErrors(errorss);
                showResult(true);
            } else if (name.length>0) {
                const errorss = "Tên này đã có người sử dụng";
                showErrors(errorss);
                showResult(true);
            } else {
                dispatch(RegisterUser(details));
            }
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