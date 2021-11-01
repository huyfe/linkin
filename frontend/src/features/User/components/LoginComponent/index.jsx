import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FormLogin from './FormLogin';
import './style.scss';

export default function Login() {
    // const dataUser = localStorage.getItem("dataUser")
    // const dataUsers = JSON.parse(dataUser)

    const [user, setUser] = useState(null);

    const Login = details => {
        if (details.email === "") {
            alert("Vui lòng nhập email!")
        } else if (details.password === "") {
            alert("Vui lòng nhập mật khẩu!")
        } else {
            axios.post('http://localhost:3000/users/checklogin', details)
                .then(res => {
                    if (res.status === 200) {
                        setUser({
                            Id: res.data.result._id,
                            Fullname: res.data.result.name,
                            Email: res.data.result.email,
                            Role: res.data.result.role,
                            Slug: res.data.result.slug,
                            Public: res.data.result.public,
                            Image: res.data.result.image,
                            AccessToken: res.data.Token
                        });
                        alert("Đăng nhập thành công!")
                        window.location.href = "/";
                    } else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert('Error logging in please try again');
                });
        }
    }
    useEffect(() => {
        const dataUser = JSON.parse(localStorage.getItem('dataUser'))
        if (dataUser) setUser(dataUser)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataUser', JSON.stringify(user))
    }, [user])

    return (
        <div className="Login-form">
            <FormLogin Login={Login} />

        </div>
    );
}