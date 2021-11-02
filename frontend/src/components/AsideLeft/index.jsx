import React from 'react';
import './style.scss';
import GroupSideBar from '../GroupSideBar';
import SuggestGroupSideBar from '../SuggestGroupSideBar';
import SuggestFollowSideBar from '../SuggestFollowSideBar';

function AsideLeft() {
    return (
        <aside class="aside-left">
            <GroupSideBar></GroupSideBar>

            <SuggestGroupSideBar></SuggestGroupSideBar>

            <SuggestFollowSideBar></SuggestFollowSideBar>
        </aside>
    );
}

export default AsideLeft;