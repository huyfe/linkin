import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../DataLinkin';
import FormLogin from './FormLogin';
import './style.scss';
const jwt = require('jsonwebtoken');


export default function Login() {

    const value = useContext(DataContext)
    const [{ users }] = value.users
    // const dataUser = localStorage.getItem("dataUser")
    // const dataUsers = JSON.parse(dataUser)

    const [user, setUser] = useState(null);

    const Login = details => {
        if (details.email === "") {
            alert("Please enter your email!")
        } else if (details.password === "") {
            alert("Please enter password!")
        } else {
            const token = jwt.sign({ email: details.email, password: details.password }, "token")
            const tokenemail = jwt.decode(token).email;
            const tokenpassword = jwt.decode(token).password;

            users.forEach(Userlogin => {
                try {

                    if (tokenemail === jwt.decode(Userlogin.accessToken).email && tokenpassword !== jwt.decode(Userlogin.accessToken).password) {
                        alert('password is incorrect');
                    } else if (tokenpassword === jwt.decode(Userlogin.accessToken).password && tokenemail !== jwt.decode(Userlogin.accessToken).email) {
                        alert('email is incorrect')
                    }else if (tokenemail === jwt.decode(Userlogin.accessToken).email && tokenpassword === jwt.decode(Userlogin.accessToken).password) {
                        setUser({
                            Id: Userlogin._id, 
                            Fullname: Userlogin.name,
                            Email: Userlogin.email,
                            Password: Userlogin.password,
                            role: Userlogin.role,
                            id: Userlogin._id,
                            token: Userlogin.accessToken
                        });
                        alert("Login Success!")
                        window.location.href="/"
                    }
                } catch (e) {
                    console.log(e);
                }
            })            
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