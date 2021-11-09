import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../../../DataLinkin';
import FormResetPass from './FormResetPass';
import './style.scss';
import axios from 'axios';
const jwt = require('jsonwebtoken');

export default function ResetPassword() {
    const navigate = useNavigate();
    const value = useContext(DataContext)
    const [{ users }] = value.users
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    const ResetPass = details => {
        if (details.password === "") {
            alert("Vui lỏng điền mật khẩu mới!")
        } else if (details.ConfirmPassword === "") {
            alert("Vui lòng xác nhận mật khẩu mới!")
        } else if (details.password !== details.ConfirmPassword) {
            alert("Mật khẩu mới và xác nhận mật khẩu mới không khớp!")
        } else {
            users.forEach(user => {
                try {
                    if (details.password !== jwt.decode(user.accessToken).password) {
                        axios.patch(`http://localhost:3000/users/edit-user/` + dataUsers.Id, details)
                            .then(res => {
                                alert('Đổi mật khẩu thành công!');
                                navigate('/');
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                } catch (e) {
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