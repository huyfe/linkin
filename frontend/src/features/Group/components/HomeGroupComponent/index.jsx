import React , { useEffect } from 'react';
import ManagerGroupComponent from '../ManagerGroupComponent';
import GroupJoinComponent from '../GroupJoinComponent';
import GroupSearchComponent from '../GroupSearchComponent';
import GroupFollowComponent from '../GroupFollowComponent';
import MyGroupComponent from '../MyGroupComponent';
import './style.scss';
import GroupNotificationComponent from '../GroupNotificationComponent';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../groupSlice';
import groupApi from './../../../../api/groupApi';



function HomeGroupComponent(props) {
    //dùng dispatch 1 action
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchGroup= async () => {
            const groupList = await groupApi.getAll();
            dispatch(update(groupList.data));
        }
        fetchGroup();

    }, []);
    // dùng để lấy dữ liệu từ state
    const groups = useSelector(state => state.group);
    console.log(groups);

    console.log("Render");


    return (
        <div className="homeGroup">
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-3">
                        <aside className="group__aside__left">
                            <GroupSearchComponent />
                            <ManagerGroupComponent />
                            <GroupJoinComponent />
                        </aside>
                    </div>
                    <div className="col-lg-6">
                        <main>
                            <div className="row">
                                <div className="col-12">
                                    <GroupNotificationComponent />
                                </div>
                            </div>
                            <MyGroupComponent />

                        </main>
                    </div>
                    <div className="col-lg-3">
                        <aside className="group__aside__right">
                            <GroupFollowComponent />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeGroupComponent;