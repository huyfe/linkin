import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ActivityHistoryPage from './pages/ActivityHistoryPage';
import AnotherLoginPage from './pages/AnotherLoginPage';
import ForgotPassPage from './pages/ForgotPassPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPassPage from './pages/ResetPassPage';

function UserFeature() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    return (
        (dataUsers) ? (
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="another-login" element={<AnotherLoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="reset-password" element={<ResetPassPage />} />
                <Route path="forgot-password" element={<ForgotPassPage />} />
                <Route path="history" element={<ActivityHistoryPage />} />
            </Routes>

        ) : (
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="another-login" element={<AnotherLoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="reset-password" element={<LoginPage />} />
                <Route path="forgot-password" element={<ForgotPassPage />} />
                <Route path="history" element={<ActivityHistoryPage />} />
            </Routes>
        )

    );
}

export default UserFeature;
