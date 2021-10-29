import React, { useEffect, useState } from 'react';
import './style.scss';
import { GoogleLogin } from 'react-google-login';

export default function AnotherLogin() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        const dataUser = JSON.parse(localStorage.getItem('dataUser'))
        if (dataUser) setUser(dataUser)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataUser', JSON.stringify(user))
    }, [user])

    const dangNhhapThanhCong = (response) => {
        console.log("Login Successfully!", response);
        console.log(response.Ss);
        setUser({
            Fullname: response.profileObj.name,
            Email: response.profileObj.email,
            img: response.profileObj.imageUrl,
            role: 1,
            token: response.Ss.lS
        });
        window.location.href = "/"
    }

    const dangNhapThatBai = (response) => {
        console.log("Login Error!", response);
    }

    return (
        <div className="Login-another">
            <div className="Login-component">
                <div className="many-hands">
                    <img src="images/Users/many-hands.png" alt="" />
                </div>
                <div className="form-login">
                    <h2>Login Another</h2>
                    <p>Do not have an account? &nbsp; <a href="/register">Register</a></p>
                    <b className="google-login">
                        <GoogleLogin
                            clientId="1022092216832-1rf2be1vf26lfoav4pbm5sfei8rentqk.apps.googleusercontent.com"
                            buttonText="Đăng nhập"
                            onSuccess={dangNhhapThanhCong} onFailure={dangNhapThatBai}
                            cookiePolicy={'single_host_origin'} isSignedIn={true}
                        /></b>
                </div>
            </div>
        </div>
    );
}