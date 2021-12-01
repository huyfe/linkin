import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import linkApi from '../../api/linkApi';
import categoriesApi from '../../api/categoriesApi';
import { fetchCatOfUser } from '../Category/categoriesUserSlice';
import { useDispatch } from 'react-redux';

function HomeFeature() {
    // useEffect(() => {
    //     const fetchLink = async () => {
    //         const linkList = await linkApi.getAll();
    //         console.log(linkList);
    //     }
    //     fetchLink();
    // }, []);

    const dispatch = useDispatch();

    const dataUser = JSON.parse(localStorage.getItem("dataUser"));

    //Nạp dữ liệu cho Redux -> Category
    useEffect(() => {
        const fetchCatUser = async (id) => {
            let {data} = await categoriesApi.getCatOfUser(id);
            dispatch(fetchCatOfUser(data));
        };

        fetchCatUser(dataUser.Id);
    }, [])

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default HomeFeature;