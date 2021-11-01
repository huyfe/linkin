import React from 'react';
import UserSideBarComponent from '../UserSidebar/index';
import GroupSideBarComponent from '../GroupSidebarComponent/index';


function MainComponent(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <UserSideBarComponent />
                <GroupSideBarComponent />
            </div>
        </div>
    );
}

export default MainComponent;