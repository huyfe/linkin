import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ActivityHistoryPage from './pages/ActivityHistoryPage';
import Error404Page from './pages/Error404Page';
import ForgotPassPage from './pages/ForgotPassPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

function UserFeature() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    return (
        (dataUsers) ? (
            <Routes>
                <Route path="login" element={<Error404Page />} />
                <Route path="register" element={<Error404Page />} />
                <Route path="forgot-password" element={<Error404Page />} />
                <Route path="history" element={<ActivityHistoryPage />} />
                <Route path="profile/:slug" element={<ProfilePage />} />
            </Routes>
        ) : (
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="forgot-password" element={<ForgotPassPage />} />
                <Route path="history" element={<Error404Page />} />
                <Route path="profile/:slug" element={<ProfilePage />} />
            </Routes>
        )

    );
}

export default UserFeature;
