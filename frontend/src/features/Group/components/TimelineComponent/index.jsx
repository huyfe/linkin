import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import './style.scss';
import LinkComponent from '../../../../components/LinkComponent';
import UpLoadLinkComponent from '../../../../components/UploadLinkComponent/index';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../timelineSlice';
import timelineApi from '../../../../api/timelineApi';

function TimelineGroup() {
    const [userInfo, setUserInfo] = useState({
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        href: "/profile/tran-quoc-huy"
    })
    // use params lấy id của group

    // dùng dispatch 1 action
    const dispatch = useDispatch();
    // let { id } = useParams();
    // ID của nhóm
    const id = 1;

    useEffect(() => {
        const fetchGroup= async () => {
            const timeline = await timelineApi.getAll();
            dispatch(update(timeline.data));
        }
  
        fetchGroup();
    }, []);

    // Lấy dữ liệu từ state
    const link = useSelector(state => state.link);
    const timeline = useSelector(state => state.timeline);
    
    // console.log("Dữ liệu của tất cả bài viết: ", link);
    // console.log("Dữ liệu group detail: ",timeline)
    // console.log(link._id);
    const listPost = timeline.map(post => {
        // Kiểm tra dữ liệu có phải là nhóm hay không
        return (
            <LinkComponent
                key={post.id}
                imageUser={post.imageUser}
                userLink={post.userLink}
                nameUser={post.nameUser}

                datePost={post.createdAt}
                groupLink={post.groupLink}
                imageGroup={post.imageGroup}
                nameGroup={post.nameGroup}
                contentDesc={post.contentDesc}
                contentLink={post.contentLink}
                imageLink={post.imageLink}
                
                like={post.like}
                comment={post.comment}
                hour={post.hour}
            ></LinkComponent>
        );
    });
   
    return (
        <section id="timelineGroup">
            <div className="timeline__group">
                <UpLoadLinkComponent avatar={userInfo.avatar} href={userInfo.href} />
                {listPost}
            </div>
        </section>
    )
}

export default TimelineGroup;