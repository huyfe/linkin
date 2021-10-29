import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../DataLinkin';
import FormLogin from './FormLogin';
import './style.scss';
import axios from 'axios';

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
            users.forEach(userlogin =>{
                axios.get(`http://localhost:3000/users/checklogin/`+details.email)
                    .then(res=>{
                            setUser({
                                Fullname: userlogin.name,
                                Email: userlogin.email,
                                Password: details.password,
                                role: userlogin.role,
                                id: userlogin._id,
                                token: userlogin.accessToken
                            });
                        window.location.href="/"
                    })
                    .catch(err =>{
                        console.log(err);
                    })
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