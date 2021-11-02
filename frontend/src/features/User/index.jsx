import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnotherLoginPage from './pages/AnotherLoginPage';
import ForgotPassPage from './pages/ForgotPassPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPassPage from './pages/ResetPassPage';

function UserFeature() {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="another-login" element={<AnotherLoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="reset-password" element={<ResetPassPage />} />
            <Route path="forgot-password" element={<ForgotPassPage />} />
        </Routes>
    );
}

export default UserFeature;
