import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {  RestoreAccountUser } from '../../../../api/UserApi';
import FormRestore from './FormRestore';
import './style.scss';

export default function RestoreAccount() {
    const dispatch = useDispatch();
    const [result, showResult] = useState(false);
    const [errors, showErrors] = useState(null);

    const RestoreUser = details => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (details.email === "") {
            const errorEmail = "Vui lòng nhập email";
            showErrors(errorEmail);
            showResult(true);
        } else if (!pattern.test(details.email)) {
            const errorPassword = "Email sai!";
            showErrors(errorPassword);
            showResult(true);
        } else {
            const fetchInformation = async () => {
                dispatch(RestoreAccountUser(details.email))
            }
            fetchInformation();
        }
    }

    return (
        <div>
            <header className="header-restoreUser">
                <nav className="header-restoreUser__menu">
                    <div className="row align-items-center menu-header">
                        <div className="col-4">
                            <div className="header__logo">
                                <NavLink to="/login"> <img src="/logo.svg" alt="Linkin" /></NavLink>
                                <h2>Linkin</h2>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="header-restoreUser__controls">
                                <div className="userss d-flex align-items-center">
                                    <FormRestore RestoreUser={RestoreUser} errors={errors} result={result} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="restoreUser-form">
                <div className="restoreUser-component">
                    <div className="many-hands">
                        <img src="/images/Users/background_user1.png" alt="" />
                    </div>
                    <div className="form-restoreUser">
                        <div className="title-form">
                            <h3 className="line-1">Chia sẻ liên kết của bạn</h3>
                            <h3>Kết nối thế giới</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}