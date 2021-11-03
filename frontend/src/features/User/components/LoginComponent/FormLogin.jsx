import React, { useState } from 'react';



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
                <p>Chưa có tài khoản? &nbsp; <a href="/register">Đăng ký ngay!</a></p>
                <div className="icon-login">
                    <a href="/another-login"><img src="images/Users/icon_chrome.png" alt="" /></a>
                    <a href="/login" className="fb-icons"><img src="images/Users/fb.png" alt="" /></a>
                    <a href="/login"><img src="images/Users/twitter.png" alt="" /></a>
                    <a href="/login"><img src="images/Users/icon_linkin.png" alt="" /></a>
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
                        <a href="/forgot-password">Quên mật khẩu</a>
                    </div>
                    <button type="submit" className="pull-right">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
}