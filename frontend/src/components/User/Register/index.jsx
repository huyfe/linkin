import React, { useContext } from 'react';
import { DataContext } from '../../../DataLinkin';
import FormRegister from './FormRegister';
import './style.scss';
import axios from 'axios';

export default function Register() {
    const value = useContext(DataContext)
    const [{users}] = value.users
    console.log(users);
    const Register = details => {
        // console.log(details);
        if (details.name === "") {
            alert("Please enter your name!")
        } else if (details.email === "") {
            alert("Please enter your email!")
        } else if (details.birthday === "") {
            alert("Please enter your birth!")
        } else if (details.password === "") {
            alert("Please enter password!")
        } else if (details.Password === "") {
            alert("Please confirm password!")
        }else if (details.password !== details.Password) {
            alert("Password and confirm password do not match!")
        } else {
            users.forEach(user => {
                if (details.email === user.email && details.name === user.name) {
                    alert("email or name already used!")
                }
                if (details.email !== user.email && details.name !== user.name) {
                    
                    axios.post(`http://localhost:3000/users/create-user`, details)
                    .then(res=>{
                        alert('Sign Up Success!');
                        window.location.href="/login"
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                }
            })
        }
    }

    return (
        <div>
            <FormRegister Register={Register} />
        </div>
    );
}