import React from 'react';
import SidebarGroupsJoin from '../SidebarGroupJoinComponent';

function HeadingComponent(props) {
    return (
        <>
            <div className="row">
                <div className="group__theme col-lg-12">
                    <img src="images/Groups/image_theme.png" />
                </div>
                <div className="row">
                    <div className="timeline__heading col-lg-9 dark">
                        <div className="box-heading ">
                            <div className="title d-flex justify-content-between align-items-center">
                                <h1>Cộng đồng UI/UX</h1>
                                <span className="button-function">
                                    Đã tham gia <span class="icon-arrow-down"></span>
                                </span>
                            </div>
                            <div>
                                <span> Nhóm công khai - 10.5k thành viên</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <SidebarGroupsJoin />
                    </div>
                </div>
            </div>

        </>
    );
}

export default HeadingComponent;