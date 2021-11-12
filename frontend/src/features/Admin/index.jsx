import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHomePage from './pages/AdminHomePage';

function AdminFeature(props) {
    return (
        <Routes>
            <Route path="/admin" element={<AdminHomePage />} />
        </Routes>
    );
}

export default AdminFeature;