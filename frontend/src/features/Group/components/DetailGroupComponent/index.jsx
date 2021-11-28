import React from 'react';
import ManagerGroupComponent from '../ManagerGroupComponent';
import GroupJoinComponent from '../GroupJoinComponent';
import GroupSearchComponent from '../GroupSearchComponent';
import GroupFollowComponent from '../GroupFollowComponent';
import HeadingGroupComponent from '../HeadingGroupComponent';
import './style.scss';
function DetailGroupComponent(props) {
    return (

        <div className="group">
            <div className="container-fluid">
                <div className="row gx-0">
                    <div className="col-lg-3">
                        <aside className="group__aside__left">
                            <GroupSearchComponent />
                            <ManagerGroupComponent />
                            <GroupJoinComponent />
                            <GroupFollowComponent />
                        </aside>
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