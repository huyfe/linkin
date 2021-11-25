import React, { useEffect, useState } from 'react'
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

    //dùng dispatch 1 action
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTimeline = async () => {
            const postList = await timelineApi.getAll();
            dispatch(update(postList.data));
        }
        fetchTimeline();
    }, []);

    // dùng để lấy dữ liệu từ state
    const timeline = useSelector(state => state.timeline);
    console.log('Dữ liệu timeline' +timeline);

    console.log('Timeline group render')

    const Posts = [
        // {
        //     id: 1,
        //     imageUser: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2787&q=80',
        //     userLink: "/do-ba-dat",
        //     nameUser: "Bá Đạt",
        //     datePost: "20/10/2019",
        //     groupLink: "/cong-dong-frontend-vietnam",
        //     imageGroup: "/images/Timeline/group__thumb-1.png",
        //     nameGroup: "Cộng đồng Frontend Việt Nam",
        //     contentLink: "www.linkin.com/abcxyx",
        //     contentDesc: "Các nguyên lý cơ bản của lập trình...",
        //     imageLink: "/images/Timeline/post-thumb.png",

        //     like: 20,
        //     comment: 30,
        //     hour: 40,
        // },
        // {
        //     id: 2,
        //     imageUser: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
        //     userLink: "/do-ba-dat",
        //     nameUser: "Bá Đạt 2",
        //     datePost: "20/10/2019",
        //     groupLink: "/cong-dong-frontend-vietnam",
        //     imageGroup: "/images/Timeline/group__thumb-1.png",
        //     nameGroup: "Cộng đồng Frontend Việt Nam",
        //     contentLink: "www.linkin.com/abcxyx",
        //     contentDesc: "Các nguyên lý cơ bản của lập trình...",
        //     imageLink: "/images/Timeline/post-thumb.png",

        //     like: 20,
        //     comment: 30,
        //     hour: 40,
        // },
    ];
    const listPost = Posts.map(post => {
        return (
            <LinkComponent
                key={post.id}
                imageUser={post.imageUser}
                userLink={post.userLink}
                nameUser={post.nameUser}
                datePost={post.datePost}
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