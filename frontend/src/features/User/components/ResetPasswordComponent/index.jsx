import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormResetPass from './FormResetPass';
import './style.scss';
import axios from 'axios';
import HeaderAdmin from '../../../../components/HeaderAdmin';

export default function ResetPassword() {
    const navigate = useNavigate();
    const datacheckmail = localStorage.getItem("datacheckmail")
    const datacheckmails = JSON.parse(datacheckmail)

    const ResetPass = details => {
        if (details.newpassword === "") {
            alert("Vui lòng điền mật khẩu mới!")
        } else if (details.confirmpassword === "") {
            alert("Vui lòng xác nhận mật khẩu mới!")
        } else if (details.confirmpassword !== details.newpassword) {
            alert("Mật khẩu mới và xác nhận mật khẩu không khớp")
        } else {
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
        }
    }

    return (
        <div>
            {(datacheckmails) ? (
                <div>
                    <HeaderAdmin />
                    <div className="ResetPass-form">
                        <FormResetPass ResetPass={ResetPass} />
                    </div>
                </div>
            ) : (
                <div><h2>Vui lòng qua trang quên mật khẩu trước!</h2></div>
            )}
        </div>
    );
}