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
            const groupList = await groupApi.getAlllimit();
            dispatch(update(groupList.data));
        }
        fetchGroup();
    }, []);

    const groupListData = useSelector(state => state.group);

    return (
        <div className="Groupsprofile">
            <GroupTitle />
            {groupListData?.map(groups => (
                <div className="itemgroups d-flex justify-content-between">
                    <div className="img-title d-flex align-items-center justify-content-center">
                        <img src={groups.image} alt="" width="24" height="24"/>
                        <h2>{groups.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GroupProfile;