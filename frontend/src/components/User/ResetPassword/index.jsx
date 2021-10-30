import React, { useContext } from 'react';
import { DataContext } from '../../../DataLinkin';
import FormResetPass from './FormResetPass';
import './style.scss';
import axios from 'axios';
const jwt = require('jsonwebtoken');

export default function ResetPassword() {
    const value = useContext(DataContext)
    const [{users}] = value.users
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    const ResetPass = details => {
        if (details.password === "") {
            alert("Please enter new password!")
        } else if (details.ConfirmPassword === "") {
            alert("Please confirm password!")
        }else if (details.password !== details.ConfirmPassword) {
            alert("Password and confirm password do not match!")
        } else {
            users.forEach(user => {
                try{
                    if (details.password !== jwt.decode(user.accessToken).password) {
                        axios.patch(`http://localhost:3000/users/edit-user/` + dataUsers.Id, details)
                        .then(res=>{
                            alert('Success!');
                            window.location.href="/"
                        })
                        .catch(err =>{
                            console.log(err);
                        })
                    }
                }catch(e){
                    console.log(e);
                }
            })
        }
    }

    return (
        <div>
            <FormResetPass ResetPass={ResetPass} />
        </div>
    );
}