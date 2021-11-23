import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../../../../api/UserApi';
import { fetchOfUser } from "../../Userslice";
import FormLogin from './FormLogin';
import './style.scss';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState(null);
    const [result, showResult] = useState(false);
    const [errors, showErrors] = useState(null);

    const Login = details => {
        if (details.email === "") {
            const errorEmail = "Vui lòng nhập email";
            showErrors(errorEmail);
            showResult(true);
        } else if (details.password === "") {
            const errorPassword = "Vui lòng nhập mật khẩu";
            showErrors(errorPassword);
            showResult(true);
        } else {
            const fetchInformation = async () => {
                const Logincheck = await LoginUser(details);
                dispatch(fetchOfUser(Logincheck));
                if (Logincheck.status === 200) {
                    if (Logincheck.data.message === "Email error") {
                        const errorEmail = "Email không đúng";
                        showErrors(errorEmail);
                        showResult(true);
                    } else if (Logincheck.data.message === "Pass error") {
                        const errorPassword = "Mật khẩu không đúng";
                        showErrors(errorPassword);
                        showResult(true);
                    } else {
                        setUser({
                            Id: Logincheck.data.result._id,
                            Fullname: Logincheck.data.result.name,
                            Email: Logincheck.data.result.email,
                            Address: Logincheck.data.result.address,
                            Hometown: Logincheck.data.result.hometown,
                            Date: Logincheck.data.result.birthday,
                            Phone: Logincheck.data.result.phone,
                            Role: Logincheck.data.result.role,
                            Slug: Logincheck.data.result.slug,
                            Public: Logincheck.data.result.public,
                            Image: Logincheck.data.result.image,
                            AccessToken: Logincheck.data.Token
                        });
                        alert("Đăng nhập thành công!")
                        navigate('/');
                    }
                } else {
                    const error = new Error(Logincheck.error);
                    throw error;
                }
            }
            fetchInformation();
        }
    }

    useEffect(() => {
        const dataUser = JSON.parse(localStorage.getItem('dataUser'))
        if (dataUser) setUser(dataUser)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataUser', JSON.stringify(user))
    }, [user])

    function Checkdata() {
        navigate('/');
    }

    return (
        <div>
            <header className="header-login">
                <nav className="header-login__menu">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <div className="header__logo d-flex align-items-center justify-content-between">
                                <NavLink to="/"> <img src="/logo.svg" alt="Linkin" /></NavLink>
                                <h2>Linkin</h2>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="header-login__controls d-flex justify-content-end align-items-center">
                                <div className="userss d-flex align-items-center">
                                    <FormLogin Login={Login} errors={errors} result={result} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="Login-form">
                <div className="Login-component">
                    <div className="many-hands">
                        <img src="/images/Users/background_user1.png" alt="" />
                    </div>
                    <div className="form-login">
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