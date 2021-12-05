import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import categoriesApi from '../../../../../api/categoriesApi';
import { fetchCatOfUser } from '../../../../Category/categoriesUserSlice';
import CategoryTitle from './CategoryTitle';
import './style.scss';

function CategoryProfile() {
    const dispatch = useDispatch();
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    const [Categories, setCategories] = useState([])

    useEffect(() => {
        const fetchLink = async () => {
            if (dataUsers) {
                const categoryList = await categoriesApi.getCatOfUserLimit(dataUsers.Id);
                dispatch(fetchCatOfUser(categoryList.data));
                setCategories(categoryList.data)
            }
        }
        fetchLink();
    }, []);

    return (
        <div className="cateProFile">
            <CategoryTitle />
            <div className="listCategoryProFile">
                {Categories?.map(cates => (
                    <div className="listCategoryProFile__item">
                        <div className="categoryItemProfile">
                            <div className="categoryItemProfile__img">
                                <Link to={`/categories/${cates.slug}`}>
                                    <img src={cates.image} />
                                </Link>
                            </div>
                            <Link to={`/categories/${cates.slug}`}>{cates.title}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryProfile;