import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';

const Result = () => {
    return (
        <span className="badge badge-pill badge-success">Tin nhắn của bạn đã được gửi thành công!</span>
    )
}

export default function FormForgotPass({ ForgotPass }) {
    const form = useRef();
    const [details, setDetails] = useState(null);

    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const valuegmail = document.getElementById("email").value;
        axios.get(`http://localhost:3000/users/email/${valuegmail}`)
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
        <div className="ForgotPass-component">
            <div className="many-hands">
                <img src="images/Users/many-hands.png" alt="" />
            </div>
            <div className="form-ForgotPass">
                <h2>Quên mật khẩu</h2>
                <p>Vui lòng ghi đúng email để xác thực!</p>
                <form className="form d-flex flex-column" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <input className="form-control" type="email" placeholder="Email" name="email" id="email" />
                    </div> <br />
                    <div >{result ? <Result /> : null}</div>
                    <button type="submit" className="pull-right">Xác thực Email</button>
                </form>
            </div>
        </div>
    );
}