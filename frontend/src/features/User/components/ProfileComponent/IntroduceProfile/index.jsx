import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import FormResetPasss from './FormResetPass';
import IntroduceTitle from './IntroduceTitle';
import ResetpassTitle from './ResetpassTitle';
import "./style.scss";

function IntroduceProfile() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [Profile, setProfile] = useState([])
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${slug}`)
            .then(res => {
                setProfile(res.data.users)
            })
    }, [slug]);

    let date = new Date(Profile.birthday)
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

    const ResetPass = details => {
        console.log(details);
        if (details.oldpassword === "") {
            alert("Vui lỏng điền mật khẩu cũ!")
        } else if (details.newpassword === "") {
            alert("Vui lỏng điền mật khẩu mới!")
        } else if (details.confirmpassword === "") {
            alert("Vui lỏng xác nhận mật khẩu mới!")
        } else if (details.oldpassword === details.newpassword) {
            alert("Mật khẩu mới và mật khẩu cũ giống nhau!")
        } else if (details.newpassword !== details.confirmpassword) {
            alert("Mật khẩu mới và xác nhận mật khẩu mới không khớp!")
        } else {
            try {
                axios.patch(`http://localhost:3000/users/edit-user/` + dataUsers.Id, details)
                    .then(res => {
                        console.log(res.data.message);
                        if (res.data.message === "password error!") {
                            alert("Mật khẩu cũ không đúng")
                        } else if (res.data.message === "password OK!") {
                            axios.patch(`http://localhost:3000/users/edit-users/` + dataUsers.Id, details)
                                .then(res => {
                                    alert('Đổi mật khẩu thành công!');
                                    navigate('/');
                                })
                                .catch(err => {
                                    console.log(err);
                                })
                        }
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
            <div className="Introducesprofile">
                <IntroduceTitle />
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Tên</h2>
                        <p>{Profile.name}</p>
                    </div>
                    <div className="services d-flex">

                        <i className="fal fa-pen"></i>
                        <i className="far fa-globe-africa"></i>
                        <i className="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Ngày sinh</h2>
                        <p>{day}-{month}-{year}</p>
                    </div>
                    <div className="services d-flex">

                        <i className="fal fa-pen"></i>
                        <i className="far fa-globe-africa"></i>
                        <i className="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Địa chỉ</h2>
                        <p>{Profile.address}</p>
                    </div>
                    <div className="services d-flex">

                        <i className="fal fa-pen"></i>
                        <i className="far fa-globe-africa"></i>
                        <i className="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Quê quán</h2>
                        <p>{Profile.hometown}</p>
                    </div>
                    <div className="services d-flex">

                        <i className="fal fa-pen"></i>
                        <i className="far fa-globe-africa"></i>
                        <i className="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Email</h2>
                        <p>{Profile.email}</p>
                    </div>
                    <div className="services d-flex">

                        <i className="fal fa-pen"></i>
                        <i className="far fa-globe-africa"></i>
                        <i className="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <h2>Số điện thoại</h2>
                        <p>{Profile.phone}</p>
                    </div>
                    <div className="services d-flex">

                        <i className="fal fa-pen"></i>
                        <i className="far fa-globe-africa"></i>
                        <i className="fas fa-lock"></i>
                    </div>
                </div>
                <div className="itemintroduces d-flex justify-content-center align-items-center">
                    <button>Cập nhật thông tin</button>
                </div>
            </div>

            {(dataUsers) ? (
                (dataUsers.Slug) === Profile.slug ? (
                    <div className="Introducesprofile">
                        <ResetpassTitle />
                        <FormResetPasss ResetPass={ResetPass} />
                    </div>
                ) : ("")
            ) : ("")}


        </div>
    );
}

export default IntroduceProfile;