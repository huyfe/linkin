import React from 'react';
import './style.scss';
import UserSideBar from '../UserSideBar';
import RecentSideBar from '../RecentSideBar';
import CategoryPinnedSideBar from '../CategoryPinnedSideBar';
import LinkPinnedSideBar from '../LinkPinnedSideBar';
import OnlineUserListSideBar from '../OnlineUserListSideBar';

function AsideRight() {
    return (
        <aside class="aside-right">
            <UserSideBar></UserSideBar>
            <RecentSideBar></RecentSideBar>
            <CategoryPinnedSideBar></CategoryPinnedSideBar>
            <LinkPinnedSideBar></LinkPinnedSideBar>
            <OnlineUserListSideBar></OnlineUserListSideBar>
        </aside>
    );
}
export default AsideRight;