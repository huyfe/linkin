import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ItemGroupPinLinkComponent from '../ItemGroupPinLinkComponent';

GroupPinnedLinkComponent.propTypes = {

};

function GroupPinnedLinkComponent(props) {

    const listGroupPinLinkData = [
        {  name: "Cộng đồng Frontend Developer" ,href: "/" },
        {  name: "Cộng đồng Java" , href: "/" },
        {  name: "Cộng đồng Backend Developer" ,href: "/" },
        {  name: "Cộng đồng Html/Css/Javascrpit" ,href: "/"},
        {  name: "Cộng đồng Jquery" ,href: "/" }
    ];
    const iconCoppy = "icon-copy";
    const listGroupPinLink = listGroupPinLinkData.map(group => {
        return (
            <ItemGroupPinLinkComponent name={group.name} href={group.href} iconCoppy={iconCoppy}></ItemGroupPinLinkComponent>
        );
    });

    return (
        <div className="group-pin-link">
            <h3>Link ghim của nhóm</h3>
            <ul>
                {listGroupPinLink}
            </ul>
        </div>
    );
}

export default GroupPinnedLinkComponent;