import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { update } from './linkSlice';
import linkApi from '../../api/linkApi';
import LinkHomePage from './pages/LinkHomePage/index';
import { Route, Routes } from 'react-router-dom';

LinkFeature.propTypes = {

};

function LinkFeature(props) {
    return (
        <div>
            <Routes>
                <Route path="/links" element={<LinkHomePage />} />
            </Routes>
        </div>
    );
}

export default LinkFeature;