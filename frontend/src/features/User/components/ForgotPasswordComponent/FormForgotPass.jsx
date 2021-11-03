import React, { useState } from 'react';



export default function FormForgotPass({ ForgotPass }) {

    const [details, setDetails] = useState({
        email: ""
    });

    const submitHandlers = e => {
        e.preventDefault();
        ForgotPass(details)
    }

    return (
        <div className="ForgotPass-component">
            <div className="many-hands">
                <img src="images/Users/many-hands.png" alt="" />
            </div>
            <div className="form-ForgotPass">
                <h2>Quên mật khẩu</h2>
                <p>Bạn có thể đăng nhập bằng các hình thưc bên dưới!</p>
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
                    <button type="submit" className="pull-right">Xác thực Email</button>
                </form>
            </div>
        </div>
    );
}