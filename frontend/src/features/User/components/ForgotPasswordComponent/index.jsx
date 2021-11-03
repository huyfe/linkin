import React from 'react';
import FormForgotPass from './FormForgotPass';
import './style.scss';

export default function ForgotPassword() {

    const ForgotPass = details => {
        console.log(details);
    }

    return (
        <div className="ForgotPass-form">
            <FormForgotPass ForgotPass={ForgotPass} />
        </div>
    );
}