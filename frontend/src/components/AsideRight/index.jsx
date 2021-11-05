import React from 'react';
import './style.scss';
import RecentSideBar from '../RecentSideBar/index';
import CategoryPinnedSideBar from '../CategoryPinnedSideBar/index';
import LinkPinnedSideBar from '../LinkPinnedSideBar/index';
import OnlineUserListSideBar from '../OnlineUserListSideBar/index';
import UserSideBar from '../UserSidebar/index';

function AsideRight() {
    return (
        <aside className="aside-right">
            <UserSideBar></UserSideBar>
            <RecentSideBar></RecentSideBar>
            <CategoryPinnedSideBar></CategoryPinnedSideBar>
            <LinkPinnedSideBar></LinkPinnedSideBar>
            <OnlineUserListSideBar></OnlineUserListSideBar>
        </aside>
    );
}
export default AsideRight;