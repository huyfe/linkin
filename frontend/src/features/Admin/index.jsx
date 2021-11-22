import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHomePage from './pages/AdminHomePage';
import Error404Page from '../User/pages/Error404Page';

function AdminFeature(props) {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    return (

        (dataUsers) ? (
            (dataUsers.Role) === "1" ? (
                <Routes>
                    <Route path="/admin" element={<AdminHomePage />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/admin" element={<Error404Page />} />
                </Routes>
            )
        ) : (
            <Routes>
                <Route path="/admin" element={<Error404Page />} />
            </Routes>
        )
    );
}

export default AdminFeature;