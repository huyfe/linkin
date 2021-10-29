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
            users.forEach(Userlogin =>{
                if (tokenemail === jwt.decode(Userlogin.accessToken).email && tokenpassword === jwt.decode(Userlogin.accessToken).password) {
                    
                    setUser({
                        Fullname: Userlogin.name,
                        Email: Userlogin.email,
                        Password: details.password,
                        role: Userlogin.role,
                        id: Userlogin._id,
                        token: Userlogin.accessToken,
                        role: Userlogin.role
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