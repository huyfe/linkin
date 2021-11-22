import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FormLogin from './FormLogin';
import './style.scss';

export default function Login() {
    // const dataUser = localStorage.getItem("dataUser")
    // const dataUsers = JSON.parse(dataUser)
    const navigate = useNavigate();

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
            axios.post('http://localhost:3000/users/checklogin', details)
                .then(res => {
                    if (res.status === 200) {
                        if (res.data.message === "Email error") {
                            const errorEmail = "Email không đúng";
                            showErrors(errorEmail);
                            showResult(true);
                        } else if (res.data.message === "Pass error") {
                            const errorPassword = "Mật khẩu không đúng";
                            showErrors(errorPassword);
                            showResult(true);
                        } else {
                            setUser({
                                Id: res.data.result._id,
                                Fullname: res.data.result.name,
                                Email: res.data.result.email,
                                Address: res.data.result.address,
                                Hometown: res.data.result.hometown,
                                Date: res.data.result.birthday,
                                Phone: res.data.result.phone,
                                Role: res.data.result.role,
                                Slug: res.data.result.slug,
                                Public: res.data.result.public,
                                Image: res.data.result.image,
                                AccessToken: res.data.Token
                            });
                            alert("Đăng nhập thành công!")
                            navigate('/');
                        }
                    } else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    console.error(err.data);
                    // alert('Error logging in please try again');
                });
        }
    }

    const google = () => {
        // returnUrl = window.location.protocol + "//" + window.location.host + Path
        window.open("/another-login", "_self")
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