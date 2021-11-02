import React from 'react';
import HeadingComponent from '../HeadingGroupComponent';
import ManagerGroupComponent from '../ManagerGroupComponent';
import GroupJoinComponent from '../GroupJoinComponent';
import GroupSearchComponent from '../GroupSearchComponent';
import GroupFollowComponent from '../GroupFollowComponent';


function MainGroup(props) {
    return (

        <div className="group">
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-3">
                        <GroupSearchComponent />
                        <ManagerGroupComponent />
                        <GroupJoinComponent />
                        <GroupFollowComponent />
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