import React from 'react';
import HeadingComponent from '../HeadingGroupComponent';
import SidebarGroups from '../SidebarGroupComponent';
import SidebarGroupsJoin from '../SidebarGroupJoinComponent';
import TimelineGroup from '../TimelineComponent';


function MainGroup(props) {
    return (

        <div className="group">
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-3">
                        <SidebarGroups />
                    </div>
                    <div className="col-lg-9">
                        <HeadingComponent />
                        {/* <div className="row">
                            <div className="col-lg-8">
                                <TimelineGroup />
                            </div>
                            <div className="col-lg-4">
                                <SidebarGroupsJoin />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainGroup;