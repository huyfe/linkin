import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../../../DataLinkin';
import FormResetPass from './FormResetPass';
import './style.scss';
import axios from 'axios';

export default function ResetPassword() {
    const navigate = useNavigate();
    const value = useContext(DataContext)
    const [{ users }] = value.users
    const datacheckmail = localStorage.getItem("datacheckmail")
    const datacheckmails = JSON.parse(datacheckmail)

    const ResetPass = details => {
        if (details.newpassword === "") {
            alert("Vui lỏng điền mật khẩu mới!")
        } else if (details.ConfirmPassword === "") {
            alert("Vui lòng xác nhận mật khẩu mới!")
        } else if (details.newpassword !== details.ConfirmPassword) {
            alert("Mật khẩu mới và xác nhận mật khẩu mới không khớp!")
        } else {
            users.forEach(user => {
                try {

                    axios.patch(`http://localhost:3000/users/edit-users/` + datacheckmails.Id, details)
                        .then(res => {
                            alert('Đổi mật khẩu thành công!');
                            localStorage.removeItem("datacheckmail")
                            navigate('/login');
                        })
                        .catch(err => {
                            console.log(err);
                        })
                } catch (e) {
                    console.log(e);
                }
            })
        }
    }

    return (
        <div>
            {(datacheckmails) ? (
                <FormResetPass ResetPass={ResetPass} />
            ) : (
                <div><h2>Vui lòng qua trang quên mật khẩu trước!</h2></div>
            )}
        </div>
    );
}