import { Link } from 'react-router-dom';
import './style.scss';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../../Link/linkSlice.js';
import linkApi from '../../../../api/linkApi';
import TimelinePostUserComponent from './TimelinePostUserComponent/index';

function TimelineUserComponent(props) {
    const dispatch = useDispatch();

    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)
    // const linkListData = useSelector(state => state.link);

    // console.log("Dữ liệu của người dùng: ", linkListData)

    useEffect(() => {
        const fetchLink = async () => {
            const linkList = await linkApi.getAll({ type: "user", });
            dispatch(update(linkList.data));
        }
        fetchLink();
    }, []);

    const linkList = useSelector(state => state.link)
    // console.log(linkList)

    const listPostOfUser = linkList.map(post => {
        return (
            <TimelinePostUserComponent
            id={post._id}
            key={post._id}
            imageUser={post.imagex}         
            userLink={post.userLink}
            nameUser={dataUsers.Fullname}           // check
            public = {props.public}                 // check
            datePost={post.createdAt}               // check

            groupLink={post.groupLink}

            imageGroup={post.image}        
            nameGroup={post.nameGroup}

            contentDesc={post.title}                // check 
            contentLink={post.link}                 // check
            imageLink={post.image}                  // check
            
            like={post.like}
            comment={post.comment}
            hour={post.hour}
        ></TimelinePostUserComponent>
        );
    });

    return (
        listPostOfUser
    );
}

export default TimelineUserComponent