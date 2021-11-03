import React from 'react'
import GroupPinLinkComponent from '../GroupPinnedLinkComponent';
import GroupPinListComponent from '../GroupPinListComponent';
import './style.scss';

function SidebarGroupLinkComponent() {
    return (

        <aside id="sidebarGroupLinkComponent" className="sidebar__link">
            <div className="box__sibarleft">
                <div className="group__pin__list">
                    <GroupPinListComponent />
                </div>
                <div className="group__link">
                    <GroupPinLinkComponent />
                </div>
            </div>
        </aside>

    )
}

export default SidebarGroupLinkComponent;