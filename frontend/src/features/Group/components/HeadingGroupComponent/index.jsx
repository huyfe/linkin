
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './style.scss';
import ItemHeadingComponent from '../ItemHeadingComponent';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../groupSlice';
import groupApi from './../../../../api/groupApi';
import { useParams } from "react-router-dom";

HeadingGroupComponent.propTypes = {

};

function HeadingGroupComponent(props) {
    

    const iconEarth = "icon-earth";
    // const groupHeadingData = listGroupHeadingData.map(group => {
    //     return (
    //         <ItemHeadingComponent key={group._id} id={group._id} title={group.title} image={group.image} members={group.members} desc={group.desc} urlGroup={group.slug} date={group.created_date} public={group.public} iconEarth={group.iconEarth}></ItemHeadingComponent>
    //     );
    // });

    return (
        <div className="group-sidebar-follow">
            <div className="heading__group">
                <ItemHeadingComponent />
            </div>
        </div>
    );
}

export default HeadingGroupComponent;







