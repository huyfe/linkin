import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import emailjs from 'emailjs-com';
import axios from 'axios';
import { AxiosUser } from '../../../../api/UserApi';

const Result = () => {
    return (
        <span className="checkin">Gửi thành công!</span>
    )
}

export default function FormForgotPass({ ForgotPass }) {
    const form = useRef();
    const [details, setDetails] = useState(null);

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        
        const valuegmail = document.getElementById("email").value;
        console.log(valuegmail);
        axios.get(`${AxiosUser()}/users/email/${valuegmail}`)
            .then(res => {
                setDetails({ 
                    email: valuegmail,
                    Id: res.data.users._id 
                });
                if (res.data.users.email) {
                    emailjs.sendForm('service_9hrni8l', 'template_spcihof', form.current, 'user_BKMH9aTOVomuE3oKClpvB')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                    showResult(true);
                }
            })
            .catch(err => {
                console.log("Email không tồn tại!");
            })
        if (result === "true") {
            console.log("ok");
        }
    };

    useEffect(() => {
        const datacheckmail = JSON.parse(localStorage.getItem('datacheckmail'))
        if (datacheckmail) setDetails(datacheckmail)
    }, [])

    useEffect(() => {
        localStorage.setItem('datacheckmail', JSON.stringify(details))
    }, [details])

    return (
        <form className="form d-flex flex-column" ref={form} onSubmit={sendEmail}>
            <div className="form-detail">
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Email" name="email" id="email" />
                </div>
                <MDBBtn type="submit" className="pull-right">Xác thực Email</MDBBtn>
            </div>
            <div className="forgot-pass d-flex justify-content-between">
                <div >{result ? <Result /> : null}</div>
                <div>
                    <Link to="/restore-user">Khôi phục tài khoản <i class="fal fa-arrow-right"></i></Link>
                </div>
            </div>
        </form>
    );
}