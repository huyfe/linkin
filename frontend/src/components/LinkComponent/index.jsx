import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import PropTypes from 'prop-types';

import './style.scss';

LinkComponent.propTypes = {
    imageUser: PropTypes.string,
    userLink: PropTypes.string,
    nameUser: PropTypes.string,
    datePost: PropTypes.string,
    groupLink: PropTypes.string,
    imageGroup: PropTypes.string,
    nameGroup: PropTypes.string,
    contentDesc: PropTypes.string,
    contentLink: PropTypes.string,
    imageLink: PropTypes.string,
    like: PropTypes.number,
    comment: PropTypes.array,
    hour: PropTypes.string,
}

LinkComponent.defaultProps = {
    userLink: "/profile/user",
    groupLink: "/group/group-detail",
}

function LinkComponent(props) {
    // Toggle like 
    const [like, setLike] = useState(false);
    const eventLike = () => {
        setLike(like => !like);
    }
    // Toggle hide comment box
    const [hideComment, setHideComment] = useState(false);
    const eventHideComment = () => {
        setHideComment(hideComment => !hideComment);
    }
    // Toogle share button 
    const [share, setShare] = useState(false);
    const eventShare = () => {
        setShare(share => !share);
    }
    // Format date post
    const datePost = new Date(props.datePost).toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' } )
    
    const [value, setValue] = useState(props.contentLink);

    return (
        <div className="box-item mt-4">
            <div className="info__box d-flex align-items-center">
                <div className="info__box-client">
                    <Link to={props.userLink} className="avatar">
                        <img src={props.imageUser} />
                    </Link>
                </div>
                <div className="info__box-post">
                    <div className="client-name">
                        <Link to={props.userLink} className="name"> {props.nameUser} </Link>
                        <Link to={props.groupLink} className="name-group">
                            <i className="fas fa-caret-right"></i>
                            <img src={props.imageGroup} />
                            <span>{props.nameGroup}</span>
                        </Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="time-post">
                            
                            {datePost} <span className="icon-earth"></span>
                        </p>
                    </div>
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
                        <div className="col-lg-2 icon d-flex justify-content-around btn-function">
                            {/* Copy clipboard */}
                            <CopyToClipboard text={value} >
                                <span className="icon-copy"></span>
                            </CopyToClipboard>
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
                            <div onClick={eventLike} className={like ? "item liked" : "item"}>
                                <i className="fal fa-heart"></i> <span>Th??ch</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 d-flex align-items-center justify-content-center">
                            <div onClick={eventHideComment} className="item">
                                <i className="fal fa-comment-alt-lines"></i> <span>B??nh lu???n</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 d-flex align-items-center justify-content-center">
                            <div className="item" onClick={eventShare}>
                                <i className="fal fa-share"></i> <span>Chia s???</span>
                            </div>
                            <div className={share ? 'share-button' : 'd-none'}>
                                    <ul>
                                        <li>Chia s??? ngay</li>
                                        <li>Chia s??? l??n nh??m</li>
                                        <li>T??y ch???n</li>
                                        <li>H???y </li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        
            
            <div className={hideComment ? "comment__container" : "d-none"} >
                <button className="comment__box-load">
                    Xem th??m b??nh lu???n
                </button>

                <div className="comment__box">
                    <div className="comment__box-item d-flex align-items-center">
                        <div className="avatar">
                            <img src="images/Timeline/huythanhxuan.jpg" alt="" />
                        </div>
                        <div className="content">
                            <p>B???n th???t tuy???t v???i amazing good job !</p>
                        </div>
                    </div>

                    <ul className="react">
                        <li>
                            <Link to="#">{props.like} Th??ch</Link>
                        </li>
                        <li>
                            <Link to="#">{props.comment} Tr??? l???i</Link>
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
                            <p>B???n th???t tuy???t v???i amazing good job !</p>
                        </div>
                    </div>

                    <ul className="react">
                        <li>
                            <Link to="#">50 Th??ch</Link>
                        </li>
                        <li>
                            <Link to="#">5 Tr??? l???i</Link>
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
                        <input type="text" className="form-control" placeholder="H??y nh???p b??nh lu???n c???a b???n..." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LinkComponent;