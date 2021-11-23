import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import groupApi from '../../../../../api/groupApi';
import { update } from '../../../../Group/groupSlice';
import GroupTitle from './GroupTitle';
import './style.scss';

function GroupProfile() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchGroup = async () => {
            const groupList = await groupApi.getAll();
            dispatch(update(groupList.data));
        }
        fetchGroup();
    }, []);

    const groupListData = useSelector(state => state.group);
    console.log(groupListData, "list group");

    return (
        <div className="Groupsprofile">
            <GroupTitle />
            <div className="itemgroups d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Công động thiết kế</h2>
                </div>
            </div>
            <div className="itemgroups d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Công động thiết kế</h2>
                </div>
            </div>
            <div className="itemgroups d-flex justify-content-between">
                <div className="img-title d-flex align-items-center justify-content-center">
                    <img src="/images/Users/link_img.png" alt="" />
                    <h2>Công động thiết kế</h2>
                </div>
            </div>
        </div>
    );
}

export default GroupProfile;