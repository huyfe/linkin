import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FormLogin({ Login }) {

    const [details, setDetails] = useState({
        email: "",
        password: ""
    });

    const submitHandlers = e => {
        e.preventDefault();
        Login(details)
    }

    const Clickeye = e => {
        const togglePassword = document.getElementById('eye');
    const password = document.getElementById('id_password');
        togglePassword.addEventListener('click', function (e) {
            // toggle the type attribute
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            // toggle the eye slash icon
            this.classList.toggle('fa-eye-slash');
        });
    }

    return (
        <div className="Login-component">
            <div className="many-hands">
                <img src="images/Users/many-hands.png" alt="" />
            </div>
            <div className="form-login">
                <h2>Đăng nhập</h2>
                <p>Chưa có tài khoản? &nbsp; <Link to="/register">Đăng ký ngay!</Link></p>
                <div className="icon-login">
                    <Link to="/another-login"><img src="images/Users/icon_chrome.png" alt="" /></Link>
                    <Link to="/login" className="fb-icons"><img src="images/Users/fb.png" alt="" /></Link>
                    <Link to="/login"><img src="images/Users/twitter.png" alt="" /></Link>
                    <Link to="/login"><img src="images/Users/icon_linkin.png" alt="" /></Link>
                </div>
                <form className="form d-flex flex-column" onSubmit={submitHandlers}>
                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email" name="Email" id="Email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div> <br />
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Mật khẩu" name="password" id="id_password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                        <span>
                            <i className="fa fa-eye" aria-hidden="true" type="button" id="eye" onClick={Clickeye} ></i>
                        </span>
                    </div>
                    <div className="forgot-pass d-flex justify-content-end">
                        <Link to="/forgot-password">Quên mật khẩu</Link>
                    </div>
                    <button type="submit" className="pull-right">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
}