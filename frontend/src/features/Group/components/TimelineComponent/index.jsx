import React from 'react'
import HeadingComponent from '../HeadingGroupComponent';
import './style.scss';


function TimelineGroup() {
    return (
        <section id="timelineGroup">
            <div className="timeline__group">
                <div className="box-share d-flex justify-content-between mb-5">
                    <div className="avatar">
                        <img src="images/Timeline/huythanhxuan.jpg" />
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Write a comment..." />
                    </div>
                </div>

                <div className="box-post">
                    <div className="box-post-info d-flex align-items-center">
                        <div className="avatar">
                            <img src="images/Timeline/huythanhxuan.jpg" />
                        </div>
                        <div className="infor-user">
                            <h4>Quốc Huy</h4>
                            <div className="info__post d-flex">
                                <div className="info__post-date d-flex align-items-center">
                                   <p> 25 tháng 9 </p> <span class="icon-earth"></span>
                                </div>
                                <div className="info__post-group d-flex align-items-center">
                                    <div className="box-img">
                                        <img src="images/Timeline/r1.png" />
                                    </div>
                                    <p className="m-0">Nguyên lý cơ bản design</p>
                                </div>  
                            </div>
                        </div>
                        <button className="option">
                            <span class="icon-more-horizontal"></span>
                        </button>
                    </div>
                    <div className="content-one m-3">
                        <p>Các nguyên lý cơ bản của design ...</p>
                    </div>
                    <div className="content-two">
                        <div className="link">
                            <p>www.linkin.com/abcxyx</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimelineGroup;