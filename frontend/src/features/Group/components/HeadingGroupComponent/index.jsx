import React from 'react';
import SidebarGroupLink from '../SidebarGroupLink';
import './style.scss';
import TimelineGroup from '../TimelineComponent';

function HeadingComponent(props) {
    return (
        <>
            <div className="group__heading">
                <div className="group__theme ">
                    <img src="images/Groups/image_theme.png" />
                </div>
                <div className="row ">
                    <div className="timeline__heading col-lg-8 dark">
                        <div className="box__heading">
                            <div className="title d-flex justify-content-between align-items-center">
                                <h3 className="title__heading">Cộng đồng UI/UX</h3>
                                <form>
                                    <div className="input-search">
                                        <label className="icon__search" htmlFor="input-search"><i class="fal fa-search"></i></label>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" id="sel1" name="sellist1">
                                            <option>Đã tham gia</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <span> Nhóm công khai - 10.5k thành viên</span>
                            </div>
                        </div>
                        <TimelineGroup />
                    </div>
                    <div className="col-lg-4">
                        <SidebarGroupLink />
                    </div>
                </div>
            </div>

        </>
    );
}

export default HeadingComponent;