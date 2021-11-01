import React from 'react'
import SidebarGroupsJoin from '../SidebarGroups';
import SidebarGroups from '../SidebarGroupsJoin';

import './style.scss';


export default function Groups() {
    return (
        <div className="container-fluid p-0">
            <div className="wrapper">
                <div className="row">
                    <SidebarGroupsJoin />
                    <section id="groupsPage" className="col-lg-6 d-flex justify-content-center">
                        <h1 className="title">Đây là trang group</h1>
                    </section>
                    <SidebarGroups />
                </div>
            </div>

        </div>

    )
}
