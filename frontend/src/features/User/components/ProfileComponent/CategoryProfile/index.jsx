import React from 'react';
import { Link } from "react-router-dom";
import CategoryTitle from './CategoryTitle';
import './style.scss';

function CategoryProfile() {
    return (
        <div className="cateProFile">
            <CategoryTitle />
            <div className="listCategoryProFile">
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="slug">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="slug">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="slug">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="slug">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="slug">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="slug">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="slug">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="slug">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="slug">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="slug">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="slug">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="slug">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="slug">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="slug">Thiết kế UI/ux</Link>
                    </div>
                </div>
                <div className="listCategoryProFile__item">
                    <div className="categoryItemProfile">
                        <div className="categoryItemProfile__img">
                            <Link to="slug">
                                <img src="/images/Categories/ux-ui.jpg" />
                            </Link>
                        </div>
                        <Link to="slug">Thiết kế UI/ux</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryProfile;