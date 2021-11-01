import React, { useState } from 'react';


export default function FormResetPass({ ResetPass }) {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [details, setDetails] = useState({
        email: dataUsers.Email,
        password: "",
        ConfirmPassword: "",
    });

    const submitHandlers = e => {
        e.preventDefault();
        ResetPass(details)
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
                        <input className="form-control" type="password" placeholder="Mật khẩu mới" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div><br />
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Xác nhận mật khẩu mới" name="ConfirmPassword" id="ConfirmPassword" onChange={e => setDetails({ ...details, ConfirmPassword: e.target.value })} value={details.ConfirmPassword} />
                    </div><br />
                    <input type="hidden" name="_csrf" defaultValue="{{csrfToken}}" />
                    <button type="submit" className="pull-right">Đổi mật khẩu</button>
                </form>
            </div>

        </div>
    );
}