import React from 'react';
import './style.scss';

function GroupSideBarComponent() {
    return (
        <section id="group-sidebar" className="col-lg-3">
            <div className="group-box p-3">
                <p className="heading">Nhóm</p>
                <ul className="group-box-content box-content">
                    <li>
                        <a href="/">
                            <div className="box-img d-inline-block">
                                <img src="/images/Timeline/sr1.png" alt="" />
                            </div>
                            <span> Cộng đồng UI/UX </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className="box-img d-inline-block">
                                <img src="/images/Timeline/sr1.png" alt="" />
                            </div>
                            <span> Cộng đồng UI/UX </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className="box-img d-inline-block">
                                <img src="/images/Timeline/sr1.png" alt="" />
                            </div>
                            <span> Cộng đồng UI/UX </span>
                        </a>
                    </li>
                </ul>
                <div className="create-group-btn">
                    <button className="btn btn-outline-primary">Tạo nhóm</button>
                </div>
            </div>

            <div className="group-proposal p-3 mt-3">
                <p className="heading">Đề xuất nhóm</p>
                <ul className="group-proposal-content box-content">
                    <li>
                        <div className="item d-flex align-items-center">
                            <div className="box-img">
                                <img src="/images/Timeline/r1.png" alt="" />
                            </div>
                            <a href="/">Cộng đồng frontend</a>
                        </div>
                    </li>
                    <li>
                        <div className="item d-flex align-items-center">
                            <div className="box-img">
                                <img src="/images/Timeline/r2.png" alt="" />
                            </div>
                            <a href="/">Cộng đồng UI/UX</a>
                        </div>
                    </li>
                    <li>
                        <div className="item d-flex align-items-center">
                            <div className="box-img">
                                <img src="/images/Timeline/r3.png" alt="" />
                            </div>
                            <a href="/">VSBG</a>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="follow-proposal p-3 mt-3">
                <p className="heading">Đề xuất theo dõi</p>
                <ul className="group-proposal-content box-content">
                    <li>
                        <div className="avatar">
                            <div className="box-img">
                                <img src="/images/Timeline/huythanhxuan.jpg" alt="" />
                            </div>
                            <a href="/">Trần Quốc Huy</a>
                        </div>
                    </li>
                    <li>
                        <div className="avatar">
                            <div className="box-img">
                                <img src="/images/Timeline/huythanhxuan.jpg" alt="" />
                            </div>
                            <a href="/">Đỗ Bá Đạt</a>
                        </div>
                    </li>
                    <li>
                        <div className="avatar">
                            <div className="box-img">
                                <img src="/images/Timeline/huythanhxuan.jpg" alt="" />
                            </div>
                            <a href="/">Võ Ngọc Hải</a>
                        </div>
                    </li>
                    <li>
                        <div className="avatar">
                            <div className="box-img">
                                <img src="/images/Timeline/huythanhxuan.jpg" alt="" />
                            </div>
                            <a href="/">Lê Quốc Lập Dồn</a>
                        </div>
                    </li>
                    <li>
                        <div className="avatar">
                            <div className="box-img">
                                <img src="/images/Timeline/huythanhxuan.jpg" alt="" />
                            </div>
                            <a href="/">Nguyễn Võ Thanh Lam</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default GroupSideBarComponent;