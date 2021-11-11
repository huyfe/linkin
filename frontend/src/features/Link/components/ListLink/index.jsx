import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import LinkItem from './../LinkItem/index';

ListLink.propTypes = {

};

function ListLink(props) {

    const linkListData = [
        {
            id: 1,
            title: "Nguyên tắc thiết kế cơ bản",
            urlPost: "/",
            urlLink: "https://www.youtube.com/",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            date: "12/11/2021",
            public: false,
        },
        {
            id: 2,
            title: "Nguyên tắc thiết kế cơ bản",
            urlPost: "/",
            urlLink: "https://www.youtube.com/",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            date: "12/11/2021",
            public: false,
        },
        {
            id: 3,
            title: "Nguyên tắc thiết kế cơ bản",
            urlPost: "/",
            urlLink: "https://www.youtube.com/",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            date: "12/11/2021",
            public: true,
        },
        {
            id: 4,
            title: "Nguyên tắc thiết kế cơ bản",
            urlPost: "/",
            urlLink: "https://www.youtube.com/",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            date: "12/11/2021"
        },
        {
            id: 5,
            title: "Nguyên tắc thiết kế cơ bản",
            urlPost: "/",
            urlLink: "https://www.youtube.com/",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            date: "12/11/2021"
        },
        {
            id: 6,
            title: "Nguyên tắc thiết kế cơ bản",
            urlPost: "/",
            urlLink: "https://www.youtube.com/",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            date: "12/11/2021"
        },
        {
            id: 7,
            title: "Nguyên tắc thiết kế cơ bản",
            urlPost: "/",
            urlLink: "https://www.youtube.com/",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            date: "12/11/2021"
        },
        {
            id: 8,
            title: "Nguyên tắc thiết kế cơ bản",
            urlPost: "/",
            urlLink: "https://www.youtube.com/",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            date: "12/11/2021"
        },
    ]

    const linkList = linkListData.map(link => {
        return (
            <LinkItem key={link.id} title={link.title} urlPost={link.urlPost} urlLink={link.urlLink} image={link.image} date={link.date} public={link.public} />
        )
    })

    return (
        <div className="list-link">
            {linkList}
        </div>
    );
}

export default ListLink;