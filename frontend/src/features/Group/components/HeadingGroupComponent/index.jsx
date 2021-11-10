
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ItemHeadingComponent from '../ItemHeadingComponent';

HeadingGroupComponent.propTypes = {

};

function HeadingGroupComponent(props) {

    const GroupHeadingData = [
        {
            imageThumbnail: '/images/Groups/image_theme.png',
            titleHeading: "Cộng Đồng Front-End",
            subTitleHeading: "Nhóm công khai",
            members: "1500",
            href: "/"
        }

    ];
    const iconEarth = "icon-earth";
    const GroupHeading = GroupHeadingData.map(group => {
        return (
            <ItemHeadingComponent imageThumbnail={group.imageThumbnail} titleHeading={group.titleHeading} subTitleHeading={group.subTitleHeading} members={group.members} href={group.href} iconEarth={iconEarth}></ItemHeadingComponent>
        );
    });

    return (
        <div className="group-sidebar-follow">
            <div className="heading__group">
                {GroupHeading}
            </div>
        </div>
    );
}

export default HeadingGroupComponent;







