import React from 'react';

export default function Header() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    const Logout = () => {
        localStorage.removeItem("dataUser")
        window.location.href="/";
    }

    const Home = () => {
        window.location.href="/";
    }

    const Resetpass = () => {
        window.location.href="/reset-password"
    }

    const Logins = () => {
        window.location.href="/login"
    }

    const Register = () => {
        window.location.href="/register"
    }

    return (
        <div>
            {(dataUsers) ? (
                <h2>Header <button onClick={Home} style={{width:"80px", height:"50px", fontSize:"18px"}} className="btn btn-light">Home</button> + Hello! {dataUsers.Fullname} <button onClick={Logout} style={{width:"100px", height:"50px", fontSize:"18px"}} className="btn btn-danger">logout</button> <button onClick={Resetpass} style={{width:"200px", height:"50px", fontSize:"18px"}} className="btn btn-info">Reset Password</button></h2>
            ) : (
                <h2>Header <button onClick={Home} style={{width:"80px", height:"50px", fontSize:"18px"}} className="btn btn-light">Home</button> + <button onClick={Logins} style={{width:"100px", height:"50px", fontSize:"18px"}} className="btn btn-primary">Login</button> or <button onClick={Register} style={{width:"100px", height:"50px", fontSize:"18px"}} className="btn btn-primary">Register</button> </h2>
            )}
        </div>
    );
}