import React from 'react';
import emailjs from 'emailjs-com';
import FormForgotPass from './FormForgotPass';
import './style.scss';
import HeaderAdmin from '../../../../components/HeaderAdmin';

export default function ForgotPassword() {

    const ForgotPass = details => {
        console.log(details);
    }


    return (
        <div>
            <HeaderAdmin />
            <div className="ForgotPass-form">
                <FormForgotPass ForgotPass={ForgotPass} />
            </div>
        </div>
    );
}