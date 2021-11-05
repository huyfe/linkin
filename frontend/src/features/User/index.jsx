import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ActivityHistoryPage from './pages/ActivityHistoryPage';
import AnotherLoginPage from './pages/AnotherLoginPage';
import Error404Page from './pages/Error404Page';
import ForgotPassPage from './pages/ForgotPassPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import ResetPassPage from './pages/ResetPassPage';

function UserFeature() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    return (
        (dataUsers) ? (
            <Routes>
                <Route path="login" element={<Error404Page />} />
                <Route path="another-login" element={<Error404Page />} />
                <Route path="register" element={<Error404Page />} />
                <Route path="reset-password" element={<ResetPassPage />} />
                <Route path="forgot-password" element={<Error404Page />} />
                <Route path="history" element={<ActivityHistoryPage />} />
                <Route path="profile/tran-quoc-huy" element={<ProfilePage />} />
            </Routes>
        ) : (
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="another-login" element={<AnotherLoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="reset-password" element={<Error404Page />} />
                <Route path="forgot-password" element={<ForgotPassPage />} />
                <Route path="history" element={<ActivityHistoryPage />} />
                <Route path="profile/tran-quoc-huy" element={<ProfilePage />} />
            </Routes>
        )

    );
}

export default UserFeature;
