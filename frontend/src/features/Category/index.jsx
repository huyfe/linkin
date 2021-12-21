import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error404Page from '../User/pages/Error404Page';
import CategoryPage from './pages/CategoryPage';

function CategoryFeature() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    return (
        (dataUsers) ? (
            <Routes>
                <Route path="categories/*" element={<CategoryPage />} />
            </Routes>
        ) : (
            <Routes>
                <Route path="categories/*" element={<Error404Page />} />
            </Routes>
        )
    );
}

export default CategoryFeature;