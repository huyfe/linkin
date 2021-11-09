import React from 'react';
import './style.scss';
import RecentSideBar from '../RecentSideBar/index';
import CategoryPinnedSideBar from '../CategoryPinnedSideBar/index';
import LinkPinnedSideBar from '../LinkPinnedSideBar/index';
import OnlineUserListSideBar from '../OnlineUserListSideBar/index';
import UserAsideRight from '../UserAsideRight/index';
function AsideRight() {
    return (
        <aside className="aside-right">
            <UserAsideRight />
            <RecentSideBar />
            <CategoryPinnedSideBar />
            <LinkPinnedSideBar />
            <OnlineUserListSideBar />
        </aside>
    );
}
export default AsideRight;