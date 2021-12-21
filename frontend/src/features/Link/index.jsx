import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { update } from './linkSlice';
import linkApi from '../../api/linkApi';
import LinkHomePage from './pages/LinkHomePage/index';
import { Route, Routes } from 'react-router-dom';
import Error404Page from '../User/pages/Error404Page';

LinkFeature.propTypes = {

};

function LinkFeature(props) {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    return (
        <div>
            {
                (dataUsers) ? (
                    <Routes>
                        <Route path="/links" element={<LinkHomePage />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/links" element={<Error404Page />} />
                    </Routes>
                )
            }
        </div>
    );
}

export default LinkFeature;