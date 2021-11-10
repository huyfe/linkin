import React, { useState } from 'react';

export default function FormResetPass({ ResetPass }) {
    const [details, setDetails] = useState({
        newpassword: "",
        ConfirmPassword: "",
    });

    const submitHandlers = e => {
        e.preventDefault();
        ResetPass(details)
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

    const Clickeyes = e => {
        const togglePassword = document.getElementById('eyes');
    const password = document.getElementById('ConfirmPassword');
        togglePassword.addEventListener('click', function (e) {
            // toggle the type attribute
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            // toggle the eye slash icon
            this.classList.toggle('fa-eye-slash');
        });
    }

    return (
        <div className="Resetpass-component">
            <div className="many-hands">
                <img src="images/Users/many-hands.png" alt="" />
            </div>
            <div className="form-resetpass">
                <h2>Đổi mật khẩu</h2>
                <form className="form d-flex flex-column" onSubmit={submitHandlers}>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Mật khẩu mới" name="password" id="id_password" onChange={e => setDetails({ ...details, newpassword: e.target.value })} value={details.newpassword} />
                        <span>
                            <i className="fa fa-eye" aria-hidden="true" type="button" id="eye" onClick={Clickeye} ></i>
                        </span>
                    </div><br />
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Xác nhận mật khẩu mới" name="ConfirmPassword" id="ConfirmPassword" onChange={e => setDetails({ ...details, ConfirmPassword: e.target.value })} value={details.ConfirmPassword} />
                        <span>
                            <i className="fa fa-eye" aria-hidden="true" type="button" id="eyes" onClick={Clickeyes} ></i>
                        </span>
                    </div><br />
                    <input type="hidden" name="_csrf" defaultValue="{{csrfToken}}" />
                    <button type="submit" className="pull-right">Đổi mật khẩu</button>
                </form>
            </div>

        </div>
    );
}