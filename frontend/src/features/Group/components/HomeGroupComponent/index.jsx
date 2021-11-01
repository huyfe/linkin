import React from 'react';
import HeadingComponent from '../HeadingGroupComponent';
import SidebarGroups from '../SidebarGroupComponent';

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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainGroup;