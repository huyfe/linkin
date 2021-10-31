import React from 'react';
import UserSideBar from './user-sidebar';
import GroupSideBar from './group-sidebar';
import './_style.scss';

export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <GroupSideBar />
                <section id="homepage" className="d-flex justify-content-center col-lg-6">
                    <h2>Đây là trang chủ</h2>
                </section>
                <UserSideBar />
            </div>
        </div>
    );
}