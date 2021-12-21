
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './style.scss';
import ItemHeadingComponent from '../ItemHeadingComponent';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../groupSlice';
import groupApi from './../../../../api/groupApi';
import { useParams } from "react-router-dom";

HeadingGroupComponent.propTypes = {

};

function HeadingGroupComponent(props) {
    
    //dùng dispatch 1 action
    const dispatch = useDispatch();
    const { slug } = useParams();

    useEffect(() => {
        const fetch = async () => {
            // const GroupHeadingData = await Group(slug);
        
            // const linkList = await linkApi.getAlllimit(Profileinfo.data.users._id);
            // dispatch(update(linkList.data));
            // setLinks(linkList.data)
        }
        fetch();
    }, []);


  // dùng để lấy dữ liệu từ state
  const GroupHeadingData = useSelector(state => state.group);
  console.log(GroupHeadingData);

  console.log("Render");

    const GroupHeading = GroupHeadingData.map(group => {
        return (
            <ItemHeadingComponent key={group._id} id={group._id} title={group.title} image={group.image} members={group.members} desc={group.desc} urlGroup={group.slug}  date={group.created_date} public={group.public}></ItemHeadingComponent>
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







