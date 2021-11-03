import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';

function TimelineGroup() {
    return (
        <section id="timelineGroup">
            <div className="timeline__group">
                <div className="box-share d-flex justify-content-between align-items-center mb-5 mt-5">
                    <div className="avatar">
                        <img src="images/Timeline/huythanhxuan.jpg" />
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Bạn muốn chia sẻ gì nào ?" />
                    </div>
                </div>

                <div className="box-post">
                    <div className="info__box d-flex align-items-center">
                        <div className="info__box-client">
                            <Link to="/" className="avatar">
                                <img src="images/Timeline/group__thumb-1.png" />
                            </Link>
                        </div>
                        <div className="info__box-post">
                            <div className="client-name">
                                <Link to="/" className="name">Bá Đạt</Link>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="time-post">
                                    24 tháng 9 <span class="icon-earth"></span>
                                </p>
                                <Link to="#" className="group-info">
                                    <img src="images/Timeline/r1.png" />
                                    <span>Cộng đồng Frontend Việt Nam</span>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="main__content">
                        <div className="main__content-heading">
                            <p>Các nguyên lý cơ bản của lập trình...</p>
                            <div className="row align-items-center">
                                <div className="col-lg-10">
                                    <p className="content m-0">
                                        www.linkin.com/badatdeptraiok
                                    </p>
                                </div>
                                <div className="col-lg-2 icon d-flex justify-content-around">
                                    <span class="icon-copy"></span>
                                    <span class="icon-plus"></span>
                                </div>
                            </div>
                        </div>

                        <div className="main__content-image d-flex justify-content-center">
                            <img src="images/Timeline/post-thumb.png" />
                        </div>

                        <div className="main__content-function m-3">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 d-flex align-items-center justify-content-center">
                                    <div className="item">
                                        <i class="fal fa-heart"></i> <span>Thích</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4 d-flex align-items-center justify-content-center">
                                    <div className="item">
                                        <i class="fal fa-comment-alt-lines"></i> <span>Bình luận</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4 d-flex align-items-center justify-content-center">
                                    <div className="item">
                                        <i class="fal fa-share"></i> <span>Chia sẻ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="comment__container">
                        <button className="comment__box-load">
                            Xem thêm bình luận
                        </button>

                        <div className="comment__box">
                            <div className="comment__box-item d-flex align-items-center">
                                <div className="avatar">
                                    <img src="images/Timeline/huythanhxuan.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <p>Bạn thật tuyệt vời amazing good job !</p>
                                </div>
                            </div>

                            <ul className="react">
                                <li>
                                    <Link to="#">50 Thích</Link>
                                </li>
                                <li>
                                    <Link to="#">5 Trả lời</Link>
                                </li>
                                <li>
                                    <Link to="#">1h</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="comment__box">
                            <div className="comment__box-item d-flex align-items-center">
                                <div className="avatar">
                                    <img src="images/Timeline/huythanhxuan.jpg" alt="" />
                                </div>
                                <div className="content">
                                    <p>Bạn thật tuyệt vời amazing good job !</p>
                                </div>
                            </div>

                            <ul className="react">
                                <li>
                                    <Link to="#">50 Thích</Link>
                                </li>
                                <li>
                                    <Link to="#">5 Trả lời</Link>
                                </li>
                                <li>
                                    <Link to="#">1h</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="your-comment d-flex align-items-center">
                            <div className="avatar">
                                <img src="images/Timeline/huythanhxuan.jpg" alt="" />
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Hãy nhập bình luận của bạn..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimelineGroup;