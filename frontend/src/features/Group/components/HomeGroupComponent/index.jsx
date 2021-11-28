import React from 'react';
import ManagerGroupComponent from '../ManagerGroupComponent';
import GroupJoinComponent from '../GroupJoinComponent';
import GroupSearchComponent from '../GroupSearchComponent';
import GroupFollowComponent from '../GroupFollowComponent';
import MyGroupComponent from '../MyGroupComponent';
import './style.scss';
import GroupNotificationComponent from '../GroupNotificationComponent';


function HomeGroupComponent(props) {
   
    return (
        <div className="homeGroup">
            <div className="container-fluid">
                <div className="row gx-0">
                    <div className="col-lg-3">
                        <aside className="group__aside__left">
                            <GroupSearchComponent />
                            <ManagerGroupComponent />
                            <GroupJoinComponent />
                        </aside>
                    </div>
                    <div className="col-lg-6">
                        <main>
                            <div className="row">
                                <div className="col-12">
                                    <GroupNotificationComponent />
                                </div>
                            </div>
                            <MyGroupComponent />

                        </main>
                    </div>
                    <div className="col-lg-3">
                        <aside className="group__aside__right">
                            <GroupFollowComponent />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeGroupComponent;