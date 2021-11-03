import React, { useContext } from 'react';
import { DataContext } from '../../../../DataLinkin';
import FormRegister from './FormRegister';
import './style.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const value = useContext(DataContext)
    const [{ users }] = value.users
    const navigate = useNavigate();

    const Register = details => {
        if (details.name === "") {
            alert("Vui lòng nhập tên!")
        } else if (details.email === "") {
            alert("Vui lòng nhập email!")
        } else if (details.birthday === "") {
            alert("Vui lòng nhập ngày tháng năm sinh!")
        } else if (details.password === "") {
            alert("Vui lòng nhập mật khẩu!")
        } else if (details.Password === "") {
            alert("Vui lòng xác nhận mật khẩu!")
        } else if (details.password !== details.Password) {
            alert("Mật khẩu và xác nhận mật khẩu không khớp!")
        } else {
            users.forEach(user => {
                if (details.email === user.email && details.name === user.name) {
                    alert("Email hoặc tên người dùng này đã có người sử dụng!")
                }
                if (details.email !== user.email && details.name !== user.name) {
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
            <FormRegister Register={Register} />
        </div>
    );
}