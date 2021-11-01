import React from 'react';
import './style.scss';

function UserSideBarComponent() {
    return (
        <section id="user-sidebar">
            <div className="group-box p-3 box-sd">
                <div className="user__info-box d-flex justify-content-start align-items-center">
                    <div className="avatar">
                        <img className="img-fuild" src="images/Timeline/huythanhxuan.jpg" alt="" />
                    </div>
                    <p className="heading">Trần Quốc Huy</p>
                </div>

                <ul className="group-box-content box-content">
                    <li>
                        <a href="/">
                            <span class="icon-home"></span>Link của tôi
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fal fa-history"></i>Lịch sử hoạt động
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fal fa-users"></i>Đang theo dõi
                        </a>
                    </li>
                </ul>
            </div>

            <div className="group-box p-3 box-sd">
                <p className="heading-user d-flex align-items-center justify-content-between">
                    <span>Nhóm</span>
                    <i className="fal fa-thumbtack"></i>
                </p>
                <ul className="group-box-content box-content">
                    <li>
                        <a href="/">
                            <div className="box-img d-inline-block">
                                <img src="/images/Timeline/sample.png" alt="" />
                            </div>
                            <span> Cộng đồng frontend </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className="box-img d-inline-block">
                                <img src="/images/Timeline/sample.png" alt="" />
                            </div>
                            <span> Cộng đồng UI/UX </span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className="box-img d-inline-block">
                                <img src="/images/Timeline/sample.png" alt="" />
                            </div>
                            <span> Viet Nam Sexy Bae Group </span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="group-box p-3 box-sd">
                <p className="heading-user d-flex align-items-center justify-content-between">
                    <span>Danh mục đã ghim</span>
                </p>
                <ul className="group-box-content box-content">
                    <li>
                        <a href="/">
                            <div className="item d-flex justify-content-between">
                                <div className="item-name">
                                    <div className="box-img d-inline-block">
                                        <img src="/images/Timeline/sample.png" alt="" />
                                    </div>
                                    <span> Cộng đồng UI/UX </span>
                                </div>
                                <div className="item-img">
                                    <img src="/images/Timeline/Vector.png" alt="" />
                                </div>
                            </div>
                        </a>

                    </li>
                    <li>
                        <a href="/">
                            <div className="item d-flex justify-content-between">
                                <div className="item-name">
                                    <div className="box-img d-inline-block">
                                        <img src="/images/Timeline/sample.png" alt="" />
                                    </div>
                                    <span> Cộng đồng frontend </span>
                                </div>
                                <div className="item-img">
                                    <img src="/images/Timeline/Vector.png" alt="" />
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className="item d-flex justify-content-between">
                                <div className="item-name">
                                    <div className="box-img d-inline-block">
                                        <img src="/images/Timeline/sample.png" alt="" />
                                    </div>
                                    <span> Viet Nam Sexy Bae Group </span>
                                </div>
                                <div className="item-img">
                                    <img src="/images/Timeline/Vector.png" alt="" />
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className="item d-flex justify-content-between">
                                <div className="item-name">
                                    <div className="box-img d-inline-block">
                                        <img src="/images/Timeline/sample.png" alt="" />
                                    </div>
                                    <span> Cộng đồng no hope </span>
                                </div>
                                <div className="item-img">
                                    <img src="/images/Timeline/Vector.png" alt="" />
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="group-box p-3 box-sd">
                <p className="heading-user d-flex align-items-center justify-content-between">
                    <span>Link đã ghim</span>
                </p>
                <ul className="group-box-content box-content">
                    <li>
                        <a href="/">
                            <div className="item d-flex justify-content-between">
                                <div className="item-name">
                                    <div className="box-img d-inline-block">
                                        <img src="/images/Timeline/sample.png" alt="" />
                                    </div>
                                    <span> Cộng đồng UI/UX </span>
                                </div>
                                <div className="item-img">
                                    <img src="/images/Timeline/Vector.png" alt="" />
                                </div>
                            </div>
                        </a>

                    </li>
                    <li>
                        <a href="/">
                            <div className="item d-flex justify-content-between">
                                <div className="item-name">
                                    <div className="box-img d-inline-block">
                                        <img src="/images/Timeline/sample.png" alt="" />
                                    </div>
                                    <span> Cộng đồng frontend </span>
                                </div>
                                <div className="item-img">
                                    <img src="/images/Timeline/Vector.png" alt="" />
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className="item d-flex justify-content-between">
                                <div className="item-name">
                                    <div className="box-img d-inline-block">
                                        <img src="/images/Timeline/sample.png" alt="" />
                                    </div>
                                    <span> Viet Nam Sexy Bae Group </span>
                                </div>
                                <div className="item-img">
                                    <img src="/images/Timeline/Vector.png" alt="" />
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <div className="item d-flex justify-content-between">
                                <div className="item-name">
                                    <div className="box-img d-inline-block">
                                        <img src="/images/Timeline/sample.png" alt="" />
                                    </div>
                                    <span> Cộng đồng no hope </span>
                                </div>
                                <div className="item-img">
                                    <img src="/images/Timeline/Vector.png" alt="" />
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="group-box p-3 box-sd">
                <p className="heading-user d-flex align-items-center justify-content-between">
                    <span>Danh mục đã ghim</span>
                </p>
                <ul className="group-box-content box-content">
                    <li>
                        <a href="/">
                            <div className="item d-flex justify-content-between">
                                <div className="item-name">
                                    <div className="box-img d-inline-block">
                                        <img src="/images/Timeline/sample.png" alt="" />
                                    </div>
                                    <span> Cộng đồng UI/UX </span>
                                </div>
                                <div className="item-img">
                                    <img src="/images/Timeline/Vector.png" alt="" />
                                </div>
                            </div>
                        </a>

                    </li>
                </ul>
            </div>
        </section>
    );
}
export default UserSideBarComponent;