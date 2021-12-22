import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ItemMyGroupComponent from '../ItemMyGroupComponent/index';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../groupSlice';
import groupApi from './../../../../api/groupApi';


MyGroupComponent.propTypes = {

};

function MyGroupComponent(props) {

  //dùng dispatch 1 action
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGroup = async () => {
      const groupList = await groupApi.getAll();
      dispatch(update(groupList.data));
    }
    fetchGroup();

  }, []);
  // dùng để lấy dữ liệu từ state
  const listMyGroupData = useSelector(state => state.group);
  console.log(listMyGroupData);

  console.log("Render");

  const groupList = listMyGroupData?.map(group => {
    return (
      <div className="col-lg-6">
        <ItemMyGroupComponent key={group._id} id={group._id} title={group.title} image={group.image} members={group.members} desc={group.desc} urlGroup={group.slug}  date={group.created_date} public={group.public}></ItemMyGroupComponent>
      </div>
    );
  });

  return (
    <div className="list-my-group">
      <h3>Nhóm của bạn</h3>
      <div className="row no-gutters">
        {groupList}
      </div>
    </div>
  );
}

export default MyGroupComponent;