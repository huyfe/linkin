import React from 'react';
import './style.scss';
import GroupSideBar from '../GroupSideBar';
import SuggestGroupSideBar from '../SuggestGroupSideBar';
import SuggestFollowSideBar from '../SuggestFollowSideBar';

function AsideLeft() {
    return (
        <section id="group-sidebar">
            <GroupSideBar></GroupSideBar>

            <SuggestGroupSideBar></SuggestGroupSideBar>

            <SuggestFollowSideBar></SuggestFollowSideBar>
        </section>
    );
}

export default AsideLeft;