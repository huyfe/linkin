import React, { useEffect, useState } from 'react';
import './style.scss';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

export default function AnotherLoginComponent() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const SuccessLogin = (response) => {
        // console.log("Login Successfully!", response);

        setUser({
            Id: response.profileObj.googleId,
            Fullname: response.profileObj.name,
            Email: response.profileObj.email,
            Address: "",
            Hometown: "",
            Date: "",
            Phone: "",
            Role: 0,
            Slug: response.profileObj.googleId,
            Public: 1,
            Image: response.profileObj.imageUrl,
            AccessToken: response.accessToken,
            TokenId: response.tokenId
        });
        alert("Đăng nhập Google thành công!");
        navigate('/');
    }

    const ErrorLogin = (response) => {
        console.log("Login Error!", response);
    }

    useEffect(() => {
        const dataUser = JSON.parse(localStorage.getItem('dataUser'))
        if (dataUser) setUser(dataUser)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataUser', JSON.stringify(user))
    }, [user])

    return (
        <div className="Login-another">
            <div className="Login-component">
                <div className="many-hands">
                    <img src="images/Users/many-hands.png" alt="" />
                </div>
                <div className="form-login">
                    <h2>Đăng nhập Google</h2>
                    <b className="google-login">
                        <GoogleLogin
                            clientId="1022092216832-1lvitselar5rlit7j0u9400bblvf0vhj.apps.googleusercontent.com"
                            buttonText="Đăng nhập"
                            onSuccess={SuccessLogin} onFailure={ErrorLogin}
                            cookiePolicy={'single_host_origin'} isSignedIn={true}
                        />
                    </b>
                </div>
            </div>
        </div>
    );
}