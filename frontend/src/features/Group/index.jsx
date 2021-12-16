import React from 'react'
import { Routes, Route } from 'react-router-dom';
import DetailGroupComponent from './components/DetailGroupComponent';
import HomeGroupComponent from './components/HomeGroupComponent';
import { update } from './groupSlice';
import groupApi from './../../api/groupApi';
import Error404Page from '../User/pages/Error404Page';

function GroupFeature() {
    const dataUser = localStorage.getItem("dataUser")
    const dataUsers = JSON.parse(dataUser)

    return (
        (dataUsers) ? (
            <Routes>
                <Route path="/groups" element={<HomeGroupComponent />} />
                <Route path="/groups/*" element={<DetailGroupComponent />} />
            </Routes>
        ) : (
            <Routes>
                <Route path="/groups" element={<Error404Page />} />
                <Route path="/groups/*" element={<Error404Page />} />
            </Routes>
        )

    )
}

export default GroupFeature;
