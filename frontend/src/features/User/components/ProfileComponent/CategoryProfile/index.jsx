import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import categoriesApi from '../../../../../api/categoriesApi';
import { fetchCatOfUser } from '../../../../Category/categoriesUserSlice';
import CategoryTitle from './CategoryTitle';
import './style.scss';

function CategoryProfile() {
    const dispatch = useDispatch();
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    useEffect(() => {
        const fetchLink = async () => {
            const categoryList = await categoriesApi.getCatOfUser(dataUsers.Id);
            dispatch(fetchCatOfUser(categoryList.data));
        }
        fetchLink();
    }, []);

    const categoryListData = useSelector(state => state.categoriesUser);
    console.log(categoryListData, "list category");

    return (
        <div className="cateProFile">
            <CategoryTitle />
            <div className="listCategoryProFile">
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="/categories/du-lich">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="/categories/du-lich">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="/categories/du-lich">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="/categories/du-lich">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="/categories/du-lich">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="/categories/du-lich">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="/categories/du-lich">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="/categories/du-lich">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="/categories/du-lich">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="/categories/du-lich">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="/categories/du-lich">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="/categories/du-lich">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="/categories/du-lich">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="/categories/du-lich">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="/categories/du-lich">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="/categories/du-lich">Thiết kế UI/ux</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryProfile;