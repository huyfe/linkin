import React from 'react';
import './style.scss';

export default function UserSideBar() {
    return (
        <section id="user-sidebar" className="col-lg-3">
            <div className="group-box p-3 box-sd">
                <div className="user__info-box d-flex justify-content-start align-items-center">
                    <div className="avatar">
                        <img className="img-fuild" src="images/Timeline/huythanhxuan.jpg" alt="" />
                    </div>
                    <p className="heading">Trần Quốc Huy</p>
                </div>

                <ul className="group-box-content box-content">
                    <li>
                        <i class="fal fa-link"></i><a href="#">Link của tôi</a>
                    </li>
                    <li>
                        <a href="#">Lịch sử hoạt động</a>
                    </li>
                    <li>
                        <a href="#">Đang theo dõi</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}