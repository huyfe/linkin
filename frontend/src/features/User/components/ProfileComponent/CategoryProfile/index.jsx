import React from 'react';
import CategoryItemProfile from './CategoryItemProfile';
import CategoryTitle from './CategoryTitle';
import './style.scss';

function CategoryProfile() {
    return (
        <div className="cateProFile">
            <CategoryTitle />
            <div className="listCategoryProFile">
                <div className="listCategoryProFile__item">
                    <CategoryItemProfile />
                </div>
                <div className="listCategoryProFile__item">
                    <CategoryItemProfile />
                </div>
                <div className="listCategoryProFile__item">
                    <CategoryItemProfile />
                </div>
                <div className="listCategoryProFile__item">
                    <CategoryItemProfile />
                </div>
                <div className="listCategoryProFile__item">
                    <CategoryItemProfile />
                </div>
                <div className="listCategoryProFile__item">
                    <CategoryItemProfile />
                </div>
                <div className="listCategoryProFile__item">
                    <CategoryItemProfile />
                </div>
                <div className="listCategoryProFile__item">
                    <CategoryItemProfile />
                </div>
            </div>
        </div>
    );
}

export default CategoryProfile;