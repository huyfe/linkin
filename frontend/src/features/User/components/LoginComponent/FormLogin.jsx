import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function FormLogin({ Login, errors, result }) {

    const [details, setDetails] = useState({
        email: "",
        password: ""
    });
    const Result = () => {
        return (
            <span className="checkin">{errors}</span>
        )
    }

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
        <form className="form d-flex flex-column" onSubmit={submitHandlers}>
            <div className="d-flex form-detail">
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Email" name="Email" id="Email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div> <br /> &nbsp;&nbsp;
                <div className="form-group">
                    <input className="form-control" type="password" placeholder="Mật khẩu" name="password" id="id_password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div> <br /> &nbsp;&nbsp;
                <MDBBtn type="submit" className="pull-right">Đăng nhập</MDBBtn>
            </div>
            <div className="forgot-pass d-flex justify-content-between">
                <div >{result ? <Result /> : null}</div>
                <div>
                    <Link className="link-register" to="/register">Đăng ký <i class="fal fa-arrow-right"></i></Link>
                    <Link to="/forgot-password">Quên mật khẩu?</Link>
                </div>
            </div>
            
        </form>
    );
}