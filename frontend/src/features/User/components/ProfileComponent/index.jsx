import React from 'react';
import { Link } from 'react-router-dom';
import CategoryProfile from './CategoryProfile';
import GroupProfile from './GroupProfile';
import LinkProFile from './LinkProfile';
import './style.scss';

function ProfileComponent(props) {
    return (
        <section id="Profile-component">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="img-profile" >
                            <img src="/images/Users/anhbia.jpg" alt="" />
                            <div className="avatar-name d-flex align-items-center">
                                <img src="/images/Users/avatar.jpg" alt="" />
                                <h2>Quốc Huy</h2>
                            </div>
                        </div>
                        <div className="detail-profile row">
                            <div className="left-tab-menu col-8">
                                <ul className="nav justify-content-start">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Bài viết</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Giới thiệu</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Đang theo dõi</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Người theo dõi</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-information col-4">
                                <div className="category-imformation">
                                    <CategoryProfile />
                                </div>
                                <div className="link-imformation">
                                    <LinkProFile />
                                </div>
                                <div className="group-information">
                                    <GroupProfile />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfileComponent;