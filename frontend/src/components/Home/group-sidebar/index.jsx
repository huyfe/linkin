import React from 'react';
import './style.scss';

export default function GroupSideBar() {
    return (
        <section id="group-sidebar" className="col-lg-3">
            <div className="group-box p-3 box-sd">
                <p className="heading">Nhóm</p>
                <ul className="group-box-content box-content">
                    <li>
                        <a href="#">Cộng đồng design</a>
                    </li>
                    <li>
                        <a href="#">Cộng đồng design</a>
                    </li>
                    <li>
                        <a href="#">Cộng đồng design</a>
                    </li>
                </ul>
                <div className="create-group-btn">
                    <button className="btn btn-outline-primary">Tạo nhóm</button>
                </div>
            </div>

            <div className="group-proposal p-3 mt-3 box-sd">
                <p className="heading">Đề xuất nhóm</p>
                <ul className="group-proposal-content box-content">
                    <li>
                        <a href="#">Cộng đồng design</a>
                    </li>
                    <li>
                        <a href="#">Cộng đồng design</a>
                    </li>
                    <li>
                        <a href="#">Cộng đồng design</a>
                    </li>
                </ul>
            </div>
            <div className="follow-proposal p-3 mt-3 box-sd">
                <p className="heading">Đề xuất theo dõi</p>
                <ul className="group-proposal-content box-content">
                    <li>
                        <a href="#">Đỗ Bá Đạt</a>
                    </li>
                    <li>
                        <a href="#">Võ Ngọc Hải</a>
                    </li>
                    <li>
                        <a href="#">Lê Quốc Lập Dồn</a>
                    </li>
                    <li>
                        <a href="#">Trần Quốc Huy</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}