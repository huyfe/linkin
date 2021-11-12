import React, { useContext, useState } from 'react';
import { DataContext } from '../../../../DataLinkin';
import FormRegister from './FormRegister';
import './style.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const value = useContext(DataContext)
    const [{ users }] = value.users
    const navigate = useNavigate();

    const [result, showResult] = useState(false);
    const [errors, showErrors] = useState(null);

    const Register = details => {
        if (details.name === "") {
            const errorss = "Vui lòng nhập tên";
            showErrors(errorss);
            showResult(true);
        } else if (details.email === "") {
            const errorss = "Vui lòng nhập email";
            showErrors(errorss);
            showResult(true);
        } else if (details.address === "") {
            const errorss = "Vui lòng nhập địa chỉ";
            showErrors(errorss);
            showResult(true);
        } else if (details.phone === "") {
            const errorss = "Vui lòng nhập số điện thoại";
            showErrors(errorss);
            showResult(true);
        } else if (details.birthday === "") {
            const errorss = "Vui lòng nhập ngày tháng năm sinh";
            showErrors(errorss);
            showResult(true);
        } else if (details.password === "") {
            const errorss = "Vui lòng nhập mật khẩu";
            showErrors(errorss);
            showResult(true);
        } else if (details.Password === "") {
            const errorss = "Vui lòng xác nhận mật khẩu";
            showErrors(errorss);
            showResult(true);
        } else if (details.password !== details.Password) {
            const errorss = "Mật khẩu và xác nhận mật khẩu không khớp";
            showErrors(errorss);
            showResult(true);
        } else {
            users.forEach(user => {
                if (details.email === user.email && details.name === user.name) {
                    const errorss = "Email hoặc tên người dùng này đã có người sử dụng";
                    showErrors(errorss);
                    showResult(true);
                }
                else if (details.phone === user.phone) {
                    const errorss = "Số điện thoại đã có người sử dụng";
                    showErrors(errorss);
                    showResult(true);
                }
                if (details.email !== user.email && details.name !== user.name && details.phone !== user.phone) {
                    axios.post(`http://localhost:3000/users/create-user`, details)
                        .then(res => {
                            alert('Đăng ký thành công!');
                            navigate('/login');
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })
        }
    }

    return (
        <div>
            <FormRegister Register={Register} errors={errors} result={result} />
        </div>
    );
}