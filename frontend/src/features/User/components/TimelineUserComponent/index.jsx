import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function TimelineUserComponent(props) {
    return (
        <section id="timelineUser">
            <div className="box-item mb-4">
                <div className="info__box d-flex align-items-center">
                    <div className="info__box-client">
                        <Link to={{ pathname: `/${props.userLink}` }} className="avatar">
                            <img src={props.imageUser} />
                        </Link>
                    </div>
                    <div className="info__box-post">
                        <div className="client-name d-flex align-items-center">
                            <Link to={{ pathname: `/${props.userLink}` }} className="name"> {props.nameUser} </Link>
                            <Link to={{ pathname: `/${props.groupLink}` }} className="name-group">
                                <i className="fas fa-caret-right"></i>
                                <img src={props.imageGroup} />
                                <span>{props.nameGroup}</span>
                            </Link>
                        </div>
                        <p className="time-post">
                            {props.datePost} <span className="icon-earth"></span>
                        </p>
                    </div>
                </div>

                <div className="main__content">
                    <div className="main__content-heading">
                        <p>{props.contentDesc}</p>
                        <div className="row align-items-center">
                            <div className="col-lg-10">
                                <p className="content m-0">
                                    {props.contentLink}
                                </p>
                            </div>
                            <div className="col-lg-2 icon d-flex justify-content-around">
                                <span className="icon-copy"></span>
                                <span className="icon-plus"></span>
                            </div>
                        </div>
                    </div>

                    <div className="main__content-image d-flex justify-content-center">
                        <img src={props.imageLink} />
                    </div>

                    <div className="main__content-function m-3">
                        <div className="row">
                            <div className="col-lg-4 col-sm-4 d-flex align-items-center justify-content-center">
                                <div className="item">
                                    <i className="fal fa-heart"></i> <span>Thích</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 d-flex align-items-center justify-content-center">
                                <div className="item">
                                    <i className="fal fa-comment-alt-lines"></i> <span>Bình luận</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 d-flex align-items-center justify-content-center">
                                <div className="item">
                                    <i className="fal fa-share"></i> <span>Chia sẻ</span>
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
                                <Link to="#">{props.like} Thích</Link>
                            </li>
                            <li>
                                <Link to="#">{props.comment} Trả lời</Link>
                            </li>
                            <li>
                                <Link to="#">{props.hour}h</Link>
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
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Hãy nhập bình luận của bạn..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TimelineUserComponent