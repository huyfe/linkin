import React from 'react';
import SidebarGroups from '../SidebarGroupComponent';
import SidebarGroupsJoin from '../SidebarGroupJoinComponent';


function MainGroup(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <SidebarGroups />
                <SidebarGroupsJoin />
            </div>
        </div>
    );
}

export default MainGroup;