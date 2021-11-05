import React from 'react';
import ManagerGroupComponent from '../ManagerGroupComponent';
import GroupJoinComponent from '../GroupJoinComponent';
import GroupSearchComponent from '../GroupSearchComponent';
import GroupFollowComponent from '../GroupFollowComponent';
import HeadingGroupComponent from '../HeadingGroupComponent';


function DetailGroupComponent(props) {
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
                        <HeadingGroupComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailGroupComponent;