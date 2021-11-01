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

    return (
        <div className="Login-component">
            <div className="many-hands">
                <img src="images/Users/many-hands.png" alt="" />
            </div>
            <div className="form-login">
                <h2>Đăng nhập</h2>
                <p>Chưa có tài khoản? &nbsp; <a href="/register">Đăng ký ngay!</a></p>
                <form className="form d-flex flex-column" onSubmit={submitHandlers}>
                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email" name="Email" id="Email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div> <br />
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Mật khẩu" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <button type="submit" className="pull-right">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
}