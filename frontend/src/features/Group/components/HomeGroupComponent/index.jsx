import React from 'react';
import ManagerGroupComponent from '../ManagerGroupComponent';
import GroupJoinComponent from '../GroupJoinComponent';
import GroupSearchComponent from '../GroupSearchComponent';
import GroupFollowComponent from '../GroupFollowComponent';
import MyGroupComponent from '../MyGroupComponent';
import './style.scss';

function HomeGroupComponent(props) {
    return (

        <div className="homeGroup">
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-3">
                        <GroupSearchComponent />
                        <ManagerGroupComponent />
                        <GroupJoinComponent />
                    </div>
                    <div className="col-lg-6">
                        <main>
                           <MyGroupComponent />
                        </main>
                    </div>
                    <div className="col-lg-3">
                        <GroupFollowComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeGroupComponent;