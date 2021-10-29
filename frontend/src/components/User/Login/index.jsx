import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../DataLinkin';
import FormLogin from './FormLogin';
import './style.scss';
import axios from 'axios';
const jwt = require('jsonwebtoken');


export default function Login() {

    const value = useContext(DataContext)
    const [{users}] = value.users

    const [user, setUser] = useState(null);
    const Login = details => {
        if(details.email===""){
            alert("Please enter your email!")
        }else if(details.password===""){
            alert("Please enter password!")
        }else{
            const token = jwt.sign({ email: details.email, password: details.password }, "token")
            const tokenemail = jwt.decode(token).email;
            const tokenpassword = jwt.decode(token).password;
            // console.log((jwt_decode(token)).header);
            users.forEach(userlogin =>{
                if (tokenemail === jwt.decode(userlogin.accessToken).email && tokenpassword === jwt.decode(userlogin.accessToken).password) {
                    
                    setUser({
                        Fullname: userlogin.name,
                        Email: userlogin.email,
                        Password: details.password,
                        role: userlogin.role,
                        id: userlogin._id,
                        token: userlogin.accessToken
                    });
                    alert("Login Success!")
                    window.location.href="/"
                }
            })
        }
    }
    useEffect(() =>{
        const dataUser =  JSON.parse(localStorage.getItem('dataUser'))
        if(dataUser) setUser(dataUser)
    },[])
 
    useEffect(() =>{
        localStorage.setItem('dataUser', JSON.stringify(user))
    },[user])

    return (
        <div className="Login-form">
            <FormLogin Login={Login} />
            
        </div>
    );
}