import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';

function CategoryFeature() {
    return (
        <Routes>
            <Route path="categories/*" element={<CategoryPage />} />
        </Routes>
    );
}

export default CategoryFeature;