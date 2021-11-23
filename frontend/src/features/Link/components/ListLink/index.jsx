import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import LinkItem from './../LinkItem/index';
import { useDispatch, useSelector } from 'react-redux';
import linkApi from '../../../../api/linkApi';
import { update } from '../../linkSlice';

ListLink.propTypes = {

};

function ListLink(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchLink = async () => {
            const linkList = await linkApi.getAll();
            dispatch(update(linkList.data));
        }
        fetchLink();
    }, []);

    const linkListData = useSelector(state => state.link);

    const linkList = linkListData.map(link => {
        return (
            <LinkItem key={link._id} id={link._id} title={link.title} urlPost={link.link} urlLink={link.link} image={link.image} date={link.created_date} public={link.public} />
        )
    })

    return (
        <div className="list-link">
            {linkList}
        </div>
    );
}

export default ListLink;