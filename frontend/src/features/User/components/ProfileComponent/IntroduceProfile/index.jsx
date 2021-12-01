import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import FormResetPasss from './FormResetPass';
import IntroduceTitle from './IntroduceTitle';
import ResetpassTitle from './ResetpassTitle';
import "./style.scss";
import FormEditUser from "./FormEditUser";

function IntroduceProfile() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [Profile, setProfile] = useState([])
    const [Information, setInformation] = useState([])
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${slug}`)
            .then(res => {
                let date = new Date(res.data.users.birthday)
                setProfile({
                    name: res.data.users.name,
                    day: date.getDate(),
                    month: date.getMonth() + 1,
                    year: date.getFullYear(),
                    birthday: res.data.users.birthday,
                    address: res.data.users.address,
                    hometown: res.data.users.hometown,
                    email: res.data.users.email,
                    phone: res.data.users.phone,
                    slug: res.data.users.slug
                })
            })
            .catch(err => {
            })
    }, [slug]);

    // let date = new Date(Profile.birthday)
    // const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];

    const ResetPass = details => {
        console.log(details);
        if (details.oldpassword === "") {
            alert("Vui lòng điền mật khẩu cũ!")
        } else if (details.newpassword === "") {
            alert("Vui lòng điền mật khẩu mới!")
        } else if (details.confirmpassword === "") {
            alert("Vui lòng xác nhận mật khẩu mới!")
        } else if (details.oldpassword.length < 6) {
            alert("Mật khẩu cũ không dưới 6 kí tự!")
        } else if (details.newpassword.length < 6) {
            alert("Mật khẩu mới không dưới 6 kí tự!")
        } else if (details.confirmpassword.length < 6) {
            alert("Xác nhận mật khẩu không dưới 6 kí tự!")
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

    const Updateinformation = () => {
        const titleOne = "Return-down";
        setInformation(titleOne);
    }

    const Returninformation = () => {
        const titleTwo = "";
        setInformation(titleTwo);
    }

    const KeyEdit = detailsTwo => {
        const PhoneCheck = detailsTwo.phone.split('');
        const Zero = "0";

        const checkPhone = PhoneCheck.filter(phones => {
            return Zero === phones
        });

        if (detailsTwo.name === "") {
            alert("Vui lòng điền tên!")
        } else if (detailsTwo.birthday === "") {
            alert("Vui lòng không để trống ngày sinh này!")
        } else if (detailsTwo.address === "") {
            alert("Vui lòng điền địa chỉ!")
        } else if (detailsTwo.hometown === "") {
            alert("Vui lòng điền quê quán!")
        } else if (detailsTwo.email === "") {
            alert("Vui lòng điền email!")
        } else if (detailsTwo.phone === "") {
            alert("Vui lòng điền số điện thoại!")
        } else if (detailsTwo.name.length > 14) {
            alert("Tên không điền quá 14 ký tự!")
        } else if (detailsTwo.phone.length < 10) {
            alert("Số điện thoại không dưới 10 chữ số!")
        } else if (checkPhone.length===0) {
            alert("Số điện thoại không đúng!")
        } else {
            try {
                axios.patch(`http://localhost:3000/users/edit-infomation-user/` + dataUsers.Id, detailsTwo)
                    .then(res => {
                        alert('Cập nhật thông tin thành công!');
                        alert('Cập nhật xong bạn nên reset thông tin!');
                        
                        const profile2 ={
                            Id: dataUsers.Id,
                            Fullname: Profile.name,
                            Email: Profile.email,
                            Address: Profile.address,
                            Hometown: Profile.hometown,
                            Date: Profile.birthday,
                            Phone: Profile.phone,
                            Role: Profile.role,
                            Slug: dataUsers.Slug,
                            Public: dataUsers.Public,
                            Image: Profile.image,
                            CoverImage: Profile.coverimage,
                            AccessToken: dataUsers.AccessToken
                        }
                        localStorage.setItem('dataUser', JSON.stringify(profile2))
                        window.location.reload(false);
                        // navigate('/');                        
                        
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
        <>
            {(Profile) ? (
                <div className={`Introducesprofile-component ${Information}`}>
                    <div className="Introducesprofile">
                        <IntroduceTitle />
                        <div className="itemintroduces d-flex justify-content-between">
                            <div className="img-title d-flex align-items-center justify-content-center">
                                <h2>Tên</h2>
                                <p>{Profile.name}</p>
                            </div>
                            <div className="services d-flex">
                                <Link to="#" onClick={Updateinformation}><i className="fal fa-pen"></i></Link>
                                <Link to="#" ><i className="far fa-globe-africa"></i></Link>
                                <Link to="#"><i className="fas fa-lock"></i></Link>
                            </div>
                        </div>
                        <div className="itemintroduces d-flex justify-content-between">
                            <div className="img-title d-flex align-items-center justify-content-center">
                                <h2>Ngày sinh</h2>
                                <p>{Profile.day}-{Profile.month}-{Profile.year}</p>
                            </div>
                            <div className="services d-flex">
                                <Link to="#" onClick={Updateinformation}><i className="fal fa-pen"></i></Link>
                                <Link to="#"><i className="far fa-globe-africa"></i></Link>
                                <Link to="#"><i className="fas fa-lock"></i></Link>
                            </div>
                        </div>
                        <div className="itemintroduces d-flex justify-content-between">
                            <div className="img-title d-flex align-items-center justify-content-center">
                                <h2>Địa chỉ</h2>
                                <p>{Profile.address}</p>
                            </div>
                            <div className="services d-flex">
                                <Link to="#" onClick={Updateinformation}><i className="fal fa-pen"></i></Link>
                                <Link to="#"><i className="far fa-globe-africa"></i></Link>
                                <Link to="#"><i className="fas fa-lock"></i></Link>
                            </div>
                        </div>
                        <div className="itemintroduces d-flex justify-content-between">
                            <div className="img-title d-flex align-items-center justify-content-center">
                                <h2>Quê quán</h2>
                                <p>{Profile.hometown}</p>
                            </div>
                            <div className="services d-flex">
                                <Link to="#" onClick={Updateinformation}><i className="fal fa-pen"></i></Link>
                                <Link to="#"><i className="far fa-globe-africa"></i></Link>
                                <Link to="#"><i className="fas fa-lock"></i></Link>
                            </div>
                        </div>
                        <div className="itemintroduces d-flex justify-content-between">
                            <div className="img-title d-flex align-items-center justify-content-center">
                                <h2>Email</h2>
                                <p>{Profile.email}</p>
                            </div>
                            <div className="services d-flex">
                                <Link to="#" onClick={Updateinformation}><i className="fal fa-pen"></i></Link>
                                <Link to="#"><i className="far fa-globe-africa"></i></Link>
                                <Link to="#"><i className="fas fa-lock"></i></Link>
                            </div>
                        </div>
                        <div className="itemintroduces d-flex justify-content-between">
                            <div className="img-title d-flex align-items-center justify-content-center">
                                <h2>Số điện thoại</h2>
                                <p>{Profile.phone}</p>
                            </div>
                            <div className="services d-flex">
                                <Link to="#" onClick={Updateinformation}><i className="fal fa-pen"></i></Link>
                                <Link to="#"><i className="far fa-globe-africa"></i></Link>
                                <Link to="#"><i className="fas fa-lock"></i></Link>
                            </div>
                        </div>
                        {(dataUsers) ? (
                            (dataUsers.Slug) === Profile.slug ? (
                                <div className="itemintroduces d-flex justify-content-center align-items-center">
                                    <Link to="#" onClick={Updateinformation} className="button-a">Cập nhật thông tin</Link>
                                </div>
                            ) : ("")
                        ) : ("")}
                    </div>

                    <div className="Introducesprofile-2">
                        <IntroduceTitle />
                        <FormEditUser KeyEdit={KeyEdit} />
                        {(dataUsers) ? (
                            (dataUsers.Slug) === Profile.slug ? (
                                <div className="itemintroduces d-flex justify-content-center align-items-center">
                                    <Link to="#" onClick={Returninformation} className="button-a">Trở về</Link>
                                </div>
                            ) : ("")
                        ) : ("")}
                    </div>

                    {(dataUsers) ? (
                        (dataUsers.Slug) === Profile.slug ? (
                            <div className="Introducesprofile-3">
                                <ResetpassTitle />
                                <FormResetPasss ResetPass={ResetPass} />
                            </div>
                        ) : ("")
                    ) : ("")}

                </div>
            ) : ("")}
        </>
    );
}

export default IntroduceProfile;