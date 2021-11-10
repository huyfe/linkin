import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import linkApi from '../../../../api/linkApi';
import { update } from '../../linkSlice';

LinkHomePage.propTypes = {

};

function LinkHomePage(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchLink = async () => {
            const linkList = await linkApi.getAll();
            dispatch(update(linkList.data));
        }
        fetchLink();


    }, []);

    const links = useSelector(state => state.link);
    console.log(links);

    console.log("Render");
    return (
        <div>
            This is link home page
        </div>
    );
}

export default LinkHomePage;