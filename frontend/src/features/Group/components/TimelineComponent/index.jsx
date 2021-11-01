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
                    <div className="info-post">
                        <div className="avatar">
                            <img src="images/Timeline/huythanhxuan.jpg" />
                        </div>
                        .ì
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimelineGroup;