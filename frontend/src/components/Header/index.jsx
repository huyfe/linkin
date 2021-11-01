import React from 'react';
import { GoogleLogout } from 'react-google-login';

export default function Header() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    const Logout = () => {
        localStorage.removeItem("dataUser")
        window.location.href = "/";
    }

    const Home = () => {
        window.location.href = "/";
    }

    const Resetpass = () => {
        window.location.href = "/reset-password"
    }

    const Logins = () => {
        window.location.href = "/login"
    }

    const Register = () => {
        window.location.href = "/register"
    }

    const LogoutGoogle = () => {
        localStorage.removeItem("dataUser")
        window.location.href = "/another-login";
    }

    return (
        <div >
            {(dataUsers) ? (
                <div className=" d-flex justify-content-between">
                    <div>
                        <button onClick={Home} style={{ width: "150px", height: "50px", fontSize: "18px" }} className="btn btn-light">Trang chủ</button>
                    </div>
                    <div className="col-7 d-flex align-items-center justify-content-center">
                        <h3>Xin chào! {dataUsers.Fullname} </h3>
                        {(dataUsers.TokenId) ? (
                            <b style={{ marginLeft: "10px" }} ><GoogleLogout
                                clientId="1022092216832-1rf2be1vf26lfoav4pbm5sfei8rentqk.apps.googleusercontent.com"
                                buttonText="Đăng xuất" onLogoutSuccess={LogoutGoogle} /></b>
                        ) : (
                            <div>
                                <button onClick={Logout} style={{ width: "120px", height: "50px", fontSize: "18px", marginLeft: "10px" }} className="btn btn-danger">Đăng xuất</button>
                                <button onClick={Resetpass} style={{ width: "150px", height: "50px", fontSize: "18px", marginLeft: "10px" }} className="btn btn-info">Đổi mật khẩu</button>
                            </div>
                        )}


                    </div>
                </div>
            ) : (
                <h2><button onClick={Home} style={{ width: "150px", height: "50px", fontSize: "18px" }} className="btn btn-light">Trang chủ</button> + <button onClick={Logins} style={{ width: "150px", height: "50px", fontSize: "18px" }} className="btn btn-primary">Đăng nhập</button> or <button onClick={Register} style={{ width: "150px", height: "50px", fontSize: "18px" }} className="btn btn-primary">Đăng ký</button> </h2>
            )}
        </div>
    );
}