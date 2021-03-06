import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import LinkComponent from '../../../../components/LinkComponent';

ListLinkComponent.propTypes = {

};

function ListLinkComponent(props) {

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
        <div className="news-feed-links">
            {listPost}
        </div>
    );
}

export default ListLinkComponent;