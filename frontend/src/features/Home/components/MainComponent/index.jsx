import React from 'react';
import UserSideBarComponent from '../../../../components/UserSidebar';
import GroupSideBarComponent from '../../../../components/GroupSidebarComponent/index';


function MainComponent(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <GroupSideBarComponent />
                <UserSideBarComponent />
            </div>
        </div>
    );
}

export default MainComponent;