import React from 'react';
import UserSideBar from '../components/UserSidebar/index';
import GroupSideBar from '../components/GroupSidebarComponent/index';
import MainComponent from '../components/MainComponent/index';

function HomePage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <GroupSideBar />
                <MainComponent />
                <UserSideBar />
            </div>
        </div>
    );
}

export default HomePage;