import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import categoriesApi from '../../../../../api/categoriesApi';
import { ProfileUser } from '../../../../../api/UserApi';
import { fetchCatOfUserLimit } from '../../../../Category/categoriesUserSlice';
import { fetchOfUser } from '../../../Userslice';
import CategoryTitle from './CategoryTitle';
import './style.scss';

function CategoryProfile() {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const [Categories, setCategories] = useState([])

    useEffect(() => {
        const fetchInformation = async () => {
            const Profileinfo = await ProfileUser(slug);
            dispatch(fetchOfUser(Profileinfo.data.users));
            const categoryList = await categoriesApi.getCatOfUserLimit(Profileinfo.data.users._id);
            dispatch(fetchCatOfUserLimit(categoryList.data));
            setCategories(categoryList.data)
        }
        fetchInformation();
    }, [slug]);

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