import React, { useEffect, useState } from 'react';
import './style.scss';
import { GoogleLogin } from 'react-google-login';


export default function AnotherLoginComponent() {

    const [user, setUser] = useState(null);
    

    const SuccessLogin = (response) => {
        // console.log("Login Successfully!", response);

        setUser({
            Id: response.profileObj.googleId,
            Fullname: response.profileObj.name,
            Email: response.profileObj.email,
            Role: 0,
            Slug: response.profileObj.googleId,
            Public: 1,
            Image: response.profileObj.imageUrl,
            AccessToken: response.accessToken,
            TokenId: response.tokenId
        });
        alert("Đăng nhập Google thành công!");
        window.location.href = "/"
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
                            clientId="1022092216832-1rf2be1vf26lfoav4pbm5sfei8rentqk.apps.googleusercontent.com"
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