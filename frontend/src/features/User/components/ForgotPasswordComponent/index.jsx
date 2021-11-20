import React from 'react';
import emailjs from 'emailjs-com';
import FormForgotPass from './FormForgotPass';
import './style.scss';
import Header from '../../../../components/Header';

export default function ForgotPassword() {

    const ForgotPass = details => {
        console.log(details);
    }


    return (
        <div>
            <Header />
            <div className="ForgotPass-form">
                <FormForgotPass ForgotPass={ForgotPass} />
            </div>
        </div>
    );
}