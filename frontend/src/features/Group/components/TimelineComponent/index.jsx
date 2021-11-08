import React from 'react'
import './style.scss';
import { Link } from 'react-router-dom';
import LinkComponent from '../../../../components/LinkComponent';

function TimelineGroup() {
    const Posts = [
        {   
            id: 1,
            imageUser: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2787&q=80',
            userLink: "/do-ba-dat",
            nameUser: "Bá Đạt",
            datePost: "20/10/2019",
            
            groupLink: "/cong-dong-frontend-vietnam",
            imageGroup: "/images/Timeline/group__thumb-1.png",
            nameGroup: "Cộng đồng Frontend Việt Nam",
            contentLink: "www.linkin.com/abcxyx",
            contentDesc: "Các nguyên lý cơ bản của lập trình...",
            imageLink: "/images/Timeline/post-thumb.png",
            like: 20,
            comment: 30,
            hour: 40,
        },
        {
            id: 2,
            imageUser: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
            userLink: "/do-ba-dat",
            nameUser: "Bá Đạt 2",
            datePost: "20/10/2019",

            groupLink: "/cong-dong-frontend-vietnam",
            imageGroup: "/images/Timeline/group__thumb-1.png",
            nameGroup: "Cộng đồng Frontend Việt Nam",
            contentLink: "www.linkin.com/abcxyx",
            contentDesc: "Các nguyên lý cơ bản của lập trình...",
            imageLink: "/images/Timeline/post-thumb.png",
            like: 20,
            comment: 30,
            hour: 40,
        },

    ];
    const listPost = Posts.map(post => {
        return (
            <LinkComponent
                imageUser={post.imageUser}
                userRef={post.userProfileRef}
                nameUser={post.nameUser}
                datePost={post.datePost}
                groupRef={post.groupRef}
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
                <div className="box-share d-flex justify-content-between align-items-center mb-5 mt-5">
                    <div className="avatar">
                        <img src="images/Timeline/huythanhxuan.jpg" />
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Bạn muốn chia sẻ gì nào ?" />
                    </div>
                </div>
                {listPost}
            </div>
        </section>
    )
}

export default TimelineGroup;