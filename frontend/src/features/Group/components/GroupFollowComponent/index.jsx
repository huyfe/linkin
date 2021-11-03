import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ItemGroupFollowComponent from '../ItemGroupFollowComponent/index';

GroupFollowComponent.propTypes = {

};

function GroupFollowComponent(props) {

    const listGroupFollowData = [
        {
            image: 'images/Groups/image_group_join.png',
            title: "Cộng Đồng Front-End",
            numbers: "5100",
            countLink: "8500",
            href: "/",
            friendMembers: [
                {
                    name: "Thai Loan",
                    userImage: "images/Groups/image_box_follow.png"
                },
                {
                    name: "Ngọc Hải",
                    userImage: "images/Groups/image_box_follow.png"
                }
            ]
        },

    ];
    const iconPlus = "icon-plus";
    const listGroupFollow = listGroupFollowData.map(group => {
        return (
            <ItemGroupFollowComponent image={group.image} title={group.title} numbers={group.numbers} countLink={group.countLink} href={group.href} iconPlus={iconPlus}></ItemGroupFollowComponent>
        );
    });

    return (
        <div className="group-sidebar-follow">
            <h3>Đề xuất theo dõi</h3>
            <ul>
                {listGroupFollow}
            </ul>
        </div>
    );
}

export default GroupFollowComponent;